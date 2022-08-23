const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const NotesController = express.Router();

const NoteModel = require("../Models/Notes.model");
const Authentication = require("../Middlewares/Authentication");
const Authorization = require("../Middlewares/Authorization");

NotesController.get("/", Authentication, async (req, res) => {
  const notes = await NoteModel.find();
  return res.send(notes);
});

NotesController.post("/", Authentication, async (req, res) => {
  const { title, note, label } = req.body;
  const MainNote = NoteModel.insertMany([{ title, note, label }]);
  return res.send("Note created");
});

NotesController.put("/:id", Authentication, Authorization(["admin"]), async (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body;

  const notes = await NoteModel.updateOne({ _id: id }, updatedNote);
  return res.send({ message: "Note is Updates", note: notes });
});

NotesController.delete("/:id", Authentication,Authorization(["admin"]), async (req, res) => {
  const id = req.params.id;
  const notes = await NoteModel.deleteOne({ _id: id });
  return res.send({ message: "Note is Deleted", note: notes });
});

module.exports = NotesController;
