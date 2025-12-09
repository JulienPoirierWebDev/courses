## 🏗️ L'Objet en Approche Orientée Objet (AOO)

L'approche objet est née de la nécessité de mieux gérer la **complexité** des systèmes informatiques. Contrairement à l'approche **fonctionnelle** (procédurale) qui se concentre sur les actions et les fonctions hiérarchisées (où la modification d'une fonction peut impacter toute la chaîne), l'AOO se base sur la décomposition du problème en entités autonomes : les **objets**.

Cette approche permet de considérer des interactions avec des **abstractions du monde réel**, facilitant ainsi la représentation et la compréhension du système.

---

## 🎯 Définition : Qu'est-ce qu'un Objet ?

Un **objet** est l'unité atomique fondamentale de l'approche objet. C'est une instance concrète qui combine trois caractéristiques essentielles :

### 1. L'Identité

L'identité permet de distinguer un objet de manière **non ambiguë** de tout autre objet, même s'ils sont de nature similaire ou possèdent le même état.

> **Exemple :** Vous et votre voisin êtes tous deux des objets `:Personne`. Vous avez probablement des attributs communs (un nom, un âge), mais votre identité (souvent gérée par un identifiant unique en informatique, comme un ID) vous rend distincts.

### 2. L'État

L'état d'un objet est défini par l'ensemble des **valeurs instantanées** de tous ses **attributs** à un moment donné. L'état est **dynamique** : il évolue au fil du temps et des interactions.

* **Représentation dans un diagramme UML :** Les attributs et leurs valeurs sont souvent affichés dans la deuxième partie du rectangle de l'objet, sous la forme : **`attribut = valeur`**.



| Élément | Exemple |
| :--- | :--- |
| **Attribut** | `solde` |
| **Valeur** | `1500` |
| **État** | L'objet `CompteBancaire` est dans un état où son solde est de 1500. |

### 3. Le Comportement

Le comportement décrit les **compétences, actions et réactions** de l'objet. Il est déterminé par un ensemble d'opérations (méthodes) qu'un objet peut exécuter.

* Une unité de comportement est appelée une **opération** (ou **méthode**).
* Une opération est généralement déclenchée par une **stimulation externe**, représentée par l'envoi d'un **message** par un autre objet.
* Le comportement **dépend de l'état** et a pour effet de le **modifier**.
    > **Exemple :** Un objet `:Avion` peut exécuter l'opération `atterrir()` **seulement s'il est** dans l'état `en_vol`. L'exécution de cette opération modifiera son état en `au_sol`.

---

## 💬 Les Interactions et la Communication (Messages)

Le véritable rôle d'un objet apparaît lorsqu'il **interagit** et **communique** avec d'autres objets via l'échange de **messages**.

* **Interaction :** En UML, une interaction entre objets est souvent représentée par une **ligne continue**.
* **Message :** Un message est symbolisé par une **flèche** située au-dessus de la ligne d'interaction, portant le nom de l'opération demandée.
    > **Syntaxe :** `ObjetSource -> ObjetCible : message()`



| Monde | Exemples |
| :--- | :--- |
| **Monde Physique** | Grain de sable, étoile, voiture, chien. |
| **Monde Virtuel** | Compte en banque, message électronique, requête SQL, équation mathématique. |

Les objets informatiques que nous manipulons sont toujours une **représentation abstraite et simplifiée** d'objets du monde réel ou virtuel, adaptée aux besoins du système.

---

## 🎨 L'Objet en Notation UML

En UML (Unified Modeling Language), la notation graphique de base pour un objet est :

* **L'Objet :** Un **rectangle**.
* **Le Nom de l'Objet :** Si le nom est **générique** et représente une instance non spécifique, on le note avec un **deux-points** et une **majuscule**.
    * Exemples : `:Élève`, `:Professeur`, `:CompteBancaire`.
* **Les Attributs :** Notés dans la deuxième section du rectangle, sous la forme `attribut = valeur`.

| Élément UML | Symbole |
| :--- | :--- |
| **Objet** | Rectangle |
| **Lien (Association)** | Trait continu entre deux rectangles |
| **Commentaire** | Rectangle avec un coin replié, lié en **pointillés** à l'élément concerné. |

---
