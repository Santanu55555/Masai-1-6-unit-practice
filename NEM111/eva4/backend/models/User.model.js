const mongoose = require('mongoose')
const dns=require("dns")
const userSchema= mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    age:Number,
    ip:String
})
const UserModel = mongoose.model('User',userSchema)
module.exports = UserModel