const express = require('express')
const connection=require("./config/db")
const userController = require("./routes/user.routes")
const authentication=require("./middlewares/authentication")
const todosController=require('./routes/todos.routes')
const cors = require("cors")
const app= express()

require("dotenv").config()

app.use(express.json())

app.use(cors())

app.get("/",(req, res) => {
    res.send("Hello World")
})
app.use("/user", userController)
app.use(authentication)
app.use("/todos", todosController)

app.listen(process.env.PORT, async() => {
    try{
        await connection
        console.log("connnected")
    }
    catch(err){
        console.log("cant connect")
        console.log(err)
    }
    console.log("listening on 8080")
})