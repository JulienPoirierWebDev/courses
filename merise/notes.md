# Intro

Merise : Méthode d'Etude et de Realisation Informatique par les Sous-Ensembles (ou pour les Systèmes d'Entreprise)

1970 par des ingénieurs d'Aix-en-Provence (aixois).

Le ministère de l'industrie a financé des recherches car ils voulaient pouvoir normaliser et rationaliser les échanges entre les administrations et les sous-traitants, producteurs de logiciels.

Ce qui explique sa place en France. Pour info, les formations de comptabilité enseignent Merise car les comptables sont souvent les interlocuteurs des sociétés de logiciels dans les TPE / PME, c'est donc un langage partagé.

## Une approche systèmique :

-   Décomposition de l'entreprise en systèmes
-   Séparation claire entre les données (partie statique) et les traitements (partie dynamique)
-   Une approche par niveau

### Systémique :

Un système, c'est un ensemble de parties (similaires, comparables) qui participent a un objectif commun. Vient de l'anatomie : système cardiaque, système digestif, etc.

Un système fonctionne en transformant des flux d'entrée en flux de sortie, via des processus.

Un système c'est :

-   Un élement dont le périmètre est fini et déterminé par une frontière qui le sépare de son environnement. On est dans le système ou on est en dehors du système.
-   Il y a des interactions avec l'environnement : flux entrant a traiter, flux sortant restituant les données a l'environnement.
-   Le système génère des informations qui rendent compte de son comportement au sein de l'environnement mais aussi pour son propre compte.
-   Un système doit donc, pour prendre des décisions, stocker et traiter les informations.

### Les parties de l'entreprise :

-   Un système de pilotage :
    Son rôle est de définir les missions, et les objectifs, il organise l'utilisation des moyens, contrôle l'exécution des travaux. C'est lui qui pilote, en analysant l'environnement mais l'organisation en-elle même : c'est un système reflexif.

