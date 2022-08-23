const express=require("express")
const dns=require("dns")
const app=express()
const fs=require("fs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post('/getmeip', (req,res) => {
    const url = req.body.website_name;
    dns.lookup(url, (err, value) => { 
        if(err) { 
            console.log(err); 
            return; 
        } 
        res.send(value) 
    }) 
})

app.post("/product/create",(req,res)=>{
fs.readFile('./products.json',"utf-8",(err,data)=>{
    const parsedata=JSON.parse(data)
    parsedata.products=[...parsedata.products,req.body]
    fs.writeFile('./products.json',
    JSON.stringify(parsedata),"utf-8",()=>{
        res.send("created product")
    })
})
})
app.get("/products", (req, res) => {
    fs.readFile("./products.json", "utf-8", (err, data) => {
      const parsed = JSON.parse(data);
      res.send(JSON.stringify(parsed.products));
    });
  });
app.put("/products/:productId",(req,res)=>{
    const {productId}=req.params
    fs.readFile("./products.json", "utf-8", (err, data) => {
        const parsed = JSON.parse(data);
        parsed.products = parsed.products.map((p) => (p.id == productId ? (p = req.body) : p));
    
        fs.writeFile("./products.json", JSON.stringify(parsed), "utf-8", () => {
          res.send("Product is updated");
        });
      });
})

app.delete("/products/:productId", (req, res) => {
    const { productId } = req.params;
  
    fs.readFile("./products.json", "utf-8", (err, data) => {
      const parsed = JSON.parse(data);
      parsed.products = parsed.products.filter((p) => p.id != productId);
  
      fs.writeFile("./products.json", JSON.stringify(parsed), "utf-8", () => {
        res.send("Product is deleted");
      });
    });
  });



app.listen(7000,console.log("server chal gaya"))

