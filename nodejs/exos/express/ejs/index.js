const express = require("express");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.get("/ma-page", (req, res) => {
  const header = "Cosmo Works";

  const content = "Lorem ipsum dolor sit ame";

  const footer = "Cosmo Works - 2023";

  res.render("my-page", { header, content, footer });
});

app.get("/list", (req, res) => {
  const list = ["item1", "item2", "item3"];
  const header = "Cosmo Works";

  res.render("list", { header, list });
});

app.get("/:name", (req, res) => {
  const { name } = req.params;

  res.render("index", { name: name });
});

app.get("/", (req, res) => {
  res.render("index", { name: "World" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
