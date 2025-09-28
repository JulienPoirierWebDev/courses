# 🌐 Cours HTML – Bases et notions avancées

## 1. Structure d’un document HTML

Une page HTML se structure en boites, dans lesquelles ont met d'autres boites.

-   `<!DOCTYPE html>` dit au navigateur quel type de construction utiliser (ici : HTML5).
-   `<html>` est la boite principale, la seule et unique !
-   `<head>` contient tout ce qui définit le contexte de la page : cela ne s'affiche pas dans la page en tant que telle mais autour, ailleurs, etc. Par exemple, c'est ici qu'on donne un nom a l'onglet, une icone, qu'on définit comment le site apparait sur des moteurs de recherche comme google, etc.
-   `<body>` contient toutes les boites qui vont créer du contenu visible sur le site internet.

Donc un site internet, c'est un corps et une tête.

👉 Exemple :

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Ma première page</title>
	</head>
	<body>
		<h1>Bonjour le monde</h1>
		<p>Ceci est un paragraphe.</p>
	</body>
</html>
```

---

## 2. Les balises dans `<head>`

Ces balises ne s’affichent pas directement mais donnent des **informations au navigateur et aux moteurs de recherche**.

👉 Exemple :

```html
<head>
	<meta charset="UTF-8" />
	<title>Ma page web</title>
	<meta name="description" content="Une page d'exemple" />
	<link rel="stylesheet" href="style.css" />
	<script src="script.js"></script>
</head>
```

-   `<meta charset="UTF-8">` : permet d’afficher correctement les accents.
-   `<title>` : texte dans l’onglet du navigateur.
-   `<meta name="description">` : résumé pour Google.
-   `<link>` : relier un fichier CSS.
-   `<script>` : relier un fichier JavaScript.
    r CSS (même vide).

---

## 3. Balises block vs inline

Les balises peuvent se comporter de deux façons :

-   **Block** : occupe toute la largeur (ex. `<div>`, `<p>`, `<h1>`).
-   **Inline** : reste à l’intérieur du texte (ex. `<span>`, `<a>`, `<strong>`).

👉 Exemple :

```html
<h1>Titre (block)</h1>
<p>Texte avec <strong>un mot important</strong> (inline).</p>
```

---

## 4. Balises auto-fermantes

Certaines balises n’ont pas de contenu, elles se ferment toutes seules.

👉 Exemple :

```html
<img src="chat.jpg" alt="Un chat mignon" />
<br />
<hr />
<input type="text" placeholder="Votre nom" />
```

---

## 5. Les attributs

Les attributs sont des **informations supplémentaires** sur une balise.

-   Syntaxe : `nom="valeur"`.
-   Exemple : `<img src="photo.jpg" alt="Un chat">`.

👉 Exemple :

```html
<a href="https://openai.com" target="_blank">Visiter OpenAI</a>
<p id="intro" class="rouge">Paragraphe identifié</p>
```

---

## 6. Balises sémantiques

Elles donnent du **sens** au contenu, pour l’accessibilité et le SEO.

👉 Exemple :

```html
<header>En-tête du site</header>
<main>
	<article>
		<h2>Article</h2>
		<p>Texte...</p>
	</article>
	<section>
		<h2>Section</h2>
		<p>Texte...</p>
	</section>
</main>
<footer>Pied de page</footer>
```

---

## 7. Balises de texte

HTML propose plusieurs niveaux de texte :

-   `<h1>` à `<h6>` : titres hiérarchiques.
-   `<p>` : paragraphe.
-   `<strong>` : texte important (gras).
-   `<em>` : emphase (italique).
-   `<mark>` : surlignage.

👉 Exemple :

```html
<h1>Titre principal</h1>
<p><em>Italique</em> et <strong>gras</strong>.</p>
```

---

## 8. Liens et médias

-   `<a>` : lien hypertexte.
-   `<img>` : image.
-   `<video>`, `<audio>` : médias.

👉 Exemple :

```html
<a href="page.html">Aller à une autre page</a>
<img src="photo.jpg" alt="Une photo" />
<video controls>
	<source src="film.mp4" type="video/mp4" />
</video>
```

---

## 9. Listes

Deux types de listes :

-   `<ul>` : non ordonnée (à puces).
-   `<ol>` : ordonnée (numérotée).

👉 Exemple :

```html
<ul>
	<li>Pomme</li>
	<li>Banane</li>
</ul>

<ol>
	<li>Premier</li>
	<li>Deuxième</li>
