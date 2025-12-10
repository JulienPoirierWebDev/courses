## 🌳 La Hiérarchie des Classes : Généralisation et Spécialisation

La hiérarchie des classes, souvent appelée **Héritage**, est un mécanisme puissant de l'approche objet qui permet la **réutilisation** et l'**extension** des fonctionnalités.

### Généralisation et Spécialisation

L'héritage est un concept vu sous deux angles différents dans le processus de modélisation :

| Concept | Démarche (Sens) | Moment d'Intervention | Objectif |
| :--- | :--- | :--- | :--- |
| **Généralisation** | Des **feuilles** (classes concrètes) vers la **racine** (classes abstraites). | **Début de la modélisation**, lors de l'identification des éléments du système. | Définir les **superclasses** abstraites en extrayant les points communs des objets réels. |
| **Spécialisation** | De la **superclasse** vers la **sous-classe**. | Lors de la **programmation par extension et réutilisation**. | **Spécialiser** et **étendre** les fonctions existantes pour encapsuler de nouveaux besoins dans des sous-classes. |

### Notation UML de l'Héritage

* Le lien d'héritage (ou de généralisation) est symbolisé par une **flèche à tête triangulaire vide** (non remplie) pointant toujours dans la direction de la **Superclasse** (la classe plus générale).
* Ce lien n'admet **ni nom, ni rôle, ni cardinalité**.



---

## 💡 Le Concept d'Ensemble et d'Inclusion

La définition d'une classe est un acte d'**abstraction** basé sur l'identification de points communs malgré les différences. C'est l'équivalent de définir un **ensemble** d'objets.

* La **sous-classe** est un **sous-ensemble** de la superclasse.
* Ceci implique une **inclusion** : **Ce qui est vrai pour un objet d'une Superclasse est nécessairement vrai pour un objet de sa Sous-classe.**
    > **Exemple :** Si la classe `:Carnivore` a une opération `chasser()`, alors l'objet `:Lion` (sous-classe de `:Carnivore`) possède l'opération `chasser()`.



### Propagation par Classification

L'héritage est un mécanisme de **propagation** :

1.  **Propagation de l'État :** La sous-classe hérite de tous les **attributs** de la superclasse.
2.  **Propagation du Comportement :** La sous-classe hérite de toutes les **opérations** de la superclasse.
3.  **Propagation des Contraintes :** La sous-classe hérite des contraintes (règles) définies dans la superclasse.

---

## 🗃️ Les Classes Abstraites

Une **classe abstraite** est une classe conçue pour être uniquement une superclasse dans une hiérarchie, sans pouvoir être instanciée (elle n'aura jamais d'objets directs).

* **Rôle :** Alléger la description des sous-classes en regroupant les **points communs** de plusieurs sous-classes. C'est une facilité de lecture et d'organisation du modèle.
* **Notation UML :** Le **nom de la classe** est écrit en **italique** dans le compartiment supérieur.



---

## ⚠️ Défis et Précautions dans l'Héritage

### Critères de Spécialisation

Il faut être vigilant lors de la définition des sous-classes, ce qui demande une **bonne connaissance du processus métier**.

* **À éviter :** Ne pas utiliser un simple **attribut** comme critère d'héritage. (Exemple : la couleur d'une voiture n'est pas un critère d'héritage, c'est un attribut qui varie par instance).
* **Conséquence :** La spécialisation crée un **couplage fort** entre deux classes (la sous-classe est très dépendante de la structure interne de la superclasse).

### Héritage Multiple et Covariance

* **Héritage Multiple :** C'est la possibilité pour une sous-classe d'hériter de **plusieurs superclasses** simultanément.
    * **Problème :** Peut générer des **conflits** (collision de noms) si les superclasses ont des attributs ou des opérations de même nom, notamment dans la configuration en **losange** (où deux superclasses dérivent elles-mêmes d'une même classe ancêtre).
    * **Solution :** De nombreux langages de programmation interdisent l'héritage multiple. La modélisation peut devoir être **revue** en fonction des capacités du langage cible.
* **Covariance :** Situation où l'ordre de spécialisation est clair, mais les critères des classes héritantes sont ambigus. C'est souvent lié aux descriptions métier et peut nécessiter une analyse approfondie pour réduire la confusion.

### Le Principe de Substitution de Liskov (LSP)

Ce principe, introduit par **Barbara Liskov**, est fondamental pour assurer la robustesse de l'héritage :

> **Définition :** Toute instance d'une sous-classe doit pouvoir être substituée à toute instance de sa superclasse **sans altérer les propriétés désirables du programme**.

En d'autres termes : si le programme peut fonctionner avec une instance de la superclasse, il doit continuer à fonctionner correctement si cette instance est remplacée par une instance d'une de ses sous-classes.

* Ceci est crucial lors de l'utilisation du **polymorphisme d'héritage** (que nous allons voir ensuite), où les opérations héritées peuvent être modifiées (redéfinies) dans la sous-classe.