## 💾 La Persistance des Objets

La **persistance** est une propriété essentielle qui confère à l'objet la capacité de **transcender l'espace et le temps**.

* **Objet Persistant :** Un objet est persistant par défaut. Sa persistance lui permet d'être **détruit** (mis hors d'usage, désactivé, stocké) puis d'être **activé** (restauré, réactivé) ultérieurement lorsque le système en a de nouveau besoin. Il survit à l'exécution du programme qui l'a créé.
* **Objet Non-Persistant (Transitoire) :** Ces objets n'existent que le temps d'une exécution ou d'une session. Ils disparaissent lorsque le processus qui les contient se termine.

### Passivation et Activation

Ce sont les mécanismes qui permettent à un objet persistant de "traverser l'espace et le temps" :

* **Passivation :** Processus de **stockage** de l'état d'un objet (ses attributs et leurs valeurs) dans un support stable (base de données, fichier). L'objet est "endormi" ou "détruit" de la mémoire vive, mais son état est préservé. C'est le passage d'un **espace de nom** (la mémoire d'exécution) à un autre (l'espace de stockage).
* **Activation :** Processus de **reconstruction** de l'objet en mémoire à partir de son état stocké.

---

## 🗣️ La Communication entre Objets (Les Messages)

La communication est la base de toute l'approche objet. Le système est décomposé en objets et les **messages** sont la relation de communication qui les relie de façon **dynamique**. C'est le fait d'envoyer un message qui met les objets en **collaboration**.

L'importance de cette communication dynamique est étroitement liée aux concepts de **polymorphisme** et de **liaison dynamique**.

Un message se traduit dans le programme par : une procédure (appel de méthode), un événement, une interruption, etc.

### Les Rôles de Comportement

Selon la nature de leurs interactions, les objets peuvent jouer l'un des trois rôles suivants :

| Rôle | Caractéristique | Initiative | Proximité Humaine |
| :--- | :--- | :--- | :--- |
| **Acteur** | Est à l'**origine** de l'interaction. | Initie l'envoi de messages. | Faible |
| **Serveur** | Est toujours le **destinataire** des messages. | N'est jamais à l'origine de l'interaction. | Faible |
| **Agent** | Cumule les caractéristiques de l'acteur et du serveur. | Peut agir de sa propre **initiative** ou réagir à une **sollicitation externe**. | **Forte** (proche des interactions humaines) |

### Typologie des Messages

Le type de message définit comment l'expéditeur gère l'attente d'une réponse de son destinataire.

| Type de Message | Symbole UML | Description | Analogie |
| :--- | :--- | :--- | :--- |
| **Synchrone** | Flèche à **tête triangulaire pleine** (pleine). | L'expéditeur est **bloqué** et en attente du destinataire jusqu'à ce que celui-ci ait accepté le message et/ou renvoyé une réponse. | Couper la parole (demander une information et attendre la réponse immédiate). |
| **Asynchrone** | **Demi-flèche** ou flèche simple. | L'expéditeur **n'est pas bloqué** et continue son exécution immédiatement après l'envoi. Il ne dépend pas de la réponse instantanée du destinataire. | Envoyer une lettre ou un email. |
| **Minuté** | Flèche avec un petit **cercle** (horloge/montre). | Similaire au synchrone, l'expéditeur est bloqué, mais seulement pendant un **temps maximum donné**. Après ce délai, il reprend la main. | Attendre au téléphone un temps limité. |

---

## 📉 Les Diagrammes d'Interaction

Les diagrammes d'interaction se concentrent sur la **représentation dynamique** des échanges de messages entre objets pour la réalisation d'un scénario ou d'une opération.

### 1. Le Diagramme de Collaboration (Diagramme de Communication)

* **Objectif :** Insister sur la **structure** des liens entre les objets et l'ordre des appels.
* **Notation :** Les objets sont représentés par des rectangles et les liens par des traits. Les messages sont des flèches numérotées sur ces liens.
* **Avantage :** Idéal pour la **phase exploratoire** ou pour montrer l'organisation spatiale du système.
* **Inconvénient :** Devient rapidement peu clair s'il y a un grand nombre de messages car la numérotation peut être difficile à suivre.



---

### 2. Le Diagramme de Séquence

* **Objectif :** Mettre l'accent sur l'**ordre temporel** des messages. C'est une représentation plus **abstraite** où le temps s'écoule de haut en bas.
* **Notation :** Les objets sont placés en haut. Des **lignes de vie** (traits verticaux) symbolisent le temps. Les messages sont des flèches horizontales.
* **Avantage :** Le plus pertinent pour modéliser des scénarios complexes où l'enchaînement des événements est crucial (idéal dans un **second temps** de modélisation). La complexité est gérée grâce à la dimension temporelle.
