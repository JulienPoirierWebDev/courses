# Les design tokens

## Introduction

Les **design tokens** sont des variables qui représentent les éléments fondamentaux d'un design system.

Ils permettent de stocker et de partager les valeurs utilisées dans l'interface :

- couleurs
- typographies
- tailles
- espacements
- bordures
- ombres
- animations

Un design token est donc une **valeur abstraite réutilisable dans toute l'interface**.

Exemple simple :

```css
--color-primary
--color-secondary
--space-sm
--space-md
--radius-default
--font-title
```

L'idée est simple : on ne manipule plus directement des valeurs visuelles isolées, on manipule des **concepts de design**.

## Pourquoi utiliser des design tokens

Sans design tokens, un projet devient vite difficile à maintenir.

Exemple sans tokens :

```css
button {
  background: #1E88E5;
  border-radius: 6px;
}

.card {
  border-radius: 6px;
}
```

Si l'on décide de changer le rayon global du design, il faut modifier plusieurs endroits du code.

Avec des design tokens :

```css
:root {
  --radius-default: 6px;
}

button {
  border-radius: var(--radius-default);
}

.card {
  border-radius: var(--radius-default);
}
```

On modifie alors la valeur une seule fois.

## Les grandes catégories de tokens

Les design tokens représentent les fondations du design system. On les organise souvent en plusieurs familles.

### Les couleurs

Exemple :

```css
--color-primary
--color-secondary
--color-accent
--color-text
--color-background
```

On peut aussi prévoir des couleurs fonctionnelles :

```css
--color-success
--color-warning
--color-danger
```

### Les espacements

Exemple :

```css
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
```

Cela évite des valeurs incohérentes comme :

```css
margin: 13px;
padding: 17px;
margin-top: 19px;
```

### Les typographies

Exemple :

```css
--font-title
--font-body
--font-monospace
```

On peut aussi définir les tailles :

```css
--font-size-sm
--font-size-md
--font-size-lg
--font-size-xl
```

### Les rayons, bordures et ombres

Exemple :

```css
--radius-sm
--radius-md
--border-default
--shadow-card
```

Ces tokens servent à garder une interface cohérente sur tous les composants.

## Les design tokens en HTML et CSS

Dans le web, les design tokens sont souvent implémentés avec des variables CSS.

```css
:root {
  --color-primary: #1E88E5;
  --space-md: 16px;
  --radius-default: 8px;
}
```

Puis utilisés dans les composants :

```css
.button {
  background: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-default);
}
```

Cette approche améliore :

- la maintenance
- la cohérence visuelle
- la réutilisation
- l'évolution du projet

## Design tokens et thèmes

Les tokens facilitent la gestion de plusieurs thèmes, par exemple un mode clair et un mode sombre.

```css
:root {
  --color-background: #F8F8F8;
  --color-text: #222222;
}

.dark-mode {
  --color-background: #121212;
  --color-text: #F5F5F5;
}
```

Toute l'interface s'adapte automatiquement si les composants utilisent ces tokens.

## Pourquoi les définir dès la phase de design

Les design tokens ne doivent pas être inventés uniquement après le développement.

Ils doivent être pensés dès les outils de webdesign, par exemple dans Figma ou Penpot, quand on définit déjà :

- les styles de couleurs
- les styles typographiques
- les espacements
- les composants

Exemple dans un outil de design :

```text
Primary / Blue
Text / Dark
Background / Light
```

Ces styles peuvent ensuite être traduits dans le code :

```css
--color-primary
--color-text
--color-background
```

## Le lien entre design et développement

Les design tokens servent de langage commun entre designers et développeurs.

Sans tokens :

Designer :

> utilise le bouton bleu

Développeur :

> lequel exactement ?

Avec tokens :

Designer :

> utilise `Primary`

Développeur :

```css
var(--color-primary)
```

La communication devient plus précise et plus rapide.

## Design tokens et composants

Les tokens sont ensuite utilisés dans les composants UI.

Exemple :

```css
.button-primary {
  background: var(--color-primary);
  color: var(--color-text-light);
  padding: var(--space-md);
  border-radius: var(--radius-default);
}
```

Le composant devient réutilisable et cohérent avec le reste de l'interface.

## Design tokens et frameworks modernes

De nombreux frameworks utilisent cette logique, même si les implémentations diffèrent :

- Tailwind
- Material Design
- Bootstrap
- Chakra UI

L'idée reste la même : définir les fondations du design une seule fois, puis les réutiliser partout.

## Résumé

Les design tokens permettent :

- d'assurer la cohérence visuelle
- de faciliter la maintenance
- de relier design et code
- de construire un design system durable

Ils doivent être pensés :

- dès la conception
- dans les outils de design
- avant d'écrire le CSS
