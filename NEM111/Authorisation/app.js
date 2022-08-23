const express = require("express");
const app = express();
app.use(express.json());

const { connection } = require("./Config/Config");
const UserController = require("./Controller/User.controller");
const NotesController = require("./Controller/Notes.controller");
const ProductController = require("./Controller/Product.controller");

app.use("/", UserController);
app.use("/notes", NotesController);
app.use("/products", ProductController);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connection established");
  } catch {
    console.log("Connection error");
  }
  console.log("listening on port 8080");
});
