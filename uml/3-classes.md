## 🏛️ La Classe : Abstraction et Modélisation

Après avoir observé les **objets** concrets et leurs interactions, on remarque que des objets similaires partagent des caractéristiques et des comportements communs. L'esprit humain procède alors à une **abstraction** pour créer le concept de **Classe**.

Une **Classe** est une description générique et un **modèle** qui définit la structure (attributs) et le comportement (opérations) que posséderont toutes ses instances, c'est-à-dire les **objets**.

### Classe vs. Objet (Instance)

| Caractéristique | **Classe** | **Objet (Instance)** |
| :--- | :--- | :--- |
| **Nature** | **Abstraction** (le moule, le type) | **Instance** concrète (l'élément créé à partir du moule) |
| **Notation UML** | **Non souligné** (`Client`) | **Souligné** (`client1 : Client`) |
| **Contenu** | **Généralités** (définition des attributs et opérations) | **Particularités** (valeurs actuelles des attributs, état) |

L'avantage majeur est que le développeur peut construire le logiciel à partir d'**abstractions de type objet** du monde réel, rendant le code moins "bas niveau" et plus facile à maintenir et à comprendre.

---

## 🧬 Structure d'une Classe

La définition d'une classe se compose de deux éléments principaux : les **Attributs** et les **Opérations**.

### 1. Les Attributs (L'État Potentiel)

Les attributs sont des variables définies au niveau de la classe. Ils représentent la structure de données et les propriétés que chaque objet (instance) possédera.

* Les **valeurs** instantanées de ces attributs constituent l'**état** d'un objet donné.
* Dans la spécification de la classe, on définit le nom et le **type** des attributs (Ex : `nom : Chaîne de caractères`, `solde : Monétaire`).

### 2. Les Opérations (Le Comportement)

Les opérations (ou méthodes) définissent les actions et les services que les objets de cette classe peuvent exécuter. On distingue traditionnellement cinq catégories d'opérations :

| Catégorie | Rôle | Exemple |
| :--- | :--- | :--- |
| **Constructeur** | Création et initialisation d'un nouvel objet (instance). | `CompteBancaire(numero, soldeInitial)` |
| **Destructeur** | Destruction d'un objet et libération des ressources. | `~CompteBancaire()` |
| **Sélecteur (Getter)** | Permet de lire (récupérer) la valeur d'un attribut. | `getSolde()` |
| **Modificateur (Setter)** | Permet de modifier la valeur d'un attribut. | `setAdresse(nouvelleAdresse)` |
| **Itérateur** | Permet de visiter (parcourir) une structure de données interne à l'objet contenant d'autres objets (ex : une liste de clients). | `prochainClient()` |

> **💡 Note :** Les opérations ne doivent pas se limiter à de simples sélecteurs/modificateurs. Elles doivent fournir une **vraie plus-value** métier (ex : `calculerIntérêts()`, `authentifierUtilisateur()`).

---

## 🎨 Représentation Graphique en UML

En UML, une classe est généralement représentée par un rectangle divisé en **trois compartiments** de base, dans l'ordre de haut en bas :

1.  **Nom de la Classe**
2.  **Attributs**
3.  **Opérations**



> **Optionnel :** Certains modèles avancés peuvent inclure d'autres compartiments pour les **Responsabilités** ou les **Exceptions**.

---

## 🔒 Encapsulation : Spécification et Réalisation

La définition d'une classe peut être vue en deux parties qui mettent en lumière le principe d'**Encapsulation** :

### 1. Spécification (ou Interface)
* **Quoi ?** Définit le **domaine de définition** et les **propriétés** des instances de la classe (noms et types des attributs, signatures des opérations).
* **Quand ?** Elle est définie **avant** la réalisation.

### 2. Réalisation (ou Implémentation)
* **Comment ?** Décrit la manière dont la spécification est mise en œuvre. Elle contient le **corps des opérations** (le code) et les données internes nécessaires à leur fonctionnement.

### L'Encapsulation (L'Occultation des Détails)

L'**Encapsulation** est le mécanisme qui consiste à **occulter les détails de la réalisation** aux utilisateurs de la classe. Seule la **spécification (l'interface)** est visible publiquement.

> **Analogie :** L'encapsulation est comme l'**enceinte de confinement** d'une centrale nucléaire. Les mécanismes internes sont cachés. Seuls les points d'accès (les opérations publiques) sont disponibles, et les défauts restent confinés à l'intérieur de la classe, ce qui **simplifie la maintenance**.

#### Avantages

* **Protection des Données :** Les données des objets (attributs) sont protégées contre les accès intempestifs et les modifications non contrôlées. Par défaut, il faut **utiliser les opérations** (modificateurs) pour changer l'état de l'objet.
* **Faible Couplage :** Les utilisateurs de l'abstraction ne dépendent pas de la réalisation. Si le développeur modifie la réalisation interne, l'interface publique (la spécification) reste la même, réduisant le **couplage** dans le modèle.

### Visibilité (Niveaux d'Accès)

UML permet de spécifier le niveau d'accès aux attributs et opérations, définissant qui peut y accéder (le niveau d'encapsulation) :

| Symbole | Visibilité | Signification |
| :--- | :--- | :--- |
| **`+`** | **Public** | Accessible par **toutes** les classes. |
| **`#`** | **Protégé** | Accessible par la classe elle-même et ses **sous-classes** (héritage). |
| **`-`** | **Privé** | Accessible **uniquement** par la classe elle-même (par défaut pour les attributs, favorisant l'encapsulation). |
