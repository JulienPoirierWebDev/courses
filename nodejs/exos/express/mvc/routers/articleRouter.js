const express = require("express");

const {
  getArticle,
  getArticles,
  createArticleForm,
  createArticleAction,
  deleteArticle,
  updateArticleForm,
  updateArticleAction,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/", getArticles);

router.get("/new", createArticleForm);

router.post("/", createArticleAction);

router.get("/:id", getArticle);

router.get("/:id/update", updateArticleForm);

router.post("/:id/update", updateArticleAction);

router.post("/:id/delete", deleteArticle);

module.exports = router;
