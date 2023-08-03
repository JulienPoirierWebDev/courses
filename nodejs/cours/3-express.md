# Le module `Express`

## C'est quoi Express ?

Express est un module qui permet de créer des applications web en Node.js. Il est très utilisé et permet de créer des applications web de manière simple et rapide.

Même si Express est trés utilisé, il existe d'autres modules qui permettent de créer des applications web en Node.js. Express est le plus populaire, mais il n'est pas le seul. On pourrait même dire que Express est un peu dépassé, mais il est toujours très utilisé et demandé.

Les alternatives à Express sont par exemple [Koa](https://koajs.com/), [Fastify](https://www.fastify.io/) ou [NestJS](https://nestjs.com/).

Toutefois, apprendre l'un permet de mieux comprendre les autres, car ils fonctionnent tous de manière similaire.

Est-ce qu'on peut créer des applications web en Node.js sans utiliser Express ? Oui, mais c'est plus compliqué. Express permet de simplifier la création d'applications web en Node.js.

## La base d'une application Express

On commence par initialiser un projet Node.js avec npm :

```bash

npm init -y

```

> L'option `-y` permet de répondre automatiquement `yes` à toutes les questions posées par `npm init`.

Pour créer une application Express, il faut commencer par importer le module `express` :

```js
const express = require("express");
```

Ensuite, on crée une application Express, qui est une instance de la class `express` :

```js
const express = require("express");

const app = express();
```

Enfin, on démarre le serveur HTTP avec la méthode `listen()` :

```js
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server started");
});
```

Ce bout de code sans Express ressemble à ça :

```js
const http = require("http");

const server = http.createServer((request, response) => {
  // rien du tout ici
});

server.listen(3000, () => {
  console.log("Server started");
});
```

## Les routes

On veut que notre application web soient découpeés en routes. Une route est une URL qui renvoie une réponse.

Par exemple, on veut que l'URL `/hello` renvoie `Hello World`.

Pour cela, on utilise la méthode `get()` de l'application Express :

```js
const express = require("express");

const app = express();

app.get("/hello", (request, response) => {
  response.end("Hello World");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

Avec Express, on n'a plus besoin de vérifier l'URL dans la fonction passée à `createServer()`. On peut directement indiquer la route dans la méthode `get()`.

Dans le code, les routes se placent après la création de l'application Express (`const app = express()`) et avant le démarrage du serveur HTTP (`app.listen(3000, () => console.log("Server started")))`).

## Les méthodes HTTP

Les méthodes HTTP sont les méthodes qui permettent de faire des requêtes HTTP.

Pour rappel, les méthodes HTTP d'une API Rest sont :

- `GET` : pour récupérer des données
- `POST` : pour créer des données
- `PUT` : pour modifier des données
- `PATCH` : pour modifier partiellement des données
- `DELETE` : pour supprimer des données

La méthode `get` est celle qu'utilise le navigateur pour récupérer une page web. C'est la méthode HTTP la plus utilisée.

La méthode `post` est celle qu'utilise le navigateur pour envoyer des données à un serveur. Par exemple, quand on remplit un formulaire et qu'on clique sur le bouton `submit`, le navigateur envoie les données du formulaire au serveur avec la méthode `post`.

Les autres méthodes sont aussi utilisé par le navigateur, mais elles sont utilisées dans des contextes plus spécifiques.

> D'autres méthodes HTTP existent :
>
> - `HEAD` : pour récupérer les entêtes d'une réponse
> - `OPTIONS` : pour récupérer les méthodes HTTP disponibles sur une route
> - `CONNECT` : pour créer un tunnel vers le serveur
> - `TRACE` : pour faire un ping vers le serveur

Avec Express, chaque méthode HTTP a une méthode associée a l'instance de la classe `express` :

```js
const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Je suis une réponse à une requête GET");
});

app.post("/hello", (req, res) => {
  res.send("Je suis une réponse à une requête POST");
});

app.put("/hello", (req, res) => {
  res.send("Je suis une réponse à une requête PUT");
});

app.patch("/hello", (req, res) => {
  res.send("Je suis une réponse à une requête PATCH");
});

