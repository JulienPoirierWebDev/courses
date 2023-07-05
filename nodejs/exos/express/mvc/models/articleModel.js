let articles = [
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
  const index = articles.findIndex((article) => article.id === id);
  articles.splice(index, 1);
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
