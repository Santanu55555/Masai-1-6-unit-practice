const http =require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)
    // res.write("ok")
    // res.write("Ditective Cloe")
    // res.end()
  if(req.method=="GET"){
    if(req.url=="/post"){
            fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
                  if(err){
                    res.end("Something went wrong")
                  }
                  res.end(data)
            })
// -->except call back we can use try and catch


        // res.setHeader("content-type","text/html")
        // res.setHeader("content-type","application/json")
        // const obj={
        //     name:"santanu",
        //     package:"12lpa",
        //     dream:"comes true"
        // }
        // res.end(JSON.stringify(obj))
        // res.end("<h1>hello</h1>")
    }
    else{
        res.end("welcome to homepage")
    }
  }
})

server.listen(5000,()=>{
    console.log("Listening to server")
})