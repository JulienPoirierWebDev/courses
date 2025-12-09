## 📸 Le Diagramme d'Objets (Object Diagram)

Le Diagramme d'Objets est un **diagramme structurel** qui montre un ensemble d'objets (instances d'une classe) et leurs relations à un instant précis du temps. Il est très utile pour **valider** la structure du **Diagramme de Classes**.

### 1. Rôle et Utilité

Le diagramme d'objets répond à la question : "À quoi ressemblerait le système si je le figeais à un moment donné ?".

* **Validation du Modèle de Classes :** Il permet de vérifier si les **classes**, les **relations**, et surtout les **multiplicités** définies dans le Diagramme de Classes sont cohérentes dans un scénario réel.
* **Illustration Concrète :** Il sert d'exemple concret pour illustrer l'état des objets pour des cas d'utilisation spécifiques (ex. : "l'état d'un compte juste après un retrait").

### 2. Notation de l'Objet et de l'État

La notation est dérivée directement du Diagramme de Classes, mais avec des spécificités sur l'instanciation et l'état :

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Objet** | L'instance d'une classe. | Le nom de l'objet et de sa classe sont **soulignés**. | `professeur1 : Professeur` |
| **État** | L'ensemble des **valeurs instantanées** des attributs de l'objet. | Affiché dans le deuxième compartiment sous la forme `attribut = valeur`. | `solde = 1500` |
| **Lien** | Relation concrète entre deux objets (instance d'une association de classes). | Trait simple et **souligné**. | $\underline{\text{lien}} \text{ entre } \underline{\text{objet1 : ClasseA}} \text{ et } \underline{\text{objet2 : ClasseB}}$ |



### 3. Exemple de Validation

Imaginez que votre **Diagramme de Classes** ait une association entre `Client` et `Adresse` avec une multiplicité de `1..*` du côté de l'Adresse.

Le **Diagramme d'Objets** devra alors montrer un objet $\underline{\text{clientX : Client}}$ relié obligatoirement à **au moins une** instance d'$\underline{\text{adresseY : Adresse}}$, prouvant que la contrainte de `1..*` a été respectée dans ce cas spécifique.
