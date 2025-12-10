## 🏛️ Le Diagramme de Classes

Le **Diagramme de Classes** est le diagramme structurel le plus important en UML. Il représente la **vue statique** du système, en décrivant les entités fondamentales (les classes) et les relations permanentes qui les unissent.

### 1. La Notation de la Classe

La classe est l'élément central du diagramme, représentée par un rectangle divisé en trois compartiments de base.

| Compartiment | Contenu | Règle de Notation |
| :--- | :--- | :--- |
| **Nom de la Classe** | Nom du concept modélisé. | Indiqué en **gras**. |
| **Attributs** | Les propriétés et l'état de la classe. | Listés sous le nom. |
| **Opérations** | Le comportement et les actions de la classe. | Listées sous les attributs. |

#### Enrichissement de la Classe

* **Stéréotypes :** On peut ajouter des informations complémentaires en utilisant des stéréotypes encadrés par des doubles chevrons $<< >>$. Cela permet d'indiquer le rôle ou la nature spécifique de la classe (ex. : $<<interface>>$, $<<Controller>>$, $<<abstract>>$).
* **Compartiments Complémentaires :** Le concepteur peut ajouter d'autres compartiments pour la documentation, tels que **Responsabilités** ou **Exceptions**, selon les besoins de l'équipe.
* **Classes Abstraites :** Une classe abstraite est désignée en écrivant son nom en **italique**.

### 2. Attributs et Opérations Détaillés

Les attributs et les opérations peuvent être enrichis pour donner un maximum de détails sur leur comportement et leurs contraintes :

#### Dépôt des Attributs

Un attribut peut être rédigé de manière complète pour indiquer :

$$
\text{visibilité} \quad \text{nom} \quad [\text{multiplicité}] : \text{type} = \text{valeur initiale}
$$

* **Visibilité :** Indique le niveau d'accès (`+` public, `#` protégé, `-` privé).
* **Multiplicité/Cardinalité :** Indique le nombre d'instances permises pour cet attribut (ex. : `[1]` pour une valeur unique, `[0..*]` pour une liste de valeurs). Cela inclut la limite inférieure et supérieure.
* **Valeur Initiale (ou par défaut) :** La valeur que prend l'attribut lors de la création de l'objet.

#### Remarques et Documentation

On peut ajouter des **remarques** (ou **notes**) au diagramme. Elles sont représentées par un **rectangle au coin replié** et sont utilisées pour des commentaires ou des explications qui ne sont pas codifiables.

### 3. Les Relations entre Classes

Les relations représentent des connexions permanentes entre les entités. Elles ne représentent **pas** les messages ou les interactions dynamiques, mais la **structure globale** du système.

| Relation | Rôle | Symbole UML |
| :--- | :--- | :--- |
| **Association** | Lien sémantique général. | Trait simple, souvent décoré par des **multiplicités** (cardinalités). |
| **Agrégation** | Relation Tout-Partie faible (indépendance de la partie). | **Losange vide** du côté du Tout. |
| **Composition** | Relation Tout-Partie forte (destruction du Tout entraîne destruction de la Partie). | **Losange plein** du côté du Tout. |
| **Généralisation** | Relation d'héritage **"est un type de"**. | **Flèche à tête triangulaire vide** pointant vers la Superclasse. |

### 4. Contraintes Structurelles et Sémantiques

Les relations peuvent être enrichies par des contraintes pour exprimer des règles plus complexes :

* **Contraintes sur les Relations :**
    * **{sous-ensemble} :** Indique qu'une association est un sous-ensemble des objets impliqués dans une autre association.
    * **{ordonnée} :** Indique que les objets liés ont une relation d'ordre.
    * **{exclusif} :** Indique que les objets peuvent être liés par l'une ou l'autre association, mais pas les deux en même temps.
* **Contraintes sur la Généralisation :** Utilisées pour préciser comment l'héritage est géré (ex. : **{disjointe}** si une sous-classe ne peut hériter que d'une seule superclasse, ou **{complète}** si toutes les possibilités de sous-classes ont été modélisées).
