## 🎯 Le Diagramme de Cas d'Utilisation (Use Case Diagram)

Le diagramme de cas d'utilisation est le point d'entrée de l'analyse. Il est idéal pour **récupérer les besoins des utilisateurs** et définir le **périmètre fonctionnel** du système. Souvent flou au début, ce processus est **très incrémental**.

### 1. Acteurs et Cas d'Utilisation

| Élément | Rôle | Notation UML |
| :--- | :--- | :--- |
| **Acteur** | Entité externe (utilisateur humain, autre système, temps) qui interagit avec le système pour obtenir un résultat ayant une **valeur métier**. | **Bonhomme allumette** |
| **Cas d'Utilisation** | Représente un **service** que le système fournit en réponse à la motivation (au besoin) d'un acteur. | **Ovale** |
| **Association** | Indique qu'un **Acteur** participe (interagit) avec un **Cas d'Utilisation**. | **Trait simple** entre l'Acteur et l'Ovale. |



### 2. Le Cas d'Utilisation comme Classe Orchestratrice

Un cas d'utilisation doit être considéré comme une **classe orchestratrice** dont les instances sont les **scénarios** concrets.

* **Rôle :** Il sert de point de communication (ou **collaborateur**) entre l'extérieur (l'acteur) et les objets internes du système.

### 3. Utilité du Diagramme

Le diagramme de cas d'utilisation est essentiel tout au long du projet :

* **Début de Cycle :** Définir et valider les **besoins**. Il permet de s'assurer que l'on construit **le bon système**.
* **Fin de Cycle :** Servir de base à la **documentation**, aux **tests utilisateurs** (scénarios de test) et à la validation des fonctionnalités.

---

## 🔁 Description du Flot d'Événements

Un Cas d'Utilisation est un **flot d'événements** qui se déroule en réponse à une **motivation de l'utilisateur**.

* **Flot Nominal (ou Primaire) :** La séquence d'étapes "normale" et réussie.
* **Flots Alternatifs :** Des séquences d'événements qui décrivent les **exceptions**, les **points de bifurcation**, ou les fins non prévues. Ils permettent de comprendre la gestion des erreurs et des cas limites.

### 4. Relations entre Cas d'Utilisation

En plus de l'association avec les acteurs, les cas d'utilisation peuvent être liés entre eux par deux relations d'extension :

#### A. Relation $<<include>>$ (Inclusion)

* **Sémantique :** Indique qu'un Cas d'Utilisation est **obligatoire** et **nécessaire** dans la logique du système pour que le Cas d'Utilisation de base puisse se réaliser. Il est toujours exécuté.
* **Motivation :** Réutiliser un comportement commun à plusieurs cas (ex : la vérification des droits ou l'authentification).
* **Notation :** Flèche en pointillés avec l'étiquette $<<include>>$ pointant vers le cas inclus.

#### B. Relation $<<extend>>$ (Extension)

* **Sémantique :** Indique qu'un Cas d'Utilisation étend le comportement d'un Cas d'Utilisation initial, généralement sous une **condition spécifique** ou une exception. Il n'est pas exécuté par défaut.
* **Motivation :** Gérer les cas spéciaux ou alternatifs (ex : l'envoi d'un message d'erreur si la condition n'est pas remplie).
* **Notation :** Flèche en pointillés avec l'étiquette $<<extend>>$ pointant vers le cas de base.



---

# Bonus : lien avec les user stories

Bien que le **Diagramme de Cas d'Utilisation** (Use Case Diagram) montre *graphiquement* le périmètre fonctionnel, la *description textuelle* de ces cas d'utilisation est souvent rédigée sous forme de **User Stories** pour des raisons de clarté et de traçabilité.

---

## 📝 Formalisation des Exigences : La User Story

La **User Story** est une description simple et courte d'une fonctionnalité vue du point de vue de l'utilisateur. Elle répond à la question : "Quel est le besoin réel et la valeur métier apportée ?".

Le format standard est le suivant :

> **AS A** (*En tant que*)... **[Rôle]**
>
> **I WANT TO** (*Je veux*)... **[Objectif/Fonctionnalité]**
>
> **SO THAT** (*Afin de*)... **[Bénéfice/Valeur]**

### Composants et Lien avec le Cas d'Utilisation

| Composant | Rôle dans le Système | Exemple | Lien UML (Cas d'Utilisation) |
| :--- | :--- | :--- | :--- |
| **[Rôle]** | Le type d'utilisateur ou d'Acteur qui souhaite la fonctionnalité. | *AS A* **Client** | Correspond à l'**Acteur** (Ex. : Client, Administrateur). |
| **[Objectif]** | L'action ou la fonctionnalité souhaitée. | *I WANT TO* **consulter l'historique de mes transactions** | Correspond au **Cas d'Utilisation** (Ex. : Consulter historique). |
| **[Bénéfice]** | La raison, la valeur métier ou le résultat attendu. | *SO THAT* **je peux vérifier mes dépenses passées.** | Correspond à la **Motivation** et à la **Valeur** du Cas d'Utilisation. |

### Avantages pour la Modélisation

1.  **Concentration sur la Valeur :** Le format de la User Story force l'équipe à se concentrer sur le *pourquoi* (le bénéfice) plutôt que sur le *comment* (la solution technique).
2.  **Facilité de Compréhension :** Elles sont écrites dans un langage simple et sont facilement comprises par les clients et les développeurs.
3.  **Incrémentalité :** Les User Stories sont petites et peuvent être priorisées, planifiées et développées de manière **incrémentale**, ce qui correspond bien à la nature itérative des projets objets.

> **Conclusion :** Chaque Cas d'Utilisation dans votre Diagramme peut être documenté par une ou plusieurs User Stories, fournissant ainsi une description textuelle claire du flot d'événements et de la motivation de l'acteur.
