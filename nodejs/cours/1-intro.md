# NodeJS, c'est quoi ?

NodeJS est un environnement d'exécution (ou runtime) JavaScript côté serveur. Il permet d'exécuter du code JavaScript en dehors d'un navigateur.

## Rappel sur le runtime JavaScript.

Le runtime est l'envirronement d'exécution d'un langage de programmation. Il permet d'exécuter du code écrit dans un langage de programmation donné.

Lorsque l'on parle du runtime de Javascript coté client, on parle du navigateur. Le navigateur est l'environnement d'exécution de JavaScript côté client. Chaque navigateur implémente son propre runtime JavaScript. C'est pour cela que l'on parle de compatibilité entre les navigateurs.
Le runtime coté client c'est :

- le moteur JavaScript (V8 pour Chrome, SpiderMonkey pour Firefox, Chakra pour Edge, JavaScriptCore pour Safari)
- l'API Web (DOM, XMLHttpRequest, Canvas, etc.)

Quand il est en action, le runtime coté client contient une pile d'appels (stack) et une file d'attente d'événements (event loop) : le code que l'on éxécute sollicite le runtime qui va exécuter le code et retourner le résultat. Le runtime va également gérer les événements (click, scroll, etc.) et les appels asynchrones (requêtes HTTP, accès au système de fichiers, etc.).

Le runtime coté serveur, avec NodeJS, c'est :

- le moteur JavaScript (V8) et certaines dépendances.
- l'API NodeJS (fs, http, etc.)

De la même manière, le runtime coté serveur contient une pile d'appels (stack) et une file d'attente d'événements (event loop).

