# Node.js et les modules internes

## Les modules internes

Node.js possède un certain nombre de modules internes, qui sont des modules qui sont installés avec Node.js et qui sont disponibles sans avoir à installer quoi que ce soit d'autre.

Pour utiliser un module interne, il suffit de l'importer avec la fonction `require()`.

```js
const http = require("http");
```

La fonction `require()` est la manière d'importer qui est utilisée par Node.js. Elle prend en paramètre le nom du module à importer. Ce nom peut être un chemin relatif ou absolu vers un fichier JavaScript, ou bien le nom d'un module interne ou d'un module installé avec npm.

## Le module http

Le module `http` permet de créer un serveur HTTP. Il est utilisé pour créer des applications web.

```js
const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello World");
});

server.listen(3000);
```

La fonction `createServer()` prend en paramètre une fonction qui sera appelée à chaque requête HTTP reçue par le serveur. Cette fonction prend en paramètre un objet `request` qui représente la requête HTTP reçue et un objet `response` qui représente la réponse HTTP à envoyer.

La fonction `listen()` permet de démarrer le serveur. Elle prend en paramètre le numéro de port sur lequel le serveur doit écouter.

C'est dans la fonction passée à `createServer()` que l'on va écrire le code de notre application web.

Par exemple, pour avoir une route `/hello` qui renvoie `Hello World` :

```js
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/hello") {
    response.end("Hello World");
  }
});

server.listen(3000);
```

On peut aussi envoyer une réponse en plusieurs fois :

```js
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/hello") {
    response.write("Hello");
    response.write(" World");
    response.end();
  }
});

server.listen(3000);
```

Nous verrons plus tard comment créer des routes plus facilement avec le module `express`. Toutefois, il est important de comprendre comment fonctionne le module `http` pour comprendre comment fonctionne le web. Beaucoup de jeunes développeurs ne connaissent NodeJS qu'au travers de `express` et ne comprennent pas comment il fonctionne en solo.

> Parfois, faire un projet simple juste avec NodeJS peut être un bon exercice pour comprendre comment il fonctionne. Cela vous fera approfondir vos connaissances sur le fonctionnement du web.

## Le module fs

Le module `fs` permet de manipuler les fichiers. Il permet de lire et d'écrire dans des fichiers.

```js
const fs = require("fs");

fs.readFile("fichier.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
```

La fonction `readFile()` permet de lire un fichier. Elle prend en paramètre le chemin vers le fichier à lire, l'encodage du fichier et une fonction de callback qui sera appelée lorsque la lecture sera terminée. Cette fonction prend en paramètre une erreur et les données lues.

Il existe une version synchrone de cette fonction, `readFileSync()`, qui ne prend pas de fonction de callback mais qui retourne directement les données lues.

```js
const fs = require("fs");

const data = fs.readFileSync("fichier.txt", "utf8");

console.log(data);
```

Le problème de cette version synchrone est qu'elle bloque le thread principal de Node.js. Il est donc préférable d'utiliser la version asynchrone.

Pour écrire dans un fichier, on utilise la fonction `writeFile()`.

```js
const fs = require("fs");

fs.writeFile("fichier.txt", "Hello World", "utf8", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Le fichier a bien été écrit");
  }
});
```

La fonction `writeFile()` prend en paramètre le chemin vers le fichier à écrire, les données à écrire, l'encodage du fichier et une fonction de callback qui sera appelée lorsque l'écriture sera terminée. Cette fonction prend en paramètre une erreur.

Il existe aussi une version synchrone de cette fonction, `writeFileSync()`.

### Le module path

Le module `path` permet de manipuler les chemins de fichiers.

```js
const path = require("path");

const chemin = path.join(__dirname, "fichier.txt");
```

La fonction `join()` permet de joindre plusieurs chemins. Elle prend en paramètre les chemins à joindre et retourne le chemin résultant.

La variable `__dirname` contient le chemin du dossier dans lequel se trouve le fichier JavaScript en cours d'exécution.

## Le module url

Le module `url` permet de manipuler les URLs.

```js
const url = require("url");

const parsedUrl = url.parse("http://localhost:3000/hello?name=John"); // parsedUrl est un objet qui contient les différentes parties de l'URL
```

La fonction `parse()` permet de parser une URL. Elle prend en paramètre l'URL à parser et retourne un objet qui contient les différentes parties de l'URL.

## Le module querystring

Le module `querystring` permet de manipuler les paramètres d'une URL.

```js
const querystring = require("querystring");

const parsedQuery = querystring.parse("name=John&age=30"); // parsedQuery est un objet qui contient les paramètres de l'URL
```

La fonction `parse()` permet de parser les paramètres d'une URL. Elle prend en paramètre les paramètres à parser et retourne un objet qui contient les paramètres de l'URL.

## Le module util

Le module `util` permet d'utiliser des fonctions utilitaires.

```js
const util = require("util");

const sayHello = util.promisify((name, callback) => {
  callback(null, `Hello ${name}`);
});

sayHello("John").then((result) => {
  console.log(result);
});
```

La fonction `promisify()` permet de transformer une fonction qui utilise une fonction de callback en une fonction qui retourne une promesse. Elle prend en paramètre la fonction à transformer et retourne la fonction transformée.

## Le module events

Le module `events` permet de créer des événements.

```js
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("hello", (name) => {
  console.log(`Hello ${name}`);
});

eventEmitter.emit("hello", "John");
```

La classe `EventEmitter` permet de créer un objet qui peut émettre des événements. On peut ensuite écouter ces événements avec la méthode `on()` et émettre des événements avec la méthode `emit()`.

## Le module child_process

Le module `child_process` permet de créer des processus enfants.

```js
const { exec } = require("child_process");

exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stdout);
  }
});
```

La fonction `exec()` permet de créer un processus enfant. Elle prend en paramètre la commande à exécuter et une fonction de callback qui sera appelée lorsque le processus sera terminé. Cette fonction prend en paramètre une erreur, la sortie standard et la sortie d'erreur.

Les processus enfants sont utiles pour exécuter des commandes système, par exemple pour créer un serveur web en C++ et le lancer depuis Node.js.

## Le module os

Le module `os` permet d'obtenir des informations sur le système d'exploitation.

```js
const os = require("os");

console.log(os.platform()); // Affiche le nom de la plateforme
console.log(os.arch()); // Affiche l'architecture du processeur
```

## Pour finir

Il existe beaucoup d'autres modules internes, mais nous ne les verrons pas ici. Vous pouvez consulter la documentation de Node.js pour en savoir plus.

Le mieux a faire, c'est lorsque vous cherchez une manière d'atteindre cet objectif, est de chercher sur internet si un module existe pour cela. Si c'est le cas, vous pouvez l'utiliser. Sinon, vous pouvez voir si un module externe existe pour cela. Si c'est le cas, vous pouvez l'utiliser. Sinon, vous pouvez essayer de le faire vous-même.
