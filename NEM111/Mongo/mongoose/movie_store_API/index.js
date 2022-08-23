


const { create } = require("json-server");
const mongoose = require("mongoose");

//1.connnect to db
const connection = mongoose.connect("mongodb://localhost:27017")




const MovieSchema = new mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    rating: Number,
    releaseDate: String,
    earnings: { type: Number, default:1000, min:0, max:10000 },
    cast: { type: [String] },
    language: {
      type: String,
      enum: ["English", "Hindi"],
    },
  });
  
  const Movie = mongoose.model("movie", MovieSchema);
  
  module.exports = {Movie,connection};