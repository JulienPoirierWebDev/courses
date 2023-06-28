# 11 - Introduction aux Promesses et Async/Await en JavaScript

Objectif : Apprendre aux participants à utiliser les Promesses et Async/Await pour simplifier la gestion des opérations asynchrones en JavaScript.

## Promesses

- Les Promesses sont des objets qui représentent le résultat d'une opération asynchrone.
- Une Promesse peut être dans l'un des trois états suivants : en attente (pending), résolue (fulfilled) ou rejetée (rejected).

Ok, mais c'est quoi une opération asynchrone ?

Une opération asynchrone est une opération qui ne s'exécute pas immédiatement, mais qui est mise en file d'attente et exécutée plus tard. Lors de l'éxécution, le programme continue à s'exécuter normalement, sans attendre la fin de l'opération asynchrone.

Sauf que parfois, on a besoin d'attendre la fin de l'opération asynchrone pour continuer à exécuter le programme. C'est là qu'on a besoin des Promesses !

Si vous allez récupérer des informations sur un serveur, par exemple, vous ne savez pas combien de temps ça va prendre. Vous ne pouvez pas attendre que les données soient téléchargées avant de continuer à exécuter le programme. Vous devez donc utiliser une Promesse pour attendre la fin de l'opération asynchrone.

En fait, on parle d'attendre, mais c'est plutot qu'un autre morceau de code est exécuté lorsque l'opération asynchrone est terminée. C'est ce qu'on appelle le callback.

Le callback est une fonction qui est appelée lorsque l'opération asynchrone est terminée. C'est le callback qui va traiter le résultat de l'opération asynchrone.

- Syntaxe pour créer une Promesse :

```js
let promesse = new Promise((resolve, reject) => {
  // Effectuer une opération asynchrone
  // Si l'opération réussit, appeler resolve() avec le résultat
  // Sinon, appeler reject() avec la raison de l'échec
});
```

Ici, le constructeur de Promesse prend une fonction en paramètre. Cette fonction prend deux paramètres : resolve et reject. Ce sont des fonctions qui permettent de résoudre ou rejeter la Promesse.

- Utilisation des méthodes `then()` et `catch()` pour gérer les Promesses :

```js
promesse
  .then((resultat) => {
    // Traiter le résultat
  })
  .catch((erreur) => {
    // Gérer l'erreur
  });
```

12.2 Async/Await

- Les mots-clés `async` et `await` permettent de simplifier la gestion des Promesses en utilisant un style de code plus proche des opérations synchrones.
- Syntaxe pour définir une fonction asynchrone :

```js
async function maFonction() {
  // Utiliser await pour attendre le résultat d'une Promesse
}
```

- Exemple d'utilisation de `await` pour attendre le résultat d'une Promesse :

```js
async function recupererDonnees() {
  try {
    let response = await fetch("url");
    let data = await response.json();
    // Traiter les données
  } catch (erreur) {
    // Gérer l'erreur
  }
}
```

12.3 Exemple pratique

- Modifier l'exemple de la partie 11 pour utiliser Async/Await :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Async/Await en JavaScript</title>
  </head>
  <body>
    <button id="charger">Charger les données</button>
    <div id="resultat"></div>

    <script>
      let chargerBtn = document.getElementById("charger");
      let resultatDiv = document.getElementById("resultat");

      chargerBtn.addEventListener("click", async function () {
        try {
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          let data = await response.json();
          let html = "<ul>";
          for (let utilisateur of data) {
            html += `<li>${utilisateur.name} (${utilisateur.email})</li>`;
          }
          html += "</ul>";
          resultatDiv.innerHTML = html;
        } catch (error) {
          console.error("Erreur :", error);
        }
      });
    </script>
  </body>
</html>
```
