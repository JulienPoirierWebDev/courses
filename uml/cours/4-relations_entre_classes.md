## 🔗 Les Relations entre Classes

Les relations entre classes définissent les connexions sémantiques entre les entités, c'est-à-dire comment elles collaborent et dépendent les unes des autres.

### 1. L'Association (Faible Couplage)

L'association est la relation la plus générale et celle qui implique le **moins de couplage** (dépendance) entre les classes. Elle représente une **connexion** ou un **moment d'échange** potentiel entre deux classes.

| Caractéristique | Description |
| :--- | :--- |
| **Couplage** | Le plus faible. |
| **Sémantique** | Connexion, échange, collaboration. |
| **Nature** | Généralement bidirectionnelle par défaut (mais peut être unidirectionnelle). |

#### Enrichissement de l'Association

On décore souvent l'association pour clarifier le contexte :

1.  **Nom de l'Association :** Représente l'action ou la raison de la connexion, souvent sous forme **verbale** (active ou passive), avec un **sens de lecture** indiqué par une flèche.
    * Exemple : `Client` **←** *`achète`* **-** `Produit`
2.  **Rôles :** Le nom que prend une classe par rapport à l'autre dans cette relation (Ex : `Client` joue le rôle d'`acheteur` auprès de `Commande`).
3.  **Cardinalités (Multiplicité) :** Elles définissent le **nombre d'instances** d'une classe qui peuvent être liées à une instance de l'autre classe.
    * Exemples :
        * `1` : Exactement un.
        * `0..1` : Zéro ou un (Optionnel).
        * `1..*` : Un ou plusieurs.
        * `*` : Zéro ou plusieurs.



---

### 2. L'Agrégation (Couplage Moyen : "Contient")

L'agrégation modélise une relation de type **"tout-partie"** ou **"contient-est contenu"**. Le couplage est plus fort que pour une simple association, car elle introduit une **asymétrie** :

* **Asymétrie :** La relation n'est pas égalitaire, mais elle est toujours considérée comme **bidirectionnelle**.
* **Indépendance :** La "partie" peut **exister sans le "tout"**. La destruction du tout n'entraîne pas nécessairement celle de la partie.
    * **Exemple :** Un objet `Étudiant` peut faire partie d'un objet `Promotion`. Si la `Promotion` est détruite, l'`Étudiant` continue d'exister (il est juste dans une autre promotion ou diplômé).

#### Représentation Graphique

L'agrégation est représentée par un trait avec un **losange vide** (blanc) du côté de la classe qui joue le rôle du **Tout** (la classe la plus forte/le conteneur).



#### Impact

Elle facilite la transmission des attributs et des opérations du **Tout vers la Partie**.

---

### 3. La Composition (Couplage Fort : "Propriétaire de")

La composition est la relation de "tout-partie" la plus **forte** et la plus contraignante.

* **Couplage :** Le plus fort.
* **Propriété :** Le **Composite** (le Tout) est le **propriétaire** exclusif du **Composant** (la Partie).
* **Dépendance de Vie :** La destruction du Composite **entraîne obligatoirement** la destruction des Composants qu'il contient.
    * **Exemple :** Un objet `Moteur` est une partie essentielle d'un objet `Voiture`. Si la `Voiture` est détruite, le `Moteur` associé (dans ce contexte de modélisation) est également considéré comme détruit ou non utilisable indépendamment.

#### Représentation Graphique

La composition est représentée par un trait avec un **losange plein** (noir) du côté de la classe qui joue le rôle du **Tout** (le propriétaire).



#### Conséquences de Modélisation

Le choix de modéliser par composition a des conséquences directes sur les règles de gestion des instances :

* Si les **cardinalités** sont `1` de chaque côté (1:1), la création d'une instance du Composite **implique** la création d'une instance du Composant.
* Si un composant a une cardinalité de `1`, il ne peut pas être détruit tant que le Composite existe.

