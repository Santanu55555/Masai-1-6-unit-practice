const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const UserModel = require("../Models/User.model");

const UserController = express.Router();

UserController.post("/signup", async (req, res) => {
  console.log(req.url);
  const { email, password, age } = req.body;

  await bcrypt.hash(password, 8, function (err, hash) {
    if (err) {
      return res.send("Signup failed, please try again");
    }
    const user = new UserModel({ email, password: hash, age });
    user.save();
    return res.send("Signup Successful");
  });
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("Invalid Credentials");
  }

  const hashed_password = user.password;

  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      return res.send("Please try again");
    }
    if (result === true) {
      const token = jwt.sign(
        { email: user.email, age: user.age, id: user._id },
        process.env.jwt_secret_key
      );
      return res.send({ message: "Login Successful", token: token });
    } else {
      return res.send("Invalid Credentials");
    }
  });
});

module.exports = UserController;