app.delete("/hello", (req, res) => {
  res.send("Je suis une réponse à une requête DELETE");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

L'équivalent sans Express :

```js
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    response.end("Je suis une réponse à une requête GET");
  } else if (request.method === "POST") {
    response.end("Je suis une réponse à une requête POST");
  } else if (request.method === "PUT") {
    response.end("Je suis une réponse à une requête PUT");
  } else if (request.method === "PATCH") {
    response.end("Je suis une réponse à une requête PATCH");
  } else if (request.method === "DELETE") {
    response.end("Je suis une réponse à une requête DELETE");
  }
});

server.listen(3000, () => {
  console.log("Server started");
});
```

L'avantage d'Express, c'est que chaque route est indépendante. On n'a pas besoin de vérifier la méthode HTTP dans la fonction passée à `app.get()` ou `app.post()`. On peut directement indiquer la méthode HTTP dans la méthode `get()` ou `post()`.

Le code est plus modulaire et plus lisible.

## La requête HTTP `req` et la réponse HTTP `res`

De la même manière qu'avec le module `http`, on peut accéder à la requête HTTP et à la réponse HTTP avec `req` et `res`, qui sont passés en paramètre de la fonction callback de la route:

```js
app.get("/hello", (req, res) => {
  res.send("Hello World");
});
```

`req` et `res` sont des objets qui contiennent des informations sur la requête HTTP et la réponse HTTP.

### La requête HTTP `req`

La requête contient des informations sur la requête HTTP reçue par le serveur. Ces informations sont définis par la machine qui envoie la requête HTTP, c'est à dire le navigateur ou l'application qui fait la requête HTTP.

Il y a plusieurs manières pour envoyer des informations avec une requête HTTP :

- dans l'URL
- dans le corps de la requête
- dans les entêtes de la requête

#### L'attribut `req.query`

L'attribut `req.query` est l'une des deux manières de récupérer des informations dans l'URL, avec `req.params`.

Prenons cette url : `/hello?name=John`.

Et cette route :

```js
app.get("/hello", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});
```

Avec l'url `/hello?name=John`, la réponse sera `Hello John`.
Les paramètres sous format `query` sont ceux qui sont passés dans l'URL après le `?`, avec la syntaxe `?param1=value1&param2=value2`.

On peut passer autant de paramètres que l'on veut dans l'URL, et on peut les récupérer avec `req.query`.

Toutefois, ce n'est pas une manière très lisible de passer des paramètres dans l'URL. C'est pourquoi on utilise plus souvent `req.params`.

#### L'attribut `req.params`

L'avantage de `req.params` est que les paramètres sont directement dans l'URL, et donc plus lisible, il n'y a pas besoin d'introduire un `?` dans l'URL ni le nom des paramètres.

Avec l'url : `/hello/John`.

Et la route :

```js
app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});
```

Avec l'url `/hello/John`, la réponse sera `Hello John`.

Les paramètres sous format `params` sont ceux qui sont passés dans l'URL avec la syntaxe `/route/value1/value2`.
La syntaxe `/route/value1&value2` est aussi possible, mais elle est moins utilisée car elle est moins lisible.

Si l'on devait écrire une route pour récupérer un article d'une catégorie :

```js
app.get("/category/:categoryName/article/:articleName", (req, res) => {
  // ...
});
```

Et on pourrait alors avoir une url comme `/category/food/article/apple`.

> Ne vous inquiétez pas si vous ne visualisez pas encore bien comment fonctionnent les paramètres `query` et `params`. C'est plus clair avec des exemples concrets et avec de la pratique.

#### L'attribut `req.body`

L'attribut `req.body` permet de récupérer les données envoyées dans le corps de la requête HTTP.

Si vous respectez les standards de l'API Rest, on ne récupère des données dans le corps de la requête HTTP que pour les méthodes `POST`, `PUT` et `PATCH`.

Pour récupérer les données dans le corps de la requête HTTP, il faut utiliser notre premier middleware : `express.json()`.

```js
app.use(express.json());
```

Un `middleware` est une fonction qui est appelée avant la fonction passée à `app.get()` ou `app.post()`. Il permet de modifier la requête HTTP avant qu'elle n'arrive à la fonction qui gère la route.
Littéralement, un `middleware` est un "logiciel intermédiaire".

`express.json()` est un middleware qui permet de récupérer les données envoyées dans le corps de la requête HTTP. Il est très utilisé.

> Attention, certains développeurs utilisent encore le package `body-parser` pour récupérer les données dans le corps de la requête HTTP. Toutefois, `express.json()` est plus récent et plus performant. Il est recommandé de l'utiliser à la place de `body-parser`.

Pour envoyer des données dans le corps de la requête HTTP, il faut utiliser un logiciel qui permet de faire des requêtes HTTP. Par exemple, [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

En envoyant les données suivantes dans le corps de la requête HTTP :

```json
{
  "name": "John"
}
```

Et en utilisant cette route :

```js
app.post("/hello", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});
```

La réponse sera `Hello John`.

Traditionnellement, on utilise `req.body` pour récupérer les données envoyées par un formulaire HTML, par exemple.

#### L'attribut `req.headers`

L'attribut `req.headers` permet de récupérer les entêtes de la requête HTTP.

Voici un exemple d'entêtes de requête HTTP :

```
Host: localhost:3000
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Content-Type: application/json
Content-Length: 26
Origin: http://localhost:3000
Connection: keep-alive
Referer: http://localhost:3000/
```

On peut récupérer les entêtes de la requête HTTP avec `req.headers`.

Par exemple, pour récupérer l'entête `Content-Type` :

```js
app.post("/hello", (req, res) => {
  res.send(`Content-Type: ${req.headers["content-type"]}`);
});
```

Dans nos applications, on pourra par exemple récupérer le token d'authentification dans l'entête `Authorization`.

#### Les autres attributs de `req`

Il existe d'autres attributs dans `req` qui permettent de récupérer des informations sur la requête HTTP :

- `req.protocol` : le protocole utilisé (http ou https)
- `req.hostname` : le nom de domaine
- `req.path` : le chemin de la requête
- `req.method` : la méthode HTTP utilisée
- `req.secure` : un booléen qui indique si la requête est sécurisée (https)

### La réponse HTTP `res`

La réponse est l'objet que l'on renvoie au client qui a fait la requête HTTP.

#### La méthode `res.send()`

On peut envoyer une réponse avec la méthode `send()` :

```js
app.get("/hello", (req, res) => {
  res.send("Hello World");
});
```

Ce qui est pratique avec `send()`, c'est qu'il peut envoyer n'importe quel type de données. Il peut envoyer une chaîne de caractères, un nombre, un booléen, un tableau, un objet, etc.
En effet, Express s'oocupe de bien paramétrer la réponse HTTP en fonction du type de données envoyé.

Avec un objet :

```js
app.get("/hello", (req, res) => {
  res.send({
    message: "Hello World",
  });
});
```

La réponse sera :

```json
{
  "message": "Hello World"
}
```

#### La méthode `res.json()`

La méthode `res.json()` permet d'envoyer une réponse au format JSON.

```js
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
```

La réponse sera :

```json
{
  "message": "Hello World"
}
```

La méthode `res.json()` est très utilisée, car elle permet d'envoyer une réponse au format JSON, qui est le format le plus utilisé pour les API.
Pourquoi l'utiliser alors que `res.send()` peut envoyer n'importe quel type de données ? Parce que `res.json()` est plus explicite. Quand on utilise `res.json()`, on sait que l'on envoie une réponse au format JSON. Si l'on se trompe et que l'on envoie une chaîne de caractères, par exemple, on aura une erreur. C'est donc plus sécurisé.

#### La méthode `res.status()`

La méthode `res.status()` permet de modifier le code de statut de la réponse HTTP.

Par défaut, le code de statut est `200`, qui signifie que la requête HTTP a été traitée avec succès.

Mais si l'on veut envoyer une erreur, on peut modifier le code de statut avec `res.status()` :

```js
app.get("/hello", (req, res) => {
  res.status(404).send("Not found");
});
```

Cet exemple est idiot, car on pourrait simplement utiliser `res.status(404).send()` sans passer de paramètre à `send()`. Sans parler du fait qu'écrire une route pour envoyer une erreur 404 n'est pas très utile.

Mais on peut imaginer une route qui récupère un article dans une base de données, et qui renvoie une erreur 404 si l'article n'existe pas :

```js
app.get("/article/:id", (req, res) => {
  const article = getArticleFromDatabase(req.params.id);

  if (!article) {
    res.status(404).send("Article not found");
  }

  res.json(article);
});
```

#### La méthode `res.redirect()`

La méthode `res.redirect()` permet de rediriger vers une autre route.

```js
app.get("/hello", (req, res) => {
  res.redirect("/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello World");
});
```

Si l'on fait une requête HTTP sur `/hello`, on sera redirigé vers `/hello-world`, qui renvoie `Hello World`.

Cela peut être utile pour rediriger vers une autre route, par exemple si l'on veut rediriger vers la page d'accueil si l'utilisateur n'est pas connecté :

```js
app.get("/profile", (req, res) => {
  if (!req.user) {
    res.redirect("/");
  }

  res.json(req.user);
});
```

#### La méthode `res.sendFile()`

La méthode `res.sendFile()` permet d'envoyer un fichier.

```js
app.get("/hello", (req, res) => {
  res.sendFile("hello.html");
});
```

Si l'on fait une requête HTTP sur `/hello`, on recevra le contenu du fichier `hello.html`.

Cela peut être utile pour envoyer des fichiers statiques, par exemple des fichiers HTML, CSS ou JavaScript.

#### La méthode `res.download()`

La méthode `res.download()` permet de télécharger un fichier.

```js
app.get("/hello", (req, res) => {
  res.download("hello.pdf");
});
```

La différence avec `res.sendFile()` est que `res.download()` envoie un fichier en tant que téléchargement, alors que `res.sendFile()` envoie un fichier en tant que page web.

#### Les autres méthodes de `res`

Il existe d'autres méthodes dans `res` qui permettent de modifier la réponse HTTP :

- `res.end()` : pour terminer la réponse HTTP
- `res.set()` : pour modifier les entêtes de la réponse HTTP
- `res.type()` : pour modifier le type de la réponse HTTP
- `res.cookie()` : pour modifier les cookies de la réponse HTTP
- `res.clearCookie()` : pour supprimer un cookie de la réponse HTTP

## Les middlewares

Nous avons déja vu que `express.json()` est un middleware qui permet de récupérer les données envoyées dans le corps de la requête HTTP.

Un middleware est une fonction qui est appelée avant la fonction passée à `app.get()` ou `app.post()`. Il d'éxécuter du code avant que la fonction qui gère la route ne soit appelée : cela veut dire que toutes les routes passent par les middlewares si on les place avant les routes.

### Utiliser un middleware avec `app.use()`

Lorsque l'on utilise un middleware avec `app.use()`, il est appliqué à toutes les routes qui sont définies après.

Par exemple, on peut créer un middleware qui log toutes les requêtes HTTP reçues par le serveur :

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

> On peut faire un système de log plus avancé, avec un système de log qui écrit dans un fichier, par exemple.

`next()` permet de passer à la suite. Si on ne l'appelle pas, la requête HTTP sera bloquée.

On peut aussi créer un middleware qui vérifie si l'utilisateur est connecté :

```js
app.use((req, res, next) => {
  if (!req.user) {
    res.status(401).send("Unauthorized");
  }

  next();
});
```

Ici, si l'utilisateur n'est pas connecté, on renvoie une erreur 401 et on bloque la requête HTTP, `next()` ne sera pas appelé.

### Utiliser un middleware avec `app.get()` ou `app.post()`

On peut aussi utiliser un middleware avec `app.get()` ou `app.post()` :

```js
app.get(
  "/hello",
  (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
);
```

Ici, on a un middleware qui se charge de log la requête HTTP et la fonction de callback qui se charge de renvoyer la réponse.

Pour que cela soit plus lisible, on peut séparer le middleware et la fonction de callback :

```js
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const helloRoute = (req, res) => {
  res.send("Hello World");
};

app.get("/hello", logMiddleware, helloRoute);
```

Nous verrons que cette manière de faire est très utile pour séparer le code en plusieurs fichiers, notamment dans le cadre d'un projet avec une architecture MVC.

On peut aussi utiliser un middleware pour une route avec `app.use()` :

```js
app.use("/hello", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
```

Ici, le middleware est appliqué à toutes les routes qui commencent par `/hello`, de tous les types de requêtes HTTP (`GET`, `POST`, etc.).

On peut toutefois préciser le type de requête HTTP :

```js
app.use("/hello", (req, res, next) => {
  if (req.method === "GET") {
    // Votre middleware spécifique à la méthode GET
    console.log("Middleware spécifique à la méthode GET");
    // Effectuez les actions spécifiques à la méthode GET
  } else if (req.method === "POST") {
    // Votre middleware spécifique à la méthode POST
    console.log("Middleware spécifique à la méthode POST");
    // Effectuez les actions spécifiques à la méthode POST
  }
  next();
});
```

Si l'on veut que le middleware soit appliqué à toutes les routes, on peut utiliser `app.all()` :

```js
app.all("/hello", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.post("/hello", (req, res) => {
  res.send("Hello World");
});
```

### Utiliser plusieurs middlewares

On peut appliquer plusieurs middlewares à une route :

```js
app.get("/hello", middleware1, middleware2, middleware3, (req, res) => {
  res.send("Hello World");
});
```

Ici, les middlewares sont appliqués dans l'ordre : `middleware1` est appliqué, puis `middleware2`, puis `middleware3`, puis la fonction de callback.

On peut aussi appliquer plusieurs middlewares avec `app.use()`, de la même manière :

```js
app.use("/hello", middleware1, middleware2, middleware3);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
```

Ici, les middlewares sont appliqués dans l'ordre : `middleware1` est appliqué, puis `middleware2`, puis `middleware3`, puis la fonction de callback, qui est définie dans `app.get()`.

## Le routing

Le routing est le fait de découper une application web en routes. Nous avons déja vu que Express rendait plus facile la création de routes.

Mais il est possible de découper les routes dans plusieurs fichiers, pour rendre le code plus modulaire et plus lisible.

### Créer un fichier `routes.js`

Imaginions que nous définissions les routes pour faire un CRUD sur nos articles de blog. On pourrait avoir des routes comme `/articles`, `/articles/:id`, etc.

On voudrait rassebler toutes ces routes dans un seul fichier, pour que le code soit plus lisible.

On peut créer un fichier `articlesRouter.js` qui contient toutes les routes de notre application :

```js
const express = require("express");

const router = express.Router();

router.get("/articles", (req, res) => {
  // ...
});

router.get("/articles/:id", (req, res) => {
  // ...
});

router.post("/articles", (req, res) => {
  // ...
});

router.put("/articles/:id", (req, res) => {
  // ...
});

router.patch("/articles/:id", (req, res) => {
  // ...
});

router.delete("/articles/:id", (req, res) => {
  // ...
});

module.exports = router;
```

On exporte le router avec `module.exports = router`.

### Importer le router dans `app.js`

On peut ensuite importer le router dans `app.js` :

```js
const express = require("express");

const articlesRouter = require("./articlesRouter");
const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");


const app = express();

app.use("/article", articleRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);

app.listen(3000, () => {
  console.log("Server started");
});
```

On a donc utilise un middleware pour utiliser le router `articlesRouter` sur toutes les routes qui commencent par `/articles`. Dans notre exemple, le router réecriera les routes `/articles`, `/articles/:id`, etc.

Le problème c'est que si on veut changer la structure des routes, on devra modifier le router et `app.js`. C'est pourquoi on peut utiliser un middleware pour utiliser le router `articlesRouter` sur une route spécifique :

```js
app.use("/articles", articleRouter);
```

En utilisant `app.use("/articles", articleRouter)`, on utilise le router `articleRouter` sur toutes les routes qui commencent par `/articles`. Dans notre exemple, le router réecriera les routes `/articles`, `/articles/:id`, etc.

Le router sera alors le suivant :

```js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // ...
});

router.get("/:id", (req, res) => {
  // ...
});

router.post("/", (req, res) => {
  // ...
});

router.put("/:id", (req, res) => {
  // ...
});

router.patch("/:id", (req, res) => {
  // ...
});

router.delete("/:id", (req, res) => {
  // ...
});

module.exports = router;
```

Avec les routers, vous pouvez appliquer un middleware à toutes les routes d'un router, ou à une route spécifique.

## Les moteurs de template

Nous avons déja vu que l'on pouvait envoyer des fichiers avec `res.sendFile()`.

Mais on peut aussi utiliser des moteurs de template pour générer des pages web dynamiques. Express est prévu pour fonctionner avec des moteurs de template et peut en utiliser plusieurs.

Express permet d'utiliser des moteurs de template pour générer des pages web dynamiques.

Une liste des moteurs de template supportés par Express est disponible [ici](https://expressjs.com/en/resources/template-engines.html).

Nous allons utiliser le moteur de template [EJS](https://ejs.co/) car il est très simple à utiliser et très populaire. C'est un moteur de template qui permet de générer des pages web dynamiques avec du HTML et du JavaScript.

### Installer un moteur de template

Pour utiliser un moteur de template, il faut l'installer avec npm :

```bash
npm install ejs
```

### Configurer Express pour utiliser un moteur de template

Pour utiliser un moteur de template, il faut le configurer avec `app.set()` :

```js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server started");
});
```

La méthode `app.set()` permet de configurer Express. Elle prend deux paramètres :

- le nom de la configuration
- la valeur de la configuration

D'autres exemples de configuration sont :

- `app.set("views", "./views")` : pour indiquer à Express où se trouvent les fichiers de vues
- `app.set("port", 3000)` : pour indiquer à Express sur quel port démarrer le serveur HTTP
- `app.set("env", "production")` : pour indiquer à Express dans quel environnement on se trouve (production, développement, etc.)

### Créer un fichier de vue et l'utiliser

Nous avons indiqué à Express que nous allions utiliser le moteur de template EJS. Il faut donc créer un fichier de vue avec l'extension `.ejs`, pour que Express puisse l'utiliser.

La convention avec EJS est de créer un dossier `views` à la racine du projet, et d'y mettre tous les fichiers de vues, soit en vracs, soit dans des sous-dossiers.

Par exemple, on peut créer un fichier `views/hello.ejs` :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page d'accueil</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <div>
      <p>Je suis une page web statique</p>
    </div>
  </body>
</html>
```

Ensuite, on peut utiliser la méthode `res.render()` pour utiliser le fichier de vue :

```js
app.get("/hello", (req, res) => {
  res.render("hello");
});
```

Pour l'instant, nos pages web sont statiques, mais on peut utiliser EJS pour générer des pages web dynamiques.

### Utiliser des variables dans les fichiers de vues

On peut utiliser des variables dans les fichiers de vues.

Le deuxième paramètre de `res.render()` est un objet qui contient les variables que l'on veut utiliser dans le fichier de vue :

```js
app.get("/hello", (req, res) => {
  res.render("hello", {
    name: "John",
  });
});
```

Dans le fichier de vue, on peut utiliser la variable `name` :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page d'accueil</title>
  </head>
  <body>
    <h1>Hello <%= name %></h1>
    <div>
      <p>Je suis une page web dynamique</p>
    </div>
  </body>
</html>
```

On utilise `<%= name %>` pour afficher la variable `name`. Il y a plusieurs élements de syntaxe avec EJS, que nous allons voir juste après.

Toutefois, la logique est celle-ci : on utilise `<%= %>` pour afficher une variable, et `<% %>` pour éxécuter du code JavaScript.

On peut passer autant de variables que l'on veut à `res.render()` :

```js
app.get("/hello", (req, res) => {
  res.render("hello", {
    name: "John",
    age: 42,
    address: "1 rue de la Paix",
    city: "Paris",
    tasks: ["Faire les courses", "Aller à la banque", "Aller à la poste"],
  });
});
```

Et on peut les utiliser dans le fichier de vue :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page d'accueil</title>
  </head>
  <body>
    <h1>Hello <%= name %></h1>
    <div>
      <p>Je suis <%= name %>, j'ai <%= age %> ans.</p>
      <p>J'habite au <%= address %> à <%= city %>.</p>
      <p>Mes tâches du jour sont :</p>
      <ul>
        <% for (let task of tasks) { %>
        <li><%= task %></li>
        <% } %>
      </ul>
    </div>
  </body>
</html>
```

En combinant EJS avec des requêtes, des middlewares et des bases de données, on peut créer des pages web dynamiques et complexes.

### Les éléments de syntaxe avec EJS

EJS est un moteur de template simple d'accès mais qui permet de faire beaucoup. Nous n'allons pas voir toutes ses fonctionnalités, mais nous allons voir les éléments de syntaxe de base.

#### Indiquer que nous allons utiliser EJS

Pour indiquer que nous allons utiliser EJS, il faut utiliser la syntaxe suivante :

```html
<% %>
```

Tout ce qui se trouve entre `<%` et `%>` est du code JavaScript.

#### Afficher une variable

Pour afficher une variable, il faut utiliser la syntaxe suivante :

```html
<%= maVariable %>
```

Tout ce qui se trouve entre `<%=` et `%>` est une variable. On demande a EJS d'afficher la valeur de la variable.

#### Afficher du code JavaScript

Pour afficher du code JavaScript, il faut utiliser la syntaxe suivante :

```html
<% for (let i = 0; i < 10; i++) { %>
<p>Je suis une ligne de texte</p>
<% } %>
```

Tout ce qui se trouve entre `<%` et `%>` est du code JavaScript. On demande à EJS d'éxécuter le code JavaScript. Ici, on affiche 10 lignes de texte.

La subtilité, c'est que l'on peut ouvrir une boucle a un endroit et ne pas la fermer avant la fin de la balise EJS (`%>`). C'est ce que l'on fait dans l'exemple ci-dessus.
Il faut alors faire attention à bien fermer la boucle avant la fin du fichier de vue.

De cette manière, on peut utiliser des variables dans le code JavaScript :

```html
<% for (let task of tasks) { %>
<li><%= task %></li>
<% } %>
```

Ici, on affiche une liste de tâches. On utilise une boucle `for...of` pour parcourir le tableau `tasks` et on affiche chaque tâche avec `<%= task %>`.

#### Inclure un fichier de vue dans un autre fichier de vue

On peut inclure un fichier de vue dans un autre fichier de vue avec la syntaxe suivante :

```html
<%- include("header") %>
```

Ici, on inclut le fichier `header.ejs` dans le fichier de vue.

> Cela permet de créer des fichiers de vue réutilisables, par exemple pour créer un header ou un footer.

On peut passer des variables à un fichier de vue inclus :

```html
<%- include("header", { title: "Page d'accueil" }) %>
```

Attention, on peut injecter une variable dans une vue incluse sans avoir besoin de passer de deuxième argument a `<%- include("header")%>` si le nom de la variable utilisé dans le fichier de vue inclus est le même que celui de la variable passée à `res.render()`.

Par exemple, si on a un fichier `header.ejs` :

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <header>
      <h1><%= title %></h1>
    </header>
  </body>
</html>
```

Et que l'on utilise `res.render("hello", { title: "Page d'accueil" })`, on peut utiliser `<%- include("header")%>` sans passer de deuxième argument.

### Comment ajouter du CSS et du JavaScript dans un fichier de vue ?

Pour ajouter du CSS et du JavaScript dans un fichier de vue, il faut utiliser la syntaxe suivante :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page d'accueil</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/script.js" defer></script>
  </head>
  <body>
    <h1>Hello World</h1>
    <div>
      <p>Je suis une page web statique</p>
    </div>
  </body>
</html>
```

En fait, on utilise les mêmes balises que dans un fichier HTML classique. Mais si l'on fait cela avec Express, il faut que les fichiers CSS et JavaScript soient dans un dossier que nous aurons crée et que nous aurons indiqué à Express avec `app.use(express.static("public"))`.

Par exemple, si l'on a un dossier `public` avec un fichier `css/style.css` et un fichier `js/script.js`, on peut utiliser les fichiers CSS et JavaScript dans un fichier de vue avec la syntaxe suivante :

```html
<link rel="stylesheet" href="/css/style.css" />
<script src="/js/script.js" defer></script>
```

Dans Express, on utilise `app.use(express.static("public"))` pour indiquer à Express que le dossier `public` contient des fichiers statiques (CSS, JavaScript, images, etc.).

```js
const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server started");
});
```

> En faisant cela, on rend accessible toutes les ressources du dossier `public` sur le serveur HTTP. C'est pourquoi il est important de ne pas mettre de fichiers sensibles dans le dossier `public`.
>
> - Si l'on veut rendre accessible une image, on peut la mettre dans le dossier `public`.
> - Si l'on utilise un fichier de configuration avec les mots de passe de la base de données, par exemple, il ne faut pas le mettre dans le dossier `public`.
>   Exemple d'url pour accéder à une image : `http://localhost:3000/images/image.jpg`.

On peut aussi spécifier une route pour les fichiers statiques :

```js
const express = require("express");

const app = express();

app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("Server started");
});
```

Ici, on rend accessible toutes les ressources du dossier `public` sur le serveur HTTP à partir de la route `/static`. Cela veut dire que si l'on a un fichier `public/css/style.css`, on pourra y accéder avec l'url `http://localhost:3000/static/css/style.css`.
