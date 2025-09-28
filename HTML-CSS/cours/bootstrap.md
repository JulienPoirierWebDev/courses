# 🚀 Cours Bootstrap 5 – Bases

## 1. Qu’est-ce que Bootstrap ?

Bootstrap est un **framework CSS/JS** qui fournit :

-   un système de **grille responsive**
-   des **classes utilitaires** (espacement, couleurs, flexbox…)
-   des **composants prêts à l’emploi** (boutons, navbars, cartes, modals…)

👉 Il est **mobile-first** : on conçoit d’abord pour petits écrans puis on adapte aux grands.
👉 Depuis la version 5, il ne dépend plus de jQuery, uniquement de JavaScript natif.

---

## 2. Mise en place

### Via CDN (rapide)

Ajoute ce code dans le `<head>` de ta page :

```html
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
	rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

### Via npm (projet moderne)

```bash
npm install bootstrap@5.3.8
```

Puis importe dans ton projet (Webpack, Vite…) :

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

👉 **Exercice**

-   Crée un fichier HTML minimal.
-   Lien Bootstrap via CDN.
-   Vérifie que tu peux utiliser la classe `text-primary` sur un paragraphe pour le rendre bleu.

---

## 3. Containers et grille

La **grille** est le cœur de Bootstrap.

-   `.container` : largeur fixe selon la taille de l’écran.
-   `.container-fluid` : largeur 100%.
-   `.row` : ligne de la grille.
-   `.col`, `.col-sm-6`, `.col-md-4` : colonnes adaptatives.

👉 Exemple :

```html
<div class="container">
	<div class="row">
		<div class="col-6">Colonne 1</div>
		<div class="col-6">Colonne 2</div>
	</div>
</div>
```

👉 **Exercice**

-   Crée une grille avec 3 colonnes de largeur égale.
-   Fais en sorte que sur mobile, elles passent en une seule colonne (`col-12`).

---

## 4. Classes utilitaires

Bootstrap fournit des classes rapides à utiliser.

### Espacement

-   `m-3` = margin 1rem.
-   `p-2` = padding 0.5rem.
-   `mt-5` = margin-top.
-   `px-4` = padding horizontal.

### Couleurs

-   Texte : `text-primary`, `text-danger`, `text-success`.
-   Fond : `bg-light`, `bg-dark`, `bg-warning`.

### Flexbox

-   `d-flex` : active flexbox.
-   `justify-content-center` : centrer horizontalement.
-   `align-items-center` : centrer verticalement.

👉 **Exercice**

-   Crée un bloc avec `bg-primary text-white p-3`.
-   Centre un texte horizontalement avec `text-center`.
-   Aligne deux boutons côte à côte avec `d-flex justify-content-between`.

---

## 5. Les composants essentiels

Bootstrap fournit de nombreux composants prêts à l’emploi.

### Boutons

```html
<button class="btn btn-primary">Bouton bleu</button>
<button class="btn btn-outline-danger">Bouton contour rouge</button>
```

### Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">MonSite</a>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#">Accueil</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
```

### Card

```html
<div class="card" style="width: 18rem;">
	<img src="photo.jpg" class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">Titre</h5>
		<p class="card-text">Description rapide.</p>
		<a href="#" class="btn btn-primary">En savoir plus</a>
	</div>
</div>
```

👉 **Exercice**

-   Ajoute une **card** avec image, titre et bouton.
-   Crée une **navbar** simple avec deux liens.

---

## 6. Composants interactifs

Certains composants utilisent le JavaScript de Bootstrap.

### Modal

```html
<button
	class="btn btn-primary"
	data-bs-toggle="modal"
	data-bs-target="#exempleModal"
>
	Ouvrir la modal
</button>

<div class="modal fade" id="exempleModal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Titre modal</h5>
			</div>
			<div class="modal-body">Contenu de la modal.</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" data-bs-dismiss="modal">
					Fermer
				</button>
			</div>
		</div>
	</div>
</div>
```

### Accordion

```html
<div class="accordion" id="accordionExemple">
	<div class="accordion-item">
		<h2 class="accordion-header">
			<button
				class="accordion-button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseOne"
			>
				Section 1
			</button>
		</h2>
		<div
			id="collapseOne"
			class="accordion-collapse collapse show"
			data-bs-parent="#accordionExemple"
		>
			<div class="accordion-body">Texte de la section 1</div>
		</div>
	</div>
</div>
```

👉 **Exercice**

-   Ajoute un bouton qui ouvre une **modal**.
-   Crée un **accordion** avec 2 sections.

---

## 7. Personnalisation

Bootstrap est personnalisable :

-   Variables Sass (`$primary`, `$font-family-base`, etc.).
-   Variables CSS (`--bs-primary`, `--bs-body-bg`, etc.).
-   Tu peux surcharger les classes avec ton propre fichier CSS **après** Bootstrap.

👉 **Exercice**

-   Redéfinis la couleur primaire avec :

```css
:root {
	--bs-primary: #ff5722;
}
```

---
