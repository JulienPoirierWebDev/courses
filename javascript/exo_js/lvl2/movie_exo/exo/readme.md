# Titre de l'exercice : Recherche de films avec AJAX et l'API The Movie Database

## Objectif : Dans cet exercice, vous allez créer une petite application web qui permettra aux utilisateurs de rechercher des films et d'afficher leurs informations en utilisant AJAX pour interagir avec l'API The Movie Database (TMDb).

Prérequis :

Connaissances de base en HTML, CSS et JavaScript
Comprendre les concepts de base d'AJAX
Instructions :

## Etape 1

Créez un fichier HTML et ajoutez une structure de base avec les balises `<html>`, `<head>` et `<body>`.

Dans le `<head>`, ajoutez un lien vers un fichier CSS pour styliser votre application.

## Etape 2

Dans le `<body>`, ajoutez les éléments suivants :

Un champ de recherche de type `<input>`
Un bouton "Rechercher" de type `<input>`
Un conteneur pour afficher les résultats de la recherche (par exemple, une `<div>`)

## Etape 3

Créez un fichier JavaScript pour gérer la logique de l'application.

Déclencher une fonction lorsque l'utilisateur clique sur le bouton "Rechercher".

Dans la fonction déclenchée, utilisez AJAX pour envoyer une requête GET à l'API TMDb en utilisant l'URL suivante :

https://api.themoviedb.org/3/search/movie?api_key=VOTRE_CLÉ_API&query=TERME_DE_RECHERCHE

Remplacez VOTRE_CLÉ_API par votre clé API personnelle et TERME_DE_RECHERCHE par la valeur saisie par l'utilisateur dans le champ de recherche.

## Etape 4

Lorsque vous recevez la réponse de l'API, parcourez les résultats et créez des éléments HTML pour chaque film trouvé. Affichez au moins le titre, la date de sortie et l'affiche du film.

Ajoutez les éléments HTML créés à la `<div>` des résultats de recherche.

Stylisez l'application en utilisant le fichier CSS que vous avez créé précédemment.

## Bonus :

- Ajoutez la possibilité de rechercher des séries télévisées en plus des films.
- Affichez davantage d'informations sur chaque film, comme la note moyenne, le résumé et les acteurs principaux.
- Implémentez une pagination pour permettre aux utilisateurs de naviguer entre les différentes pages de résultats.