</ol>
```

---

## 10. Formulaires (bases)

Les formulaires permettent de collecter des données.
Balises importantes : `<form>`, `<input>`, `<textarea>`, `<button>`.

👉 Exemple :

```html
<form action="/submit" method="post">
	<label for="nom">Nom :</label>
	<input type="text" id="nom" name="nom" />
	<button type="submit">Envoyer</button>
</form>
```

---

## 11. Commentaires

Les commentaires servent à documenter le code sans être affichés.

👉 Exemple :

```html
<!-- Ceci est un commentaire -->
<p>Visible à l’écran</p>
```

---

---

---

# 🌐 Cours HTML – Notions avancées

## 1. Les tableaux

Un tableau sert à organiser des données en lignes et colonnes.
Les balises principales :

-   `<table>` : le tableau.
-   `<tr>` : une ligne.
-   `<td>` : une cellule.
-   `<th>` : une cellule d’en-tête.
-   `<thead>`, `<tbody>`, `<tfoot>` : parties logiques.
-   `<caption>` : titre du tableau.

👉 Exemple :

```html
<table>
	<caption>
		Notes des étudiants
	</caption>
	<thead>
		<tr>
			<th>Nom</th>
			<th>Note</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Alice</td>
			<td>15</td>
		</tr>
		<tr>
			<td>Bob</td>
			<td>12</td>
		</tr>
	</tbody>
</table>
```

---

## 2. Figures et légendes

Pour associer une image à une légende descriptive :

-   `<figure>` regroupe l’image et le texte.
-   `<figcaption>` fournit une légende.

👉 Exemple :

```html
<figure>
	<img src="chat.jpg" alt="Un chat allongé" />
	<figcaption>Mon chat préféré</figcaption>
</figure>
```

---

## 3. Intégration de contenu externe

-   `<iframe>` permet d’afficher une autre page ou un service externe.
-   Très utilisé pour YouTube, Google Maps, ou formulaires externes.

👉 Exemple :

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/dQw4w9WgXcQ"
	title="Vidéo YouTube"
	frameborder="0"
	allowfullscreen
>
</iframe>
```

---

## 4. Balises interactives

HTML5 propose des balises qui permettent de créer des interactions sans JavaScript.

### `<details>` et `<summary>`

Un bloc repliable/dépliable.

```html
<details>
	<summary>Cliquer pour voir plus</summary>
	<p>Texte caché qui s’affiche au clic.</p>
</details>
```

### `<dialog>`

Une boîte de dialogue native.

```html
<dialog open>
	<p>Message affiché dans une boîte</p>
</dialog>
```

---

## 5. Balises sémantiques avancées

Certaines balises donnent une structure plus claire :

-   `<nav>` : navigation du site.
-   `<aside>` : contenu secondaire (pub, infos liées).
-   `<time>` : date ou heure.

👉 Exemple :

```html
<nav>
	<ul>
		<li><a href="index.html">Accueil</a></li>
		<li><a href="articles.html">Articles</a></li>
	</ul>
</nav>

<aside>
	<p>Publicité ou contenu lié</p>
</aside>

<time datetime="2025-09-27">27 septembre 2025</time>
```

---

## 6. Médias enrichis

En plus de `<img>`, `<video>` et `<audio>`, HTML5 propose :

-   `<source>` : permet plusieurs formats pour une vidéo/audio.
-   `<track>` : ajoute des sous-titres à une vidéo.

👉 Exemple :

```html
<video controls width="400">
	<source src="film.mp4" type="video/mp4" />
	<source src="film.webm" type="video/webm" />
	<track
		src="sous-titres.vtt"
		kind="subtitles"
		srclang="fr"
		label="Français"
	/>
	Votre navigateur ne supporte pas la vidéo.
</video>
```

---

## 7. Métadonnées avancées dans `<head>`

Au-delà du titre et de la description, on peut ajouter :

-   **Viewport** (responsive design).
-   **Open Graph** (aperçus réseaux sociaux).
-   **Favicon** (icône du site).

👉 Exemple :

```html
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Mon super site" />
	<meta property="og:image" content="image.jpg" />
	<link rel="icon" href="favicon.ico" />
</head>
```

---

## 8. Accessibilité et bonnes pratiques

HTML bien écrit améliore l’accessibilité :

-   Toujours mettre un `alt` sur les images.
-   Respecter l’ordre des titres (`h1`, `h2`, `h3`).
-   Utiliser les balises sémantiques (`<header>`, `<main>`, `<footer>`).
-   Ajouter des labels dans les formulaires.

👉 Exemple :

```html
<label for="email">Votre email :</label>
<input type="email" id="email" name="email" />
```

---
