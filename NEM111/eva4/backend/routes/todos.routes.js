const express = require("express");
const TodosModel = require("../models/Todo.model");

const todosController = express.Router();

todosController.post("/create", async (req, res) => {
  const { taskname, status, tag, userId } = req.body;
  const new_todo = new TodosModel({
    taskname,
    status,
    tag,
    userId,
  });
  await new_todo.save();
  res.send({ message:"todo created", new_todo });
});

todosController.get("/", async (req, res) => {
  const { userId } = req.body;
  const todos = await TodosModel.find({ userId });
  res.send(todos);
});

todosController.patch("/:todosId/edit", async (req, res) => {
  const { todosId } = req.params;
  const { userId } = req.body;
  const todo = await TodosModel.findOne({ _id: todosId });

  if (todo.userId === userId) {
    const new_todo = await TodosModel.findOneAndUpdate(
      { _id: todosId },
      req.body,
      { new: true }
    );
    return res.send({ message: "updated", new_todo });
  } else {
    return res.send("not authorised");
  }
});

todosController.delete("/:todosId/delete", async (req, res) => {
  const { todosId } = req.params;
  const { userId } = req.body;
  const note = await TodosModel.findOne({ _id: todosId });

  if (note.userId === userId) {
    await TodosModel.findOneAndDelete({ _id: todosId });
    return res.send({ message: "successfully deleted" });
  } else {
    return res.send("you are not authorised to do it");
  }
});

module.exports = todosController;
