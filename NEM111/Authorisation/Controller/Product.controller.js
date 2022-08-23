const express = require('express');
const ProductController = express.Router();

const Authentication = require("../Middlewares/Authentication");
const Authorization = require("../Middlewares/Authorization");

ProductController.get("/admindashboard",Authentication, Authorization(["admin"]), async(req,res) => {
    return res.send("Admin Dashboard");
})

ProductController.get("/sellerdashboard",Authentication, Authorization(["admin","seller"]), async(req,res) => {
    return res.send("Seller Dashboard")
})

module.exports = ProductController;