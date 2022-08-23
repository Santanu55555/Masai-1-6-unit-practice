const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
const validator=(req,res,next)=>{
    const {id,title,author,content}=req.body
    if(id && title && author && content && typeof(id) === 'number' && typeof(title)==='string' && typeof(author)==='string' && typeof(content)==='string'){
        next()
    }
    else{
        console.log("cant post")
        res.send("Validation Failed")
          }
}
const logger=(req,res,next)=>{
    let payload=["Method-"+req.method,"Route-"+req.path,"'user-agent"+req.headers["user-agent"]]
    fs.appendFile("logs.txt",payload.join(" ")+"\n",(err)=>{
        if(err){
            throw err;
                    }
        console.log("ok")
    })
    next()
}


const guard=(req,res,next)=>{
        if(req.query.password==54123){
            next()
        }
        else{
            res.send("You are not authorised to do this operation")
        }
}

app.use(logger)
app.get('/',(req,res)=>{
    res.send("welcome home")
})
app.use(validator)
app.post("/posts/create",(req,res)=>{
fs.readFile('./posts.json',"utf-8",(err,data)=>{
    const parsed=JSON.parse(data)
    parsed.posts=[...parsed.posts,req.body]
    fs.writeFile('./posts.json',
    JSON.stringify(parsed),"utf-8",()=>{
        res.send("post added")
    })})})

  
app.get("/posts", (req, res) => {
        fs.readFile("./posts.json", "utf-8", (err, data) => {
          const getparsed = JSON.parse(data);
          res.send(JSON.stringify(getparsed.posts));
        })})
 app.use(guard)
app.put("/posts/:postId",(req,res)=>{
            const {postId}=req.params
            fs.readFile("./posts.json", "utf-8", (err, data) => {
                const putparsed = JSON.parse(data);
                putparsed.posts = putparsed.posts.map((p) => (p.id == postId?(p=req.body):p));
            
                fs.writeFile("./posts.json", JSON.stringify(putparsed), "utf-8", () => {
                  res.send("Product is updated");
                });
              });
        })
app.delete("/posts/:postId", (req, res) => {
    const {postId } = req.params;
  
    fs.readFile("./posts.json", "utf-8", (err, data) => {
      const parsed = JSON.parse(data);
      parsed.posts = parsed.posts.filter((p) => p.id !=postId);
  
      fs.writeFile("./posts.json", JSON.stringify(parsed), "utf-8", () => {
        res.send("Product is deleted");
      });
    });
  });


    app.listen(5000,console.log("chalua ho gya miyan"))