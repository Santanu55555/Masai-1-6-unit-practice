const express = require("express")
const {connection,UserModel,NotesModel}= require("./server")
const app=express()
var jwt = require('jsonwebtoken');

app.use(express.json())

const validator=(req,res,next)=>{
    const {title,note,label}=req.body
    if( title && note && label ){
        next()
    }
    else{
        console.log("cant post")
        res.send("Validation Failed")
          }
}

app.get('/', (req,res)=>{
    res.send("Home page")
})

app.post('/signup', async(req,res)=>{    
    const {email,password,age} = req.body
    const user=new UserModel({
        email,password,age
    })
  
    await user.save()
    return res.send("signup  successfull")
})

app.post('/login', async(req,res)=>{    
    const {email,password} = req.body
    const user= await UserModel.find({email,password})
    var token = jwt.sign({ email: user.email, age: user.age}, 'jaadu');
    if(!user.length){
        return res.send("Invalid credentials")
    }    
    else{
     
        return res.send(`Login successfull , token is  ${token}`)
    }
})







app.delete("/note/:id", async (req, res) => {
    const user_token=req.query.token
    jwt.verify(user_token, 'jaadu', function(err, decoded) {
    if(err){
     res.send("please log in again")
    }
   });
    const { id } = req.params;
    const note = await NotesModel.deleteOne({ _id: id });
    return res.send(note);
  });



  app.patch("/note/:id", async (req, res) => {
    const user_token=req.query.token
    jwt.verify(user_token, 'jaadu', function(err, decoded) {
    if(err){
     res.send("please log in again")
    }
   });
    const { id } = req.params;
    const note = await NotesModel.updateOne({ id: id }, { $set: { ...req.body } });
    return res.send(note);
  });
  
  app.get("/notes", async (req, res) => {
    const user_token=req.query.token
    jwt.verify(user_token, 'jaadu', function(err, decoded) {
    if(err){
     res.send("please log in again")
    }
   });
    const params = req.query;
    const note = await NotesModel.find(params);
    return res.json(note);
  });
  app.use(validator)
  app.post('/create', async(req,res)=>{
    const {Title,Note,Label} = req.body
    const user_token=req.query.token
   jwt.verify(user_token, 'jaadu', function(err, decoded) {
   if(err){
    res.send("please log in again")
   }
  });
    const note=new NotesModel(req.body)

    await note.save()
    return res.send("Notes created successfully")
})
app.listen(8080,async()=>{
    try{
     await connection
    }
    catch(e){console.log("Error Listening")}
     console.log("listening on port 8080");
 })