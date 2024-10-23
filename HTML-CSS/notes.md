Pour vous donner un peu de contexte sans entrer dans la polémique, le W3C était à l’origine le groupe de référence chargé de définir et de veiller au développement des langages HTML et CSS.

Cependant, en 1998, le W3C décide d’abandonner l’évolution du HTML pour se concentrer sur un autre langage qui devait lui succéder : le XHTML.

Certaines personnes, mécontentes de l’inertie du W3C et du temps que prenait le développement de nouveaux standards et qui voyaient du potentiel dans le HTML ont alors décidé de continuer son évolution en formant un groupe nommé le WHATWG.

Face à l’échec du XHTML, en 2006, le W3C revient sur ses pas et exprime son intérêt pour travailler avec le WHATWG sur le HTML. Ce travail en commun a fonctionné jusqu’en 2011, date à laquelle l’écart entre les objectifs et les méthodes des deux groupes est devenu trop grand.

En effet, le WHATWG milite pour un « Living Standard » pour le HTML, c’est-à-dire des améliorations constantes et immédiatement intégrées tandis que le W3C préfère mettre à jour le HTML dès que beaucoup d’avancées ont été faites et après s’être assuré que chaque nouveau composant fonctionne parfaitement.

Ce qu’il faut bien comprendre ici est que le W3C est un groupe composé de plus de 300 grandes entreprises qui font du lobbysme et donc que ce groupe subit de grandes pressions. A l’inverse, le WHATWG est le résultat de l’effort commun de trois « entreprises du web » : Opera, Mozilla et Apple, ce qui le rend beaucoup plus flexible.

Aujourd’hui, on se retrouve donc dans une situation conflictuelle où le WHATWG avance beaucoup plus vite que le W3C et accuse le W3C de voler les différents standards créés par le WHATWG pour les porter à leur crédit.

Voici une cheat sheet HTML qui présente les balises les plus courantes et leurs attributs, en intégrant les bonnes pratiques pour chaque usage.

---

# **HTML Cheat Sheet : Balises Courantes et Attributs**

### **1. Structure de Base d'une Page HTML**

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Titre de la page</title>
	</head>
	<body>
		<!-- Contenu ici -->
	</body>
