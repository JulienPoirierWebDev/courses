## 💡 Tips de Modélisation (Mnémotechniques)

### 1. Relations de Tout-Partie : Composition vs. Agrégation

Ces deux concepts modélisent tous deux une relation "A possède B", mais le niveau de dépendance est différent :

| Relation | Analogie Mnémonique | Règle de Destruction | Symbole UML |
| :--- | :--- | :--- | :--- |
| **Composition** | **"Mort du Tout entraîne la Mort de la Partie"** (Possession Forte) | Si l'objet **Tout** est détruit, l'objet **Partie** est détruit avec lui. (Ex : Une `Voiture` est détruite $\implies$ le `Moteur` est détruit/n'existe plus dans ce contexte). | **Losange Plein** (Noir) : le noir symbolise la mort ou la forte dépendance. |
| **Agrégation** | **"La Partie peut vivre sans le Tout"** (Possession Faible) | Si l'objet **Tout** est détruit, l'objet **Partie** continue d'exister. (Ex : Un `Professeur` quitte l'`Université` $\implies$ le `Professeur` existe toujours et peut être embauché ailleurs). | **Losange Vide** (Blanc) : le blanc symbolise la survie ou l'indépendance. |

### 2. Classes vs. Objets (L'Usine à Gâteaux)

Pour bien distinguer la classe et l'objet :

| Concept | Analogie | Rôle | Notation |
| :--- | :--- | :--- | :--- |
| **Classe** | La **Recette** du gâteau ou le **Moule** | Définit la structure (les ingrédients) et le comportement (les étapes de cuisson). | Non souligné |
| **Objet** | Le **Gâteau** fini (une instance du moule) | Possède des **valeurs** spécifiques (l'état) à un instant donné. | **Souligné** |

### 3. Héritage vs. Interface (La Taxonomie et les Outils)

| Concept | Analogie Mnémonique | Règle | Symbole UML |
| :--- | :--- | :--- | :--- |
| **Héritage** | **"Est un"** (Ex : Un `Chien` *est un* `Mammifère`) | Gère la **taxonomie** (la hiérarchie naturelle des types) et le **partage de code**. | **Flèche à tête triangulaire vide** |
| **Interface** | **"Peut faire"** (Ex : Un `Chien` *peut faire* `Nager`) | Gère les **rôles transversaux** sans polluer la hiérarchie. C'est un **Contrat** de comportement. | $<<interface>>$ ou le symbole "Lollipop" |

### 4. Le Polymorphisme (Le Standard Universel)

* **Tip :** Pensez à la **Prise Électrique Universelle**.
    * L'**Interface** (la forme de la prise) est standard et définie dans la Superclasse.
    * L'**Implémentation** (le type de courant ou d'appareil branché) est différente pour chaque Sous-classe (le séchoir, la lampe, l'ordinateur).
    * Vous savez que vous pouvez appeler la méthode **`brancher()`** sur n'importe quel appareil. Le système choisira le bon comportement spécifique (Liaison Dynamique).