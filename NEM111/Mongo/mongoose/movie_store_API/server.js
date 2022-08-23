const express = require("express");
const { Movie, connection } = require("./index");
const app = express();

app.use(express.json());

app.post("/movies", async (req, res) => {
  const movie = new Movie(req.body);
  movie.save();
  return res.send("movie added");
});

app.delete("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.deleteOne({ id: id });
  return res.send(movie);
});

app.patch("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.updateOne({ id: id }, { $set: { ...req.body } });
  return res.send(movie);
});

app.get("/movies", async (req, res) => {
  const params = req.query;
  const movies = await Movie.find(params);
  return res.json(movies);
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch {
    console.log("Failed to connect");
  }

  console.log("server connected");
});
