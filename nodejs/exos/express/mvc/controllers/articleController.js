const {
  getArticleById,
  getAllArticles,
  createArticle,
  deleteArticleById,
  updateArticleById,
} = require("../models/articleModel");

const getArticle = (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const article = getArticleById(id);
    if (article) {
      response.render("article/oneArticle", { article });
    } else {
      response.status(404).send("Article not found");
    }
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

const getArticles = (request, response) => {
  try {
    const articles = getAllArticles();
    response.render("article/index", { articles });
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

const createArticleForm = (request, response) => {
  response.render("article/new");
};

const createArticleAction = async (request, response) => {
  try {
    const { title, content } = request.body;
    const article = await createArticle({ title, content });
    response.redirect(`article/${article.id}`);
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

const deleteArticle = (request, response) => {
  try {
    const id = parseInt(request.params.id);
    deleteArticleById(id);
    response.redirect("/article");
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

const updateArticleForm = (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const article = getArticleById(id);
    if (article) {
      response.render("article/update", { article });
    } else {
      response.status(404).send("Article not found");
    }
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

const updateArticleAction = (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { title, content } = request.body;
    updateArticleById(id, { title, content });
    response.redirect(`/article/${id}`);
  } catch (err) {
    response.status(500).send("Internal server error");
  }
};

module.exports = {
  getArticle,
  getArticles,
  createArticleForm,
  createArticleAction,
  deleteArticle,
  updateArticleForm,
  updateArticleAction,
};
