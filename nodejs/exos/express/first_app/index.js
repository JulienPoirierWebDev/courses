const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello/:name&:something", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.name} with ${req.params.something}`);
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.send(`Goodby ${req.query.name} and ${req.query.something}`);
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  res.send(name);
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
