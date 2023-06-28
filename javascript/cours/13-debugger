# Bien débugger avec la console

## Les différentes manières de débugger

Une manière antique et un peu barbare est d'utiliser le console.log() pour afficher des informations dans la console.

```js
console.log("Hello world");
```

> Ca reste utile pour afficher des informations dans la console, mais il existe des méthodes plus efficaces.

On va quand même voir les différentes utilisations de l'objet console.

### console.log()

```js
console.log("Hello world");
```

Affiche un message dans la console.

### console.info()

```js
console.info("Hello world");
```

Affiche un message d'information dans la console.

### console.warn()

```js
console.warn("Hello world");
```

Affiche un message d'avertissement dans la console.

### console.error()

```js
console.error("Hello world");
```

Affiche un message d'erreur dans la console.

### console.table()

```js
console.table(["Hello", "world"]);
```

Affiche un tableau dans la console.

### console.assert()

```js
console.assert(1 === 2, "1 n'est pas égal à 2");
```

Affiche un message d'erreur dans la console si la condition n'est pas vérifiée. Cela permet d'alléger la console si l'on ne veut pas afficher tous les messages d'erreur.

### console.clear()

```js
console.clear();
```

Efface la console.

### console.count()

```js
console.count("Hello"); // 1
console.count("Hello"); // 2
console.count("Hello"); // 3
```

Affiche le nombre de fois que la fonction a été appelée.

### console.time()

```js
console.time("Ma fonction");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Ma fonction");
```

Affiche le temps d'exécution d'une fonction. C'est très utile pour comparer deux fonctions et voir laquelle est la plus rapide.

### console.group()

```js
console.group("Ma fonction");
console.log("Hello");
console.log("world");
console.groupEnd();
```

Permet de regrouper des messages dans la console.

### console.dir()

```js
console.dir(document.body);
```

Affiche un objet dans la console. Celui-ci peut être parcouru et déplié.

### console.trace()

```js
function maFonction() {
  console.trace();
}
maFonction();
```

Affiche la trace d'appel d'une fonction.

## Les breakpoints

C'est surement l'une des méthodes les plus efficaces pour débugger son code. On a tendance a privilégier les console.log() mais c'est une erreur. Les breakpoints permettent de mettre en pause l'exécution du code à un endroit précis. On peut ensuite parcourir le code pas à pas et voir les valeurs des variables à chaque étape.

### Les breakpoints dans le code

Pour mettre un breakpoint dans le code, il suffit de cliquer sur le numéro de ligne dans la marge de gauche. Un rond rouge apparaît, ce qui signifie que le breakpoint est actif.

Le plus simple est de le faire dans la console, en cliquant sur le numéro de ligne.