</html>
```

**Bonnes pratiques :**

-   Utiliser `<!DOCTYPE html>` pour définir le document comme HTML5.
-   `lang="fr"` pour l’accessibilité et le SEO.
-   La balise `<meta charset="UTF-8">` pour supporter les caractères spéciaux.
-   `meta viewport` pour l'adaptabilité mobile.

---

### **2. Balises de Texte et de Contenu**

-   **`<h1> à <h6>`** : Titres de section (hiérarchie visuelle et sémantique).

    ```html
    <h1>Titre Principal</h1>
    <h2>Sous-titre</h2>
    ```

    **Bonnes pratiques :** Un seul `<h1>` par page. Utiliser les titres dans l’ordre logique.

-   **`<p>`** : Paragraphe de texte.

    ```html
    <p>Ceci est un paragraphe.</p>
    ```

-   **`<a href="url">`** : Lien hypertexte.

    ```html
    <a href="https://example.com">Texte du lien</a>
    ```

    Attributs :

    -   `href` : URL du lien.
    -   `target="_blank"` : Ouvre le lien dans un nouvel onglet (optionnel).

    **Bonnes pratiques :**

    -   Utiliser `rel="noopener noreferrer"` pour la sécurité.
    -   Laisser le soulignement par défaut pour les liens, mais vous pouvez le personnaliser avec CSS.

-   **`<img src="url" alt="texte alternatif">`** : Image.
    ```html
    <img src="image.jpg" alt="Description de l'image" />
    ```
    **Bonnes pratiques :**
    -   Utiliser l’attribut `alt` pour l'accessibilité et le SEO.
    -   Privilégier des formats optimisés (WebP, JPEG) pour les performances.
    -   Toujours mettre un alt, même si l'image n'est pas utile pour les personnes malvoyantes : `alt=""` et ajouter l'attribut aria hidden : `aria-hidden="true"`.

---

### **3. Balises de Mise en Forme**

-   **`<strong>`** et **`<em>`** : Mise en évidence de texte (sémantique).

    ```html
    <strong>Texte en gras</strong> et <em>Texte en italique</em>
    ```

    **Bonnes pratiques :** Préférer `<strong>` et `<em>` à `<b>` et `<i>` pour une meilleure accessibilité.

-   **`<ul>`, `<ol>`, `<li>`** : Listes non ordonnées et ordonnées.

    ```html
    <ul>
    	<li>Élément de liste non ordonnée</li>
    </ul>

    <ol>
    	<li>Élément de liste ordonnée</li>
    </ol>
    ```

-   **`<blockquote>`** : Citation longue.
    ```html
    <blockquote>"Ceci est une citation."</blockquote>
    ```

---

### **4. Tables et Organisation de Données**

-   **`<table>`**, **`<tr>`**, **`<td>`**, **`<th>`** : Tableaux de données.
    ```html
    <table>
    	<tr>
    		<th>Colonne 1</th>
    		<th>Colonne 2</th>
    	</tr>
    	<tr>
    		<td>Donnée 1</td>
    		<td>Donnée 2</td>
    	</tr>
    </table>
    ```
    **Bonnes pratiques :**
    -   Utiliser `<th>` pour les en-têtes de colonnes.
    -   Ajouter `scope="col"` pour préciser le rôle des en-têtes.
    -   Privilégier l’usage de styles CSS pour le formatage visuel.

---

### **5. Formulaires et Entrées**

-   **`<form>`** : Formulaire.

    ```html
    <form action="/submit" method="post">
    	<label for="name">Nom :</label>
    	<input type="text" id="name" name="name" required />

    	<input type="submit" value="Envoyer" />
    </form>
    ```

    Attributs clés :

    -   `action` : URL où envoyer les données.
    -   `method="post"` : Méthode d'envoi (`post` ou `get`).
    -   `required` : Rendre un champ obligatoire.

    **Bonnes pratiques :**

    -   Utiliser `method="post"` pour les formulaires sensibles.
    -   Utiliser `required` pour les champs obligatoires.
    -   `action`et `method` sont des attributs obligatoires pour le bon fonctionnement du formulaire si l'on laisse le navigateur gérer l'envoi des données. Si on utilise JavaScript pour envoyer les données, ces attributs ne sont pas obligatoires.

-   **`<input>`** : Champs de formulaire.

    -   Types courants : `text`, `email`, `password`, `checkbox`, `radio`, `submit`.
    -   **Bonnes pratiques :** Utiliser des types d'input adaptés pour une meilleure UX (ex: `email`, `date`, `number`).

-   **`<label>`** : Étiquette pour champs de formulaire (associée avec `for` et `id`).

    ```html
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" />
    ```

    ** bonnes pratiques :**

    -   Utiliser des labels pour améliorer l'accessibilité et l'UX et pour permettre aux utilisateurs de cliquer sur le label pour sélectionner le champ associé : cela permet d'augmenter la taille de la zone cliquable et d'avoir un meilleur reférencement.

---

### **6. Balises Sémantiques HTML5**

-   **`<header>`**, **`<footer>`** : En-tête et pied de page.

    ```html
    <header>
    	<h1>Titre du site</h1>
    </header>

    <footer>
    	<p>Droits d'auteur © 2024</p>
    </footer>
    ```

-   **`<nav>`** : Menu de navigation.

    ```html
    <nav>
    	<a href="/home">Accueil</a>
    	<a href="/about">À propos</a>
    </nav>
    ```

-   **`<section>`** : Section d'une page.

    ```html
    <section>
    	<h2>Section Titre</h2>
    	<p>Contenu de la section.</p>
    </section>
    ```

-   **`<article>`** : Contenu indépendant (articles de blog, etc.).

    ```html
    <article>
    	<h2>Titre de l'article</h2>
    	<p>Texte de l'article...</p>
    </article>
    ```

-   **`<aside>`** : Contenu secondaire ou complémentaire (barres latérales, notes).

    ```html
    <aside>
    	<p>Contenu secondaire.</p>
    </aside>
    ```

-   **`<main>`** : Contenu principal de la page.
    ```html
    <main>
    	<h1>Contenu principal</h1>
    </main>
    ```

---

### **7. Autres Balises Utiles**

-   **`<div>`** : Conteneur générique (non sémantique).

    ```html
    <div class="conteneur">
    	<!-- Contenu -->
    </div>
    ```

-   **`<span>`** : Conteneur en ligne (non sémantique).
    ```html
    <span>Texte en ligne</span>
    ```

**Bonnes pratiques :** Limiter l’usage de `<div>` et `<span>` pour éviter une structure trop générique. Préférer les balises sémantiques.

---

### **8. Attributs Globaux Utiles**

-   **`class`** : Appliquer un style via CSS.
-   **`id`** : Identifiant unique dans la page (utile pour le CSS et le JavaScript).
-   **`style`** : Ajouter un style inline (éviter autant que possible, préférer le CSS).
-   **`title`** : Info-bulle qui apparaît au survol.
-   **`lang`** : Définir la langue du contenu. On peut ajouter cet attribut sur la balise html pour définir la langue de la page.

---

### **9. Accessibilité**

-   **`aria-label`**, **`aria-hidden`** : Attributs ARIA pour améliorer l'accessibilité.
    ```html
    <button aria-label="Fermer">X</button>
    ```

**Bonnes pratiques :** Toujours utiliser des balises sémantiques et des attributs ARIA lorsque nécessaire pour garantir une expérience utilisateur accessible à tous.
