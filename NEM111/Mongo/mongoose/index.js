const { create } = require("json-server");
const mongoose = require("mongoose");

//1.connnect to db
const connection = mongoose.connect("mongodb://localhost:27017")
// const connectDB = async () => {
//   const conn = connection;
//   console.log("connected");

//     const studentDocument = new StudentModel({
//         name:"John",
//         id:"cena",
//         age:24
//     })
//     await studentDocument.save()
//     console.log("data saved")
//   // conn.disconnect()
// };

// connectDB();

const studentSchema = new mongoose.Schema({
  name: {type:String,required:true},
  id: String,
  age: Number,
});

const StudentModel = mongoose.model("Student",studentSchema);

//conventions - good practices
// 1) use of new keyword while create schema
// 2)giving the model name in singular - mongoose will make it plural
// 3) Model , Class , Constructor -keep the 1st letter capital

module.exports ={
    connection,StudentModel
}