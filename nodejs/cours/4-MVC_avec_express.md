# Faire un site web avec Node.js et Express avec l'architecture MVC

## MVC, c'est quoi ?

MVC est un acronyme pour Model View Controller. C'est un pattern d'architecture logicielle qui permet de séparer les données, la logique et l'interface utilisateur d'une application.

En gros, ça veut dire que l'on va séparer notre code en trois parties :

- le modèle, qui contient les données et la logique de l'application
- la vue, qui contient l'interface utilisateur
- le contrôleur, qui fait le lien entre le modèle et la vue

## Pourquoi MVC ?

L'architecture MVC permet de séparer les différentes parties d'une application. Cela permet de rendre le code plus lisible et plus facile à maintenir.

Nous avons déja vu avec Express que l'on pouvait faire des routes dans des fichiers séparés. C'est une première étape vers l'architecture MVC. Toutefois, laisser la logique de l'application dans les routes n'est pas une bonne pratique.

## Comment faire du MVC avec Express ?

Il faut déja choisir un moteur de template pour le V de MVC. Nous allons utiliser le moteur de template [EJS](https://ejs.co/), que nous avons déja vu. Nous aurons donc le dossier views qui contiendra les vues de notre application.

Pour le M de MVC, nous allons créer un dossier `models` dans lequel nous allons mettre les modèles de notre application. Un modèle est une classe ou un groupe de fonctions qui représente un objet de notre application. Par exemple, pour un blog, nous aurions un modèle `Article` qui représente un article de blog.

Pour le C de MVC, nous allons créer un dossier `controllers` dans lequel nous allons mettre les contrôleurs de notre application. Un contrôleur est une classe ou un groupe de fonctions qui contient la logique de notre application. Par exemple, pour un blog, nous aurions un contrôleur `ArticleController` qui contient la logique pour afficher un article de blog.

## Exemple

Nous allons créer une application qui affiche une liste d'articles de blog. Nous aurons donc un modèle `Article` qui représente un article de blog. Nous aurons aussi un contrôleur `ArticleController` qui contient la logique pour afficher un article de blog. Enfin, nous aurons une vue `index.ejs` qui affiche la liste des articles de blog.

Par soucis de simplicité, nous n'allons pas faire de POO. Nous allons juste créer des fonctions.

### Le modèle

Nous allons créer un fichier `models/articleModel.js` qui contient le modèle `Article`. Ce modèle contient une liste d'articles de blog.

```js
const articles = [
  {
    id: 1654320000000,
    title: "Introduction à Node.js : La plateforme JavaScript côté serveur",
    content:
      "Node.js est une plateforme JavaScript côté serveur qui permet d'exécuter du code JavaScript sur le serveur. Avec Node.js, les développeurs peuvent créer des applications web rapides et évolutives. Dans cet article, nous explorerons les bases de Node.js, ses caractéristiques et comment commencer à l'utiliser.",
  },
  {
    id: 1678972800000,
    title: "Création d'un serveur HTTP avec Node.js et Express",
    content:
      "Dans ce tutoriel, nous apprendrons comment créer un serveur HTTP simple en utilisant Node.js et le framework Express. Nous couvrirons l'installation d'Express, la configuration d'un point de terminaison et la gestion des requêtes HTTP. Vous serez en mesure de démarrer rapidement avec la création de serveurs web robustes avec Node.js.",
  },
  {
    id: 1678972800000,
    title: "Gestion des dépendances avec npm dans les projets Node.js",
    content:
      "npm (Node Package Manager) est l'outil de gestion des dépendances le plus populaire pour les projets Node.js. Dans cet article, nous explorerons les fonctionnalités de base de npm, y compris l'installation de packages, la gestion des versions et la configuration des dépendances. Vous découvrirez comment utiliser npm pour organiser et gérer efficacement les packages dans vos projets Node.js.",
  },
  {
    id: 1696118400000,
    title: "Express.js : Construire des API RESTful avec Node.js",
    content:
      "Express.js est un framework web minimaliste et flexible pour Node.js. Dans ce guide, nous vous montrerons comment construire des API RESTful en utilisant Express.js. Vous apprendrez à définir des routes, à gérer les requêtes et les réponses, à mettre en œuvre les opérations CRUD et à sécuriser votre API. Express.js offre une solution puissante et élégante pour créer des API robustes et évolutives.",
  },
  {
    id: 1709795200000,
    title: "Authentification utilisateur dans les applications Node.js",
    content:
      "L'authentification utilisateur est une fonctionnalité essentielle pour de nombreuses applications web. Dans cet article, nous examinerons les différentes méthodes d'authentification utilisateur dans les applications Node.js, y compris l'authentification basée sur des sessions, l'authentification par jeton (token) et l'authentification par OAuth. Vous apprendrez comment mettre en œuvre ces méthodes pour sécuriser votre application et gérer l'identification des utilisateurs.",
  },
  {
    id: 1723449600000,
    title: "Gestion des fichiers et des flux de données avec Node.js",
    content:
      "Node.js fournit des fonctionnalités puissantes pour la gestion des fichiers et des flux de données. Dans cet article, nous explorons les différentes opérations de lecture et d'écriture de fichiers, le traitement des flux de données, la compression et le déballage de fichiers, ainsi que la gestion des opérations asynchrones. Vous découvrirez comment Node.js facilite la manipulation des fichiers et la manipulation des données.",
  },
  {
    id: 1737139200000,
    title: "Test unitaire avec Jest : La bibliothèque de test pour Node.js",
    content:
      "Jest est une bibliothèque de test populaire pour les applications Node.js. Dans ce tutoriel, nous vous montrerons comment utiliser Jest pour écrire des tests unitaires pour votre code Node.js. Vous apprendrez à configurer Jest, à écrire des suites de tests, à effectuer des assertions et à exécuter les tests. Jest offre une expérience de test agréable et puissante pour garantir la qualité de votre code.",
  },
  {
    id: 1750777600000,
    title: "Déploiement d'une application Node.js sur une plateforme de cloud",
    content:
      "Le déploiement d'une application Node.js sur une plateforme de cloud est un processus essentiel pour la mise en production. Dans cet article, nous passerons en revue les étapes pour déployer une application Node.js sur des plateformes populaires de cloud telles que AWS, Azure et Google Cloud. Vous découvrirez comment configurer l'environnement, déployer l'application et gérer les ressources de manière efficace.",
  },
  {
    id: 1764422400000,
    title: "Optimisation des performances dans les applications Node.js",
    content:
      "Les performances sont cruciales pour les applications Node.js à fort trafic. Dans cet article, nous explorerons les meilleures pratiques d'optimisation des performances dans les applications Node.js. Nous couvrirons des sujets tels que la gestion de la mémoire, l'utilisation efficace des événements, la mise en cache, l'optimisation des requêtes et l'équilibrage de charge. Vous apprendrez à rendre vos applications Node.js plus rapides et plus évolutives.",
  },
  {
    id: 1778073600000,
    title:
      "Sécurité des applications Node.js : Bonnes pratiques et mesures de protection",
    content:
      "La sécurité est un aspect essentiel lors du développement d'applications Node.js. Dans cet article, nous examinerons les meilleures pratiques de sécurité pour les applications Node.js, y compris la protection contre les attaques courantes telles que les injections SQL, les attaques par déni de service (DDoS) et les vulnérabilités XSS. Vous découvrirez comment mettre en place des mesures de sécurité robustes pour protéger vos applications Node.js contre les menaces.",
  },
];

const createArticle = ({ title, content }) => {
  const id = Date.now();
  const article = {
    id,
    title,
    content,
  };
  articles.push(article);
  return article;
};

const getArticleById = (id) => {
  return articles.find((article) => article.id === id);
};

const getAllArticles = () => {
  return articles;
};

const deleteArticleById = (id) => {
  articles = articles.filter((article) => article.id !== id);
};

const updateArticleById = (id, { title, content }) => {
  const index = articles.findIndex((article) => article.id === id);
  articles[index] = {
    ...articles[index],
    title,
    content,
  };
};

module.exports = {
  createArticle,
  getArticleById,
  getAllArticles,
  deleteArticleById,
  updateArticleById,
};
```

### Le contrôleur

Nous allons créer un fichier `controllers/articleController.js` qui contient le contrôleur `ArticleController`. Ce contrôleur contient la logique pour afficher un article de blog.

```js
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
  response.render("/article/new");
};

const createArticleAction = async (request, response) => {
  try {
    const { title, content } = request.body;
    const article = await createArticle({ title, content });
    response.redirect(`/article/${article.id}`);
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
      response.render("/article/update", { article });
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
    response.redirect(`/articles/${id}`);
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
```

### Les routes

Nous allons créer un fichier `routers/articleRouter.js` qui contient les routes pour les articles de blog.

```js
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
```

### Le point d'entrée

Nous allons créer un fichier `app.js` qui contient le point d'entrée de notre application.

```js
const express = require("express");

const articleRouter = require("./routers/articleRouter");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/articles", articleRouter);

app.listen(3000, () => {
  console.log("Server started");
});
```

### Les vues

Nous allons créer un fichier `views/article/index.ejs` qui contient la vue pour la liste des articles de blog.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Blog</title>
  </head>
  <body>
    <h1>Blog</h1>
    <ul>
      <% articles.forEach((article) => { %>
      <li>
        <a href="/article/<%= article.id %>"><%= article.title %></a>
      </li>
      <% }) %>
    </ul>
    <a href="/article/new">Créer un nouvel article</a>
  </body>
</html>
```

Nous allons créer un fichier `views/article/oneArticle.ejs` qui contient la vue pour un article de blog.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title><%= article.title %></title>
  </head>
  <body>
    <h1><%= article.title %></h1>
    <p><%= article.content %></p>
    <a href="/article/<%= article.id %>/update">Modifier</a>
    <form action="/article/<%= article.id %>/delete" method="post">
      <button type="submit">Supprimer</button>
    </form>
  </body>
</html>
```

Nous allons créer un fichier `views/article/new.ejs` qui contient la vue pour créer un article de blog.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Créer un nouvel article</title>
  </head>
  <body>
    <h1>Créer un nouvel article</h1>
    <form action="/article" method="post">
      <div>
        <label for="title">Titre</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label for="content">Contenu</label>
        <textarea id="content" name="content"></textarea>
      </div>
      <button type="submit">Créer</button>
    </form>
  </body>
</html>
```

Nous allons créer un fichier `views/article/update.ejs` qui contient la vue pour modifier un article de blog.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Modifier l'article <%= article.title %></title>
  </head>
  <body>
    <h1>Modifier l'article <%= article.title %></h1>
    <form action="/article/<%= article.id %>/update" method="post">
      <div>
        <label for="title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value="<%= article.title %>"
        />
      </div>
      <div>
        <label for="content">Contenu</label>
        <textarea id="content" name="content"><%= article.content %></textarea>
      </div>
      <button type="submit">Modifier</button>
    </form>
  </body>
</html>
```

### Résultat de l'arboréscence

```
.
├── app.js
├── controllers
│   └── articleController.js
├── models
│   └── articleModel.js
├── package-lock.json
├── package.json
├── routers
│   └── articleRouter.js
└── views
    └── article
        ├── index.ejs
        ├── new.ejs
        ├── oneArticle.ejs
        └── update.ejs

```
