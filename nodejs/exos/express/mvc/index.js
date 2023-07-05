const express = require("express");

const articleRouter = require("./routers/articleRouter");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/article", articleRouter);

app.listen(3000, () => {
  console.log("Server started");
});
