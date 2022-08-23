const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/post", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  console.log(data.hello);
  res.send(data);
});

app.post("/attendance", (req, res) => {
  log = req.body;
  const prev=fs.readFileSync("./db.json", "utf-8")
  const prevdata = JSON.parse(prev);
  const attendance = prevdata.hello;
  attendance.push(log);
  const new_data = JSON.stringify(prevdata);
  fs.writeFileSync("./db.json",new_data,'utf-8')
  console.log(new_data);
  res.send("hogya post");
});
// app.get("/post",(req,res)=>{
//         const posts=fs.readFileSync("post.txt","utf-8")
//       res.send(posts)
// })
// app.post("/post",(req,res)=>{
//    const puchicat=JSON.stringify(req.body)
//     fs.writeFileSync("post.txt",puchicat,"utf-8")

//     res.send("xyz")
// })












app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.post("/", (req, res) => {
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = [...parsed.todos, req.body];
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo Added");
      }
    );
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = parsed.todos.filter((el) => el.id != id);
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo deleted");
      }
    );
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = parsed.todos.map((el) =>
      el.id == id ? (el = req.body) : el
    );
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo updated");
      }
    );
  });
});









app.listen(5000, () => console.log("server started"));
