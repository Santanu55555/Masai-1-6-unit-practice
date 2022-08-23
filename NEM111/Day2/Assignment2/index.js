const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if (req.url === "/textsync") {
       try{
        const data = fs.readFileSync("./text.txt");
        res.setHeader("content-type", "text/plain");
        console.log("hogya")
        return res.end(data);
       }
       catch{
        console.log("err")
       }
      }
    
      if (req.url === "/textasync") {
        fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
          if (err) {
            console.log(err);
          }
          res.setHeader("content-type", "text/plain");
          return res.end(data);
        });
      }
    
      if (req.url === "/textstream") {
        const stream = fs.createReadStream("./test.txt");
        stream.pipe(res);
      }
   
})


server.listen(5000,()=>{
    console.log("server chal gya")
})