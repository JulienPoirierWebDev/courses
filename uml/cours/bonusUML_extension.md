Les **stéréotypes**, les **valeurs marquées** et les **contraintes** sont les trois mécanismes d'extension majeurs en UML. Ils permettent d'adapter et d'enrichir le langage standard pour l'utiliser dans un domaine spécifique sans le modifier formellement.

Voici une explication simple de chacun :

---

## 🏷️ Les Mécanismes d'Extension en UML

### 1. Les Stéréotypes (Stereotypes)

Le stéréotype permet de créer un **nouveau type d'élément** à partir d'un élément UML existant (comme une classe, une association ou un composant), en lui donnant une **sémantique spécifique** à votre domaine d'application.

* **Rôle :** Il indique **le rôle précis** que joue un élément dans un contexte donné.
* **Notation :** Le nom du stéréotype est placé entre doubles chevrons (`<< >>`) au-dessus ou à côté de l'élément de base.
* **Exemple :**
    * UML standard a une `Classe`.
    * Vous pouvez définir le stéréotype $<<Interface>>$ (qui est en réalité un stéréotype appliqué à une classe), $<<Controller>>$ ou $<<Entity>>$ pour différencier les rôles de vos classes dans une architecture.



### 2. Les Valeurs Marquées (Tagged Values)

La valeur marquée (ou *tagged value*) est un mécanisme qui permet d'**ajouter de nouvelles propriétés** aux éléments UML (classes, attributs, opérations, etc.). C'est comme ajouter un champ d'information non prévu par la norme.

* **Rôle :** Elle permet de capturer des **informations spécifiques** nécessaires à la phase d'implémentation ou de documentation.
* **Notation :** Elle est représentée sous la forme **`{nom_propriété = valeur}`** placée près de l'élément concerné.
* **Exemple :**
    * Pour une `Classe`, vous pourriez spécifier son auteur et sa date de création :
        `Client {auteur = "M. Dupont", dateCréation = 2025-01-15}`
    * Pour un `Attribut`, vous pourriez spécifier sa source de données :
        `+ solde : Monétaire {source = BDD_Clients}`

### 3. Les Contraintes (Constraints)

Une contrainte est une **règle sémantique** qui restreint l'élément UML auquel elle s'applique. Elle sert à modéliser une règle métier ou une condition qui ne peut pas être exprimée simplement par la notation graphique standard.

* **Rôle :** Elle permet d'exprimer des **conditions de validité** ou des règles métier complexes.
* **Langage :** Les contraintes sont souvent exprimées en langage naturel ou dans le langage formel **OCL** (Object Constraint Language).
* **Notation :** Elles sont placées entre accolades (`{ }`) près de l'élément concerné.
* **Exemple :**
    * Sur une association entre `Compte` et `Transaction` :
        `{Une transaction ne peut être effectuée que si le solde est positif.}`
    * Sur un attribut `dateNaissance` :
        `dateNaissance : Date {doit être antérieure à la date du jour}`

---

### Résumé des Mécanismes d'Extension

| Mécanisme | Symbole | Ce qu'il ajoute ou modifie | Fonction |
| :--- | :--- | :--- | :--- |
| **Stéréotype** | $<<...>>$ | Le **type** (rôle sémantique) de l'élément. | Classer, spécialiser, donner un sens métier à un élément UML standard. |
| **Valeur Marquée** | $\{... = ...\}$ | Une **propriété d'information** supplémentaire. | Documenter l'élément avec des détails techniques ou de gestion. |
| **Contrainte** | $\{...\}$ | Une **règle sémantique** ou une condition. | Restreindre le comportement ou l'état de l'élément. |
