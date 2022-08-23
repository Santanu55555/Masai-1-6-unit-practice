const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  roll: { type: String, default: "customer"}
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
