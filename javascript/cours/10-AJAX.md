# Utilisation des requêtes AJAX en Javascript

Objectif : Apprendre à utiliser les requêtes AJAX pour communiquer avec des serveurs et échanger des données sans recharger la page.

11.1 Introduction à AJAX

- AJAX (Asynchronous JavaScript and XML) est une technique qui permet de communiquer avec un serveur et d'échanger des données de manière asynchrone, sans recharger la page.
- Les données échangées peuvent être sous différents formats, tels que XML, JSON, HTML, etc.
- XMLHttpRequest et Fetch API sont les principales méthodes pour effectuer des requêtes AJAX en JavaScript.
- On trouve aussi de nombreux projets avec axios, qui est une bibliothèque JavaScript qui permettait de simplifier l'utilisation des requêtes AJAX avant l'arrivée de Fetch API. Certains développeurs continuent à l'utiliser pour sa simplicité d'utilisation, pour sa compatibilité avec les anciens navigateurs et par habitude.

  11.2 XMLHttpRequest

  > Attention ! XMLHttpRequest est une méthode obsolète qui n'est plus utilisée dans les nouveaux projets. Elle est remplacée par Fetch API. Je l'explique ici pour que vous puissiez comprendre les anciens projets qui l'utilisent encore.

- Syntaxe pour créer une requête AJAX avec XMLHttpRequest :

```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Traiter les données reçues
  }
};
xhttp.open("GET", "url", true);
xhttp.send();
```

On voit ici qu'il faut d'abord créer une instance de XMLHttpRequest, puis définir une fonction qui sera appelée à chaque changement d'état de la requête. Ensuite, on ouvre la requête avec la méthode open() et on l'envoie avec la méthode send().

Le requête se fait alors, et la fonction définie dans onreadystatechange est appelée à chaque changement d'état de la requête. On peut alors vérifier que le statut de la requête est 4 (DONE) et que le statut HTTP est 200 (OK) pour traiter les données reçues.

Liste des changements d'état de la requête :

- 0: UNSENT - L'objet a été créé.
- 1: OPENED - L'appel open() a été effectué.
- 2: HEADERS_RECEIVED - Tous les en-têtes de la réponse ont été reçus.
- 3: LOADING - La réponse est en cours de téléchargement ; responseText contient des données partielles.
- 4: DONE - L'opération est terminée.

  11.3 Fetch API

C'est la méthode que je vous recommande d'utiliser pour effectuer des requêtes AJAX en JavaScript.

## Syntaxe pour créer une requête AJAX avec Fetch API :

- Syntaxe avec les Promesses pures :

```js
fetch("url")
  .then((response) => response.text())
  .then((data) => {
    // Traiter les données reçues
  });
```

On voit ici qu'il faut d'abord appeler la fonction fetch() avec l'URL de la requête. Ensuite, on utilise les méthodes then() pour traiter les données reçues.

On peut ajouter, après l'url, un objet de configuration pour personnaliser la requête :

```js
fetch("url", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.text())
  .then((data) => {
    // Traiter les données reçues
  });
```

- Syntaxe avec Async/Await :

```js
async function recupererDonnees() {
  try {
    let response = await fetch("url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let data = await response.text();
    // Traiter les données reçues
    // on peut faire un return data par exemple
  } catch (error) {
    // Gérer l'erreur
  }
}

recupererDonnees();
```

Liste des méthodes de l'objet Response :

- response.text() - Renvoie les données de la réponse sous forme de texte.
- response.json() - Renvoie les données de la réponse sous forme d'objet JSON.
- response.blob() - Renvoie les données de la réponse sous forme de Blob (binaire).
- response.arrayBuffer() - Renvoie les données de la réponse sous forme de ArrayBuffer (binaire).
- response.formData() - Renvoie les données de la réponse sous forme de FormData (formulaire).

  11.4 Exemple pratique

- Créer un programme qui récupère des données JSON à partir d'une API et les affiche :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Requêtes AJAX en JavaScript</title>
  </head>
  <body>
    <button id="charger">Charger les données</button>
    <div id="resultat"></div>

    <script>
      let chargerBtn = document.getElementById("charger");
      let resultatDiv = document.getElementById("resultat");

      chargerBtn.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            let html = "<ul>";
            for (let utilisateur of data) {
              html += `<li>${utilisateur.name} (${utilisateur.email})</li>`;
            }
            html += "</ul>";
            resultatDiv.innerHTML = html;
          })
          .catch((error) => {
            console.error("Erreur :", error);
          });
      });
    </script>
  </body>
</html>
```