-   Un système d'information :
    C'est l'ensemble des ressources humaines, techniques et financières qui participent au transit de l'information dans l'entreprise (c'est des gens, des logiciels, des statistiques). Les informations peuvent être externes ou internes, elles circulent a l'intérieur et vers l'extérieur.

-   Un sytème opérant.
    C'est l'ensemble des moyens humains et techniques qui exécutent les ordres du système de pilotage

### Le rôle du SI :

Le système d'information n'est donc pas qu'un logiciel mais un logiciel doit prendre en compte le SI pour s'y intégrer parfaitement. Il faut donc analyser le SI.

-   Interviews
-   Observations
-   Etude des documents internes.
-   Etude des documents externes.

#### Gérer les informations

On peut alors identifier les types d'information qui transitent :

-   Les informations élementaires :
    Elles ne peuvent pas être inventées, elles ne peuvent pas être déduites d'autres informations
    exemple : nom du client, adresse, raison sociale, prix d'un article, etc.

Une information peut avoir plusieurs occurences (penser version unique) : l'information NOM peut être POIRIER, DURAND, etc.

-   Les informations calculées
    Ce sont des informations déduites d'autres informations élementaires.
    Exemple : le total d'une commande, le nombre de commandes passées dans le mois.

IMPORTANTS :
Une information, pour être utilisable, doit être atomique, c'est-a-dire non décomposable :
Un nom de famille est atomique : "POIRIER"
Par contre : "M. Julien POIRIER" n'est pas une information atomique.

Exo :

-   Peugot 206
-   2 rue de la Paix
-   2.50€
-   XXXXXX

#### Gérer les traitements.

Au-delà de collecter des informations, les SI d'occupent de gérer des traitements liées a ces informations.

Un évènement déclenche un traitement.

Un traitement peut être automatisé ou manuel.

On analyse les traitements car ils découlent de fonctionnalités du SI et donc les traitements se basent sur des évènements qui permettent d'utiliser de la donnée existante ou de la donnée entrante pour générer de la nouvelle donnée et donc (potentiellement) modifier les informations présentes dans le SI.

Les traitements sont la partie dynamique du Système d'Information de l'entreprise.

### La conception du SI

un SI existe dans toute entreprise, même s'il n'est pas formalisé. Il n'y a pas forcement d'informatique au moment de la création de l'entreprise / de l'organisation :

Un système d'emprunt de livres peut être géré totalement sur papier.

Mais en tant que Concepteur Développeur d'Application, nous sommes a amené a créer un nouveau SI lorsque l'on veut informatiser le fonctionnement d'une entreprise.

Pour cela, on décompose l'étude du nouveau SI en plusieurs niveaux :

-   Le niveau conceptuel :

Ce niveau chercher a répondre a la question "QUOI ?" : on veut déterminer ce qui est stocké comme informations mais aussi ce qui est fait a partir de ces informations.

En gros, on ignore les contraintes techniques et organisationnelles pour se demander simplement ce qui transite comme infos, comment elles sont stockées et ce qui peut les amener a être modifé.

Pour les données, MERISE propose le Modèle COnceptuel des Données (MCD)

Pour les traitements, MERISE propose le Modèle Conceptuel des Traitements (MCT).

-   Le niveau organisationnel

C'est le moment où l'on se demande QUI, OU et QUAND ?

Nous l'ignorons dans ce cours, mais en gros, cela sert a définir les temporalités, la chronologie des opérations, les unités de lieu, les postes de travail concerné, les types d'accès a la base de données.

-   Le niveau logique
    Ce niveau est indépendant de la technologie utilisée pour implémenter le SI (la base de données, le langage de programmation, etc.). Il répond a la question AVEC QUOI ?

Pour les données, MERISE propose le Modèle Logique des Données (MLD).

Pour les traitements, MERISE propose le Modèle Logique des Traitements (MLT).

-   Le niveau physique

C'est le moment où l'on se demande COMMENT ? Ce niveau permet de définir l'organisation réelle des données et des traitements : les méthodes de stockage et d'accès à l'information.

Pour les données, MERISE propose le Modèle Physique des Données (MPD).

Pour les traitements, MERISE propose le Modèle Opérationnel et physique des Traitements (MOpT).

TL;DR : MERISE est une méthode de conception de Système d'Information qui permet de décomposer l'étude du SI en plusieurs niveaux pour répondre a des questions différentes. C'est une cheminement intellectuel qui réduit l'inceritude et la complexité de la conception d'un SI et qui permet aussi a l'organisation de mieux se connaitre en se questionnant sur ses processus internes.

# Le dictionnaire de données et les dépendances fonctionnelles

## Le dictionnaire de données

C'est un document qui permet de rencenser, de classer et de trier toutes les informations qui transitent dans le SI. Il peut être très rapide a faire ou bien on peut aller loin dans le détail (en fonction des besoins).

Pour faire un dictionnaire des données, voici une proposition de structure :

-   Nom de la donnée
-   Description de la donnée
-   Format de la donnée
-   Type de la donnée : élémentaire ou calculée
-   Règle de calcul (si la donnée est calculée)
-   Règle de gestion (si la donnée est soumise a des règles de gestion, par exemple : "le nom du client doit être renseigné" ou "le prix d'un article doit être positif")
-   Exemple de donnée
-   Document source (si la donnée provient d'un document externe)

-   Nom de la donnée : c'est le nom de la donnée tel qu'il est utilisé dans le SI
-   Description de la donnée : c'est une description de la donnée, pour que tout le monde comprenne ce que c'est
-   Format de la donnée : c'est le format de la donnée, par exemple : "chaine de caractères", "entier", "date", etc. On peut aussi définir le nombre de caractères pour une chaine de caractères, le nombre de chiffres pour un entier, etc.
-   Type de la donnée : c'est le type de la donnée, on peut avoir des données élémentaires (qui ne peuvent pas être déduites d'autres données) ou des données calculées (qui sont déduites d'autres données)
-   Règle de calcul : si la donnée est calculée, c'est ici qu'on explique comment elle est calculée
-   Règle de gestion : si la donnée est soumise a des règles de gestion, c'est ici qu'on les explique
-   Exemple de donnée : c'est un exemple de donnée, pour que tout le monde comprenne ce que c'est
-   Document source : si la donnée provient d'un document externe, c'est ici qu'on le note

## Les dépendances fonctionnelles

Les dépendances fonctionnelles servent a comprendre les liens entre les données.

Cette étape est important car même si elle parait simple, elle permet de comprendre comment les données sont liées entre elles : de la qualité des dépendances fonctionnelles dépend la qualité du SI. Une erreur ici a des impacts durables sur tout le processus MERISE et donc sur le SI.

Définition (source : Merise Guide pratique ENI 3e edition):
"Une donnée B dépend fonctionnellement de (ou est en dépendance fonctionnelle) d'une donnée A lorsque la connaissance de la valeur de la donnée A nous permet la connaissance d'une et au maxiumum une seule valeur de la donnée B."

Par exemple, on connaissant la plaque d'immatriculation d'une voiture, on peut connaitre le modèle de la voiture. Par contre, connaissant le modèle de la voiture, on ne peut pas connaitre la plaque d'immatriculation.

Donc le modèle de la voiture est en dépendance fonctionnelle de la plaque d'immatriculation.

Notation :

(A) -> (B)

A est la clé de la relation (on parle aussi de source de la dépendance fonctionnelle). B est appelé "le but" de la dépendance fonctionnelle.

On met des parenthèses car il peut y avoir plusieurs données de référence et plusieurs données dépendantes.

Exemple :

(Model de voiture) -> (Plaque d'immatriculation)

### Dépendances fonctionnelles composées

Un dépendance fonctionnelle est dites composée lorsque la clé de la relation est composée de plusieurs données.

Par exemple

(Numéro Coureur, Numéro Course) -> (Temps)

On ne peut connaitre le temps d'un coureur sur une course sans connaitre le numéro du coureur et le numéro de la course.

### Dépendances fonctionnelles élementaires

Une dépendance fonctionnelle est dite élémentaire lorsqu'elle ne fait pas intervenir de donnée inutile dans la partie de droite de la flèche (la clé de la relation).

Par exemple :

(Numéro Coureur) -> (Nom Coureur)

On ne peut connaitre le nom d'un coureur sans connaitre son numéro.

Par contre :

(Numéro Coureur, Adresse du coureur) -> (Nom Coureur)

Ici, l'adresse du coureur est inutile, on peut connaitre le nom du coureur sans connaitre son adresse.

### Dépendances fonctionnelles élementaires directes

Une dépendance fonctionnelle est dite directe lorsqu'elle ne peut pas être décomposée en plusieurs dépendances fonctionnelles.

Par exemple :

(Numéro de classe) -> (Numéro de l'élève)

(Numéro de l'élève) -> (Nom de l'élève)

(Numéro de classe) -> (Nom de l'élève)

Les deux premières dépendances fonctionnelles sont directes, la troisième est indirecte : on peut la décomposer en deux dépendances fonctionnelles directes.

### Exercice

VOIR MERISE P33

# Le Modèle Conceptuel des Données

Une fois les dépendances fonctionnelles établies, on peut passer a la création du Modèle Conceptuel des Données (MCD).

Les élements de base du MCD sont :

-   Les entités-types
-   Les relations-types
-   Les attributs

Remarque : Parfois, on parle directement d'entité et de relation : dans le formalisme MERISE, pour l'enttité-type Client, on a plusieurs entités comme Jean Dupont, Pierre Durand, etc. Pour rendre MERISE plus "simple", certains auteurs ont enlevé "type" pour ne parler que d'entité, de relation, etc. C'est un abus de langage mais c'est courant.

## Les attributs

Ce sont les informations de base du SI.

Une propriété dispose d'un type , leur longueur peut être définie, elles peuvent être obligatoires ou non, elles peuvent être uniques ou non.
On ne décrit pas encore les types car on est au niveau conceptuel, c'est trop proche du système physique.

## Les entités-types

Une entité-type est un ensemble d'entités qui ont des propriétés communes. On les regroupe pour simplifier la modélisation.

Par exemple, on peut regrouper les entités "Jean Dupont", "Pierre Durand", etc. dans l'entité-type "Client".

### L'identifiant ou clé primaire

Chaque entité-type doit avoir un identifiant, c'est ce qui permet de distinguer les entités entre elles.

Par exemple, pour l'entité-type "Client", on peut choisir l'identifiant "Numéro de client".

La clé primaire peut être un attribut simple (comme le numéro de client) ou composé (comme le numéro de coureur et le numéro de course). Dans certains cas, on peut avoir une clé primaire artificielle (comme un numéro de client généré automatiquement par le SI). Lorsque l'on débute en MERISE, il est conseillé de choisir une clé primaire simple, voir artificielle.

## Les relations-types

Une relation-type est un lien entre deux entités-types.

Un client peut commander des articles, un article peut être commandé par des clients : on a une relation entre les entités-type "Client" et "Article" qui est "Commander".

On préfère utiliser des verbes pour nommer les relations-types.

### Les cardinalités

Les cardinalités permettent de définir combien d'entités d'un type peuvent être liées a combien d'entités d'un autre type.

Il y a la cardinalité minimale et la cardinalité maximale.

Chaque cardinalité est un nombre ou un symbole :

-   0 : zéro
-   1 : un
-   n : plusieurs

On note les cardinalités de la manière suivante :

-   0,1 : zéro ou un
-   1,1 : un et un seul
-   0,n : zéro ou plusieurs
-   1,n : un ou plusieurs

Les cardinalités se note a coté des entités-types :

Client 1,n Commande 0,n Article

On peut donc dire que :

-   Un client peut passer 0 ou plusieurs (n) commandes.
-   Un article peut être commandé 0 ou plusieurs (n) fois.

### Les relations-type porteuses

Une relation-type porteuse est une relation-type qui porte des attributs.

Par exemple, la relation-type "Commander" peut porter l'attribut "Quantité".

### Les relations-type réflexives

Une relation réflexive est une relation-type qui lie une entité-type a elle-même.

Par exemple, une entité-type "Employé" peut être liée a elle-même par une relation-type "Supérieur".

## Les règles a retenir :

-   Chaque entité-type doit avoir un identifiant
-   Toute les propriétés d'une entité-type doivent être des dépendances fonctionnelles de la clé primaire de l'entité-type.
-   Le nom d'une propriété ne doit apparaitre qu'ne seule fois dans le modèle conceptuel des données. Par exemple, si on a un attribut "Nom" dans l'entité-type "Client", on ne doit pas avoir un attribut "Nom" dans l'entité-type "Article" mais "Désignation" ou "Nom2" par exemple.
-   Les propriétés qui résultent d'un calcul ne doivent pas apparaitre dans le modèle conceptuel des données. Par exemple, si on a un attribut "Prix" dans l'entité-type "Article" et un attribut "Total" dans l'entité-type "Commande", on ne doit pas avoir un attribut "Total" dans l'entité-type "Article" car il peut être calculé a partir du prix et de la quantité.