> Quelques vidéos pour mieux comprendre le runtime JavaScript :
>
> - [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
> - [What is Node.js ?](https://youtu.be/XQT6XiJt4DE)

Donc on ne peut plus utiliser le DOM, ni les objets du navigateur (window, document, etc.), du moins pas directement et pas de la même manière. On ne peut pas non plus utiliser les objets du navigateur (window, document, etc.).

Par contre, on peut utiliser les objets globaux de NodeJS (process, console, etc.) et les modules NodeJS (fs, http, etc.), qui permettent de faire de nouvelles choses, comme accéder au système de fichiers, créer un serveur HTTP, etc.

## Pourquoi utiliser NodeJS ?

NodeJS est très performant pour les applications qui ont beaucoup d'interactions avec le réseau (requêtes HTTP, accès à une base de données, etc.) car il est basé sur un modèle asynchrone et non bloquant (non bloquant = on peut faire autre chose pendant que l'on attend une réponse).

NodeJS permet d'éxécuter du javascript coté serveur, ce qui permet déja d'utiliser le même langage de programamtion (courbe d'apprentissage plus courte, moins de code à écrire, etc.).

Mais surtout, NodeJS profite énormément du modèle asynchrone et non bloquant de JavaScript. Ainsi, plusieurs requêtes peuvent être gérées simultanement, ce qui permet d'avoir des applications très performantes.

> Ressources pour mieux comprendre le modèle asynchrone et non bloquant :
>
> - [Un cours de l'université de Lille] (https://www.fil.univ-lille.fr/~routier/enseignement/licence/jsfs/html/node-asynchrone.html)

De plus, NodeJS est très populaire et dispose d'un grand écosystème de modules (npm) qui permettent de faire beaucoup de choses. Npm s'installera automatiquement avec NodeJS.

## Comment installer NodeJS ?

Pour installer NodeJS, il suffit de télécharger le fichier d'installation sur le site officiel : [Lien vers le site officiel, page de telechargement](https://nodejs.org/fr/download).

> Attention, il existe plusieurs versions de NodeJS. Il est recommandé d'utiliser la version LTS (Long Term Support), qui est la version stable et maintenue à long terme.

## Les premiers pas avec NodeJS

Pour utiliser NodeJS, il suffit d'écrire du code JavaScript dans un fichier avec l'extension `.js` et d'exécuter ce fichier avec NodeJS.

Pour exécuter un fichier JavaScript avec NodeJS, il faut utiliser la commande `node` suivie du nom du fichier à exécuter.

Par exemple, pour exécuter le fichier `hello.js` :

```bash

node hello.js

```

> Attention, il faut se placer dans le dossier contenant le fichier à exécuter pour pouvoir l'exécuter.

## Initier un projet NodeJS

Pour initier un projet NodeJS, il faut créer un fichier `package.json` à la racine du projet. Ce fichier contient les informations sur le projet (nom, version, auteur, etc.) et les dépendances du projet (modules NodeJS utilisés).

Pour créer un fichier `package.json`, il faut utiliser la commande `npm init` :

```bash

npm init

```

> Attention, le projet sera initialisé dans le dossier courant. Il faut donc se placer dans le dossier du projet avant d'initialiser le projet.

### A quoi sert le fichier `package.json` ?

Le fichier `package.json` contient les informations sur le projet (nom, version, auteur, etc.) et les dépendances du projet (modules NodeJS utilisés).

Il est possible de modifier le fichier `package.json` à la main, mais il est recommandé d'utiliser la commande `npm init` pour l'initialiser.

Voici un aperçu du fichier `package.json` juste après la commande `npm init`:

```js

{
  "name": "presentation",
  "version": "1.0.0",
  "description": "Ceci est une présentation de comment initialiser un projet nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Julien POIRIER",
  "license": "ISC"
}


```

Une fois cela fait, on peut installer des modules NodeJS avec la commande `npm install <nom_du_module>`.

Par exemple, pour installer le module `express` :

```bash

npm install express

```

Il existe également une commande raccourcie pour installer des modules : `npm i <nom_du_module>`.

```bash

npm i express

```

> Attention, il faut se placer dans le dossier contenant le fichier `package.json` pour pouvoir installer des modules.

> Attention, il faut bien faire attention au nom du module, si l'on fait une faute de frappe, le module ne sera pas installé, ou bien un autre module sera installé. Il est donc recommandé de copier/coller le nom du module depuis le site [npmjs.com](https://www.npmjs.com/).
>
> - Par exemple, pour installer le module `express`, il faut copier/coller le nom `express` depuis la page [npmjs.com/package/express](https://www.npmjs.com/package/express).
> - Cela a été une méthode de piratage très utilisée : un développeur malveillant publie un module avec un nom proche d'un module très populaire, et le module malveillant est installé à la place du module populaire.

Une fois le module installé, il est ajouté dans le fichier `package.json` dans la partie `dependencies` :

```js

{
  "name": "presentation",
  "version": "1.0.0",
  "description": "Ceci est une présentation de comment initialiser un projet nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Julien POIRIER",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

On peut également installer des modules en mode développement avec la commande `npm install <nom_du_module> --save-dev`.
```

Par exemple, pour installer le module `nodemon` en mode développement :

```bash

npm install nodemon --save-dev

```

Et en mode raccourci :

```bash

npm i nodemon -D

```

Le module installé en mode développement sera ajouté a la partie `devDependencies` du fichier `package.json` :

```js

{
  "name": "presentation",
  "version": "1.0.0",
  "description": "Ceci est une présentation de comment initialiser un projet nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Julien POIRIER",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

```

> Attention, il est recommandé d'installer les modules en mode développement si le module n'est utilisé que pendant le développement du projet. Cela permet de ne pas installer les modules de développement sur le serveur de production.

Nodemon est un module qui permet de relancer automatiquement le serveur à chaque modification du code. Cela permet de ne pas avoir à relancer le serveur à chaque modification du code. C'est très pratique pendant le développement.

C'est une bonne alternative au module `live-server` qui permet de faire la même chose mais pour les fichiers statiques (HTML, CSS, JS).

### Le fichier `package-lock.json`

Lorsque l'on installe des modules NodeJS, le fichier `package-lock.json` est créé. Ce fichier contient les informations sur les modules installés et leurs dépendances.

Il est recommandé de ne pas modifier ce fichier à la main, car il est généré automatiquement par npm.

C'est lui qui permet de réinstaller les modules NodeJS avec la commande `npm install`, en décrivant la structure des dépendances et la séquence d'installation.

### Le dossier `node_modules`

Lorsque l'on installe des modules NodeJS, ils sont installés dans le dossier `node_modules` à la racine du projet.

Ce dossier devient vite très volumineux, car il contient tous les modules installés, ainsi que les modules dont ils dépendent, et ainsi de suite.

> Car oui, un module peut dépendre d'un autre module, qui peut dépendre d'un autre module, etc. C'est d'ailleurs un risque de sécurité, car un module peut dépendre d'un autre module qui contient un code malveillant. Il faut donc choisir les modules que l'on installe avec précaution.

Il est possible de supprimer le dossier `node_modules` et de le réinstaller avec la commande `npm install`. Cela permet de supprimer les modules inutilisés et de réinstaller les modules utilisés.

```bash

npm install

```

On peut ajouter l'option `--production` pour ne réinstaller que les modules de production (et pas les modules de développement).

```bash

npm install --production

```

Comme le dossier `node_modules` peut devenir très volumineux, il est recommandé de ne pas le versionner (de ne pas le mettre sur GitHub). Il est donc recommandé d'ajouter le dossier `node_modules` dans le fichier `.gitignore` pour qu'il ne soit pas versionné.

### Le fichier `.gitignore`

Le fichier `.gitignore` permet de définir les fichiers et dossiers qui ne doivent pas être versionnés (qui ne doivent pas être envoyés sur GitHub).

Il est recommandé d'ajouter le dossier `node_modules` dans le fichier `.gitignore` pour qu'il ne soit pas versionné.

Voici un exemple de fichier `.gitignore` :

```js
node_modules;
```

### Les scripts npm

Le fichier `package.json` contient une partie `scripts` qui permet de définir des scripts npm.

Un script npm est une commande qui peut être exécutée avec la commande `npm run <nom_du_script>`.

Par exemple, pour exécuter le script `start` :

```bash

npm run start

```

> Attention, il faut se placer dans le dossier contenant le fichier `package.json` pour pouvoir exécuter des scripts npm.

Par défaut, le fichier `package.json` contient un script `test` :

```js

{
  "name": "presentation",
  "version": "1.0.0",
  "description": "Ceci est une présentation de comment initialiser un projet nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Julien POIRIER",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

```

Ce script affiche un message d'erreur et quitte le processus. C'est un script de test qui permet de vérifier que le projet fonctionne correctement.

On peut modifier ce script pour qu'il affiche un message de succès :

```js

{
  "name": "presentation",
  "version": "1.0.0",
  "description": "Ceci est une présentation de comment initialiser un projet nodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Success\""
  },
  "author": "Julien POIRIER",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

```

Les scripts sont très puissants mais peuvent demander un peu de configuration. Il est possible de créer des scripts qui exécutent plusieurs commandes, qui exécutent des commandes en parallèle, etc.

> Ressources pour mieux comprendre les scripts npm :
>
> - [npm-scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)

Pour lancer Nodemon, il faut exécuter la commande `nodemon <nom_du_fichier>`.

Par exemple, pour lancer Nodemon sur le fichier `index.js` :

```bash

nodemon index.js

```

Mais si nous préférons utiliser un script standard de dev, nous pouvons modifier `package.json` ainsi :

```bash

"scripts": {
    "dev": "nodemon index.js"
  }

```

Et lancer le script avec la commande `npm run dev` :

```bash

npm run dev

```

Voilà, vous connaissez les bases pour initialiser un projet NodeJS. Vous pouvez maintenant créer un projet NodeJS et installer les modules dont vous avez besoin.
