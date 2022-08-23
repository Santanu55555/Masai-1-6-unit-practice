const express = require("express");
const app = express()

//req.url to get the path
 
const print=(req,res,next)=>{
  console.log(req.url)
    next()
    console.log("process completed")
}

app.use(print)
//middleware - it is a function , between the req and res

//DNS - helps us translate the website name to IP address

app.get("/",(req,res)=>{
  res.send("hello")    
})


app.listen(5000,()=>{
    console.log("server start hela be")
});