const express = require("express")
const { applyMiddleware } = require("redux")

const {connection,StudentModel} = require("./index")

const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
        res.send("Home page")
})


app.get('/students',async(req, res)=>{
        console.log(req.query)
        const {name,age}=req.query
        const results=await StudentModel.find({$or:[{name},{age}]},{_id:0,__v:0})
        res.send(results)
})

app.post('/students/create',(req, res)=>{
//    const studentsData=new StudentModel(req.body)
//     await studentsData.save()

    const students = await StudentModel.insertMany([req.body])

    res.send("data saved")
})


app.listen(8080,async()=>{
   try{
    await connection
   }
   catch(e){console.log("Error Listening")}
    console.log("listening on port 8080");
})