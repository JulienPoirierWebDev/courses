# Les outils modernes de webdesign : Figma et Penpot

## Introduction

Aujourd'hui, la majorité des interfaces web sont conçues avec des outils de design collaboratif.

Les deux outils les plus intéressants pour des développeurs sont :

- **Figma**
- **Penpot**

Ces outils permettent de :

- créer des wireframes
- concevoir des maquettes
- construire des design systems
- créer des prototypes interactifs
- collaborer avec des designers et des développeurs

Ils fonctionnent directement dans le navigateur, ce qui facilite le travail en équipe.

## La logique générale de ces outils

Même si Figma et Penpot diffèrent sur certains points, leur logique générale est proche.

Une interface de design moderne repose souvent sur quatre zones principales.

### 1. La zone de dessin

C'est l'espace central où l'on construit l'interface.

On y crée :

- les écrans
- les composants
- les éléments graphiques

Chaque écran est souvent appelé une **frame**.

Exemple :

```text
Homepage
Product page
Login page
Dashboard
```

### 2. Le panneau des calques

Situé le plus souvent à gauche, il permet de voir la structure du design.

```text
Frame
 ├ Header
 │ ├ Logo
 │ └ Menu
 ├ Hero
 │ ├ Image
 │ └ Button
 └ Footer
```

Cette logique ressemble beaucoup à une structure HTML.

### 3. Le panneau des propriétés

Situé à droite, il permet de modifier :

- les couleurs
- les tailles
- les typographies
- les marges
- les layouts

### 4. Le mode prototype

Il sert à définir les interactions :

- clic
- navigation
- animations

On peut ainsi simuler le comportement d'un site ou d'une application avant le développement.

## Figma

Figma est aujourd'hui l'outil le plus répandu dans le design d'interface.

Il est apprécié pour :

- sa simplicité
- la collaboration en temps réel
- son écosystème de plugins
- ses outils de prototypage

Il est souvent considéré comme un standard du design produit moderne.

### La force de Figma : les plugins

Figma possède un vaste écosystème de plugins qui permettent d'automatiser ou d'accélérer beaucoup de tâches.

Quelques exemples fréquents :

#### Iconify

Permet d'accéder à des milliers d'icônes open source directement dans Figma.

#### Unsplash

Permet d'insérer rapidement des images libres de droit dans les maquettes.

#### Autoflow

Permet de relier les écrans pour visualiser un parcours utilisateur.

#### Content Reel

Permet de générer rapidement :

- des noms
- des emails
- des avatars
- du faux contenu

#### Stark

Permet de vérifier des points d'accessibilité comme :

- le contraste
- la lisibilité
- certains problèmes de perception visuelle

## Penpot

Penpot est une alternative open source à Figma.

### Open source

Penpot est libre et peut être auto-hébergé.

Cela permet :

- d'éviter une licence propriétaire
- de garder le contrôle sur les données
- d'héberger l'outil soi-même si nécessaire

### Une logique proche du web

Penpot se distingue par une philosophie plus proche du développement front-end.

Il s'appuie sur des concepts familiers pour les développeurs, comme :

- Flexbox
- Grid
- composants réutilisables

Cela facilite souvent la communication entre design et développement.

### Collaboration design / développement

Penpot cherche à réduire les problèmes de handoff, c'est-à-dire le moment où le design est transmis au développeur.

L'objectif est que designers et développeurs travaillent avec des références plus proches du web réel.

## Figma vs Penpot

Les deux outils sont proches dans leur fonctionnement, mais ils n'ont pas les mêmes points forts.

| Figma | Penpot |
| --- | --- |
| très répandu dans l'industrie | open source |
| grand écosystème de plugins | écosystème plus petit |
| très bon prototypage | très orienté web |
| outil propriétaire | auto-hébergement possible |

En pratique :

- Figma est souvent choisi pour son adoption massive dans l'industrie
- Penpot séduit par son approche open source et sa proximité avec les standards du web

## Pourquoi ces outils sont importants pour les développeurs

Même si un développeur ne conçoit pas tout le design, comprendre ces outils est très utile.

Ils permettent de :

- comprendre les maquettes fournies par les designers
- récupérer les couleurs et les espacements
- inspecter les styles
- voir les comportements interactifs
- mieux préparer l'intégration front-end

Dans beaucoup d'équipes, le développeur consulte directement la maquette pour récupérer :

- les tailles
- les couleurs
- les composants
- les variantes d'état

## La logique des composants

Un concept clé de ces outils est le **composant**.

Exemple : un bouton peut être défini comme composant, puis réutilisé dans plusieurs écrans.

Si l'on modifie le composant de base :

```text
changer la couleur
changer la taille
changer la typographie
```

Toutes les instances se mettent à jour.

Cette logique est très proche de :

- React
- Vue
- Web Components

## Résumé

Les outils modernes comme Figma et Penpot permettent :

- de concevoir des interfaces
- de tester des interactions
- de créer des design systems
- de collaborer efficacement
- de corriger des problèmes d'UX avant d'écrire du code

Pour un développeur, savoir lire ces outils permet de mieux comprendre l'interface avant de l'intégrer.
