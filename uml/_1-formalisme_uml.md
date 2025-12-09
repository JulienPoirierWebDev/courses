

Voici des fiches de référence qui agissent comme un dictionnaire des formes UML: la **Classe**, l'**Objet**, et les **Relations structurelles**.

-----

## 📐 Fiche 1 : Représentation de la Classe et de l'Objet

Ces éléments sont les briques de base de la modélisation structurelle.

### 1\. La Classe (Le Modèle)

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Général** | Rectangle divisé en trois compartiments. | **Nom**<br>---<br>**Attributs**<br>---<br>**Opérations** | `Client`<br>---<br>`- nom : Chaîne`<br>`# age : Entier`<br>---<br>`+ getNom() : Chaîne`<br>`+ setAge(a : Entier)` |
| **Visibilité** | Indique qui peut accéder à l'élément. | **`+`** (Public)<br>**`#`** (Protégé)<br>**`-`** (Privé) | `+ operation()` (Accessible partout)<br>`- attribut` (Accessible uniquement dans la classe) |
| **Classe Abstraite** | Classe qui ne peut pas être instanciée (pas d'objet direct). | Nom en **italique**. | *`Animal`* |

### 2\. L'Objet (L'Instance)

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Général** | Rectangle dont le nom est toujours **souligné**. | `nomObjet : NomClasse` (ou seulement `:NomClasse` pour une instance générique). | `client1 : Client`<br>ou<br>`:Client` |
| **État** | Affichage de l'état actuel de l'objet dans la 2e partie du rectangle. | `attribut = valeur` | `client1 : Client`<br>---<br>`nom = "Durand"`<br>`age = 35` |

-----

## 🔗 Fiche 2 : Représentation des Relations Structurelles

Ces formes montrent comment les classes sont liées de façon statique dans le modèle.

### 1\. L'Association

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Lien** | Connexion générique bidirectionnelle entre deux classes. | Ligne simple. | `ClasseA ----- ClasseB` |
| **Cardinalités** | Nombre d'instances liées. Placées aux extrémités du lien. | **`1`** (Exactement un)<br>**`0..1`** (Optionnel)<br>**`1..*`** (Un ou plusieurs)<br>**`*`** (Zéro ou plusieurs) | `Client 1 -- commande* Commande` |
| **Rôle et Nom** | Nom descriptif de la relation (verbe) et des extrémités (rôle). | Le nom est centré sur le lien. Les rôles sont aux extrémités. | `Livre` *`est écrit par`* `1` **Auteur** |

### 2\. L'Agrégation (Association par Référence)

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Lien** | Relation de **Tout-Partie** où la partie peut exister sans le tout. | **Losange vide (blanc)** du côté de la classe **Tout**. | `Promotion 1 <◇---- 1..* Élève` |

### 3\. La Composition (Association par Valeur)

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Lien** | Relation de **Tout-Partie** où le tout est le **propriétaire** et la destruction du tout détruit la partie. | **Losange plein (noir)** du côté de la classe **Tout**. | `Dossier 1 <■---- 1..* Document` |

### 4\. L'Héritage / Généralisation

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Lien** | Relation **"est un type de"** (Spécialisation). | **Flèche à tête triangulaire vide** pointant vers la **Superclasse**. | `Chien --▻ Mammifère` |

-----

## 💬 Fiche 3 : Représentation des Interactions (Diagrammes de Séquence)

Ces notations décrivent la communication dynamique entre les objets.

| Élément | Description | Notation UML | Exemple |
| :--- | :--- | :--- | :--- |
| **Ligne de Vie** | Représente la participation d'un objet au scénario et l'écoulement du temps. | Ligne verticale pointillée sous l'objet. | `:Client` |
| **Activation** | Période pendant laquelle l'objet est actif (exécute une méthode). | Rectangle fin vertical sur la Ligne de Vie. | |
| **Message Synchrone** | L'expéditeur est bloqué en attente de réponse. | Flèche à **tête pleine** (standard). | `client: seConnecter()` |
| **Message Asynchrone** | L'expéditeur n'est pas bloqué. | Flèche à **demi-tête** ou simple ligne. | `server: envoyerNotification()` |
| **Retour de Message** | Réponse du destinataire (optionnel). | Ligne pointillée. | |

