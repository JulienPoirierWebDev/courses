# Partie 1 : Introduction et installation

## Chapitre 1 : Introduction et présentation du programme
### 1.1 Présentation du programme de la formation
Bienvenue dans cette formation de deux jours sur SQL et MySQL ! Ce programme a été conçu pour vous aider à maîtriser les concepts fondamentaux et les compétences pratiques nécessaires pour travailler avec les bases de données relationnelles en utilisant SQL et MySQL.

Au cours de cette formation, vous apprendrez à créer, gérer et interroger des bases de données à l'aide de différentes techniques et outils.

## Chapitre 2 : Qu'est-ce qu'une base de données ?
### 2.1 Introduction aux bases de données
Une base de données est un système organisé de stockage d'informations qui permet d'effectuer des opérations pour créer, modifier, récupérer et supprimer des données. 

Les bases de données relationnelles, comme MySQL, sont basées sur le modèle relationnel, qui organise les données en tables composées de lignes et de colonnes. Chaque table représente une entité (par exemple, un client ou un produit) et chaque ligne représente un enregistrement (une instance de cette entité).

## Chapitre 3 : Introduction à SQL et MySQL
### 3.1 Qu'est-ce que SQL ?
SQL (Structured Query Language) est un langage de programmation standardisé utilisé pour communiquer avec des bases de données relationnelles. SQL permet d'effectuer des opérations telles que la création, la modification, la suppression et la récupération de données à partir de bases de données.

### 3.2 Qu'est-ce que MySQL ?
MySQL est un système de gestion de bases de données relationnelles (RDBMS) open source et gratuit. Il est largement utilisé pour les applications web et est l'un des principaux composants de la pile LAMP (Linux, Apache, MySQL, PHP).

## Chapitre 4 : Installation de MySQL et d'un outil de gestion
### 4.1 Installation de MySQL
Pour installer MySQL sur votre ordinateur, suivez les instructions fournies par la documentation officielle : https://dev.mysql.com/doc/refman/8.0/en/installing.html

### 4.2 Installation d'un outil de gestion
Après avoir installé MySQL, il est recommandé d'installer un outil de gestion de bases de données pour faciliter le travail avec MySQL. Voici deux options populaires :

- MySQL Workbench : un outil graphique de gestion de bases de données MySQL. Pour l'installer, suivez les instructions sur le site officiel : https://www.mysql.com/products/workbench/

- phpMyAdmin : un outil web de gestion de bases de données MySQL. Pour l'installer, suivez les instructions sur le site officiel : https://www.phpmyadmin.net/

Pour nous faciliter la vie, nous allons utiliser un package de logiciels, comprenant MySQL et phpMyAdmin, qui s'appelle Xampp. Pour l'installer, suivez les instructions sur le site officiel : https://www.apachefriends.org/fr/index.html

Il permet d'installer d'un coup : Apache, MySQL, PHP et Perl.


---- 
# Partie 2 : Les premières requêtes SQL de selection. 

## Chapitre 1 : Bases de SQL et syntaxe
### 1.1 Structure d'une requête SQL

Une requête SQL est une instruction qui permet d'interagir avec une base de données pour récupérer, insérer, mettre à jour ou supprimer des données. Les requêtes SQL sont composées de clauses, qui déterminent les actions à effectuer sur les données.

```sql
SELECT colonne1, colonne2
FROM nom_de_la_table
WHERE condition; 
```

### 1.2 Les types de données SQL
Les types de données SQL sont utilisés pour définir le type de données que peut contenir une colonne. Voici quelques types de données courants :

- INT : un entier (nombre entier)
- FLOAT : un nombre à virgule flottante (nombre réel)
- VARCHAR(n) : une chaîne de caractères de longueur variable, où n est la longueur maximale
- DATE : une date (AAAA-MM-JJ)
- DATETIME : une date et heure (AAAA-MM-JJ HH:MM:SS)


### 1.3 Les opérateurs SQL

Les opérateurs SQL permettent de comparer, combiner ou effectuer des opérations sur les données. Voici quelques opérateurs courants :

* = : égal
* <> ou != : différent
* < : inférieur
* \> : supérieur
* <= : inférieur ou égal
* \>= : supérieur ou égal
* AND : combine deux conditions, toutes deux doivent être vraies
* OR : combine deux conditions, l'une d'elles doit être vraie
* NOT : inverse la condition

### 1.4 Les clauses SELECT, FROM et WHERE
- SELECT : spécifie les colonnes à récupérer dans la requête
- FROM : spécifie la table à partir de laquelle récupérer les données
- WHERE : spécifie une condition que les enregistrements doivent respecter pour être récupérés
    
```sql
SELECT nom, prenom
FROM clients
WHERE email = 'jean.dupont@email.com';
```

---

## Chapitre 2 : Filtrage et tri des données
### 2.1 Utilisation de AND, OR et NOT
Les opérateurs AND, OR et NOT permettent de combiner ou de modifier des conditions dans une clause WHERE.

```sql	
-- Exemple avec AND
SELECT nom, prenom
FROM clients
WHERE email = 'jean.dupont@email.com' AND prenom = 'Jean';

-- Exemple avec OR
SELECT nom, prenom
FROM clients
WHERE email = 'jean.dupont@email.com' OR email = 'marie.durand@email.com';

-- Exemple avec NOT
SELECT nom, prenom
FROM clients
WHERE NOT email = 'jean.dupont@email.com';
```

### 2.2 Opérateurs de comparaison
Les opérateurs de comparaison permettent de comparer les valeurs des colonnes aux valeurs spécifiées.

```sql
-- Exemple avec < (inférieur)
SELECT nom, prenom
FROM clients
WHERE age < 30;

-- Exemple avec >= (supérieur ou égal)
SELECT nom, prenom
FROM clients
WHERE age >= 18;
```

### 2.3 Fonctions d'agrégation (COUNT, SUM, AVG, MIN, MAX)
Les fonctions d'agrégation permettent de réaliser des calculs sur un ensemble de lignes. Voici quelques fonctions d'agrégation courantes :

- COUNT(): compte le nombre de lignes
- SUM(): calcule la somme des valeurs d'une colonne
- AVG(): calcule la moyenne des valeurs d'une colonne
- MIN(): trouve la valeur minimale d'une colonne
- MAX(): trouve la valeur maximale d'une colonne

```sql
-- Exemple avec COUNT()
SELECT COUNT(*) as nombre_clients
FROM clients;

-- Exemple avec SUM()
SELECT SUM(salaire) as total_salaires
FROM employes;

-- Exemple avec AVG()
SELECT AVG(salaire) as salaire_moyen
FROM employes;

-- Exemple avec MIN()
SELECT MIN(salaire) as salaire_min
FROM employes;

-- Exemple avec MAX()
SELECT MAX(salaire) as salaire_max
FROM employes;
```

### 2.4 Tri des données avec ORDER BY
La clause ORDER BY permet de trier les résultats d'une requête selon une ou plusieurs colonnes.

```sql
-- Trier les clients par nom (ordre croissant)
SELECT nom, prenom, email
FROM clients
ORDER BY nom ASC;

-- Trier les clients par nom (ordre décroissant)
SELECT nom, prenom, email
FROM clients
ORDER BY nom DESC;

-- Trier les clients par nom, puis par prénom
SELECT nom, prenom, email
FROM clients
ORDER BY nom ASC, prenom ASC;
```

### 2.5 Limitation des résultats avec LIMIT
La clause LIMIT permet de limiter le nombre de lignes renvoyées par une requête.

```sql
-- Récupérer les 10 premiers clients
SELECT nom, prenom, email
FROM clients
ORDER BY nom ASC
LIMIT 10;

-- Récupérer les clients 11 à 20
SELECT nom, prenom, email
FROM clients
ORDER BY nom ASC
LIMIT 10 OFFSET 10;
```

Dans cette session, nous avons couvert les bases de la syntaxe SQL, les opérateurs, les types de données, et les clauses pour filtrer, trier et limiter les résultats des requêtes. Dans la session suivante, nous aborderons des sujets plus avancés, tels que les manipulations de données et les jointures.

---

# Partie 3 : Les requêtes de selection avancées

## Chapitre 2 : Jointures entre tables
Les jointures permettent de combiner des données provenant de plusieurs tables. Il existe différents types de jointures, dont les plus courants sont INNER JOIN, LEFT JOIN, RIGHT JOIN et FULL OUTER JOIN.

### 2.1 INNER JOIN
L'INNER JOIN renvoie les enregistrements qui ont des correspondances dans les deux tables.

```sql
-- Récupérer les clients et leurs commandes
SELECT clients.nom, clients.prenom, commandes.date
FROM clients
INNER JOIN commandes ON clients.id = commandes.client_id;
```

2.2 LEFT JOIN
Le LEFT JOIN renvoie tous les enregistrements de la table de gauche, et les enregistrements correspondants de la table de droite. Si aucune correspondance n'est trouvée, les résultats de la table de droite sont NULL.

```sql
-- Récupérer tous les clients et leurs commandes éventuelles
SELECT clients.nom, clients.prenom, commandes.date
FROM clients
LEFT JOIN commandes ON clients.id = commandes.client_id;
```

2.3 RIGHT JOIN
Le RIGHT JOIN renvoie tous les enregistrements de la table de droite, et les enregistrements correspondants de la table de gauche. Si aucune correspondance n'est trouvée, les résultats de la table de gauche sont NULL.

```sql
-- Récupérer toutes les commandes et leurs clients éventuels
SELECT clients.nom, clients.prenom, commandes.date
FROM clients
RIGHT JOIN commandes ON clients.id = commandes.client_id;
```

2.4 FULL OUTER JOIN
Le FULL OUTER JOIN renvoie les enregistrements lorsqu'il y a une correspondance dans l'une des tables. Les résultats de la table de gauche ou de droite sont NULL s'il n'y a pas de correspondance.
    
```sql
-- Récupérer toutes les commandes et tous les clients, avec leurs correspondances éventuelles
SELECT clients.nom, clients.prenom, commandes.date
FROM clients
FULL OUTER JOIN commandes ON clients.id = commandes.client_id;
```

Dans cette session, nous avons couvert les manipulations de données avec INSERT, UPDATE et DELETE, ainsi que les différents types de jointures pour combiner des données provenant de plusieurs tables. Dans la session suivante, nous explorerons d'autres fonctionnalités SQL avancées, telles que les sous-requêtes et les vues.

---
# Partie 4 : Les requêtes de modification de données

## Chapitre 1 : Manipulation des données

### 1.1 Insertion de données avec INSERT INTO
La commande INSERT INTO permet d'ajouter de nouveaux enregistrements à une table.

```sql
-- Insérer un client dans la table clients
INSERT INTO clients (nom, prenom, email)
VALUES ('Martin', 'Pierre', 'pierre.martin@email.com');
```

### 1.2 Mise à jour des données avec UPDATE
La commande UPDATE permet de modifier des données existantes dans une table.

```sql
-- Mettre à jour l'adresse e-mail d'un client
UPDATE clients
SET email = 'pierre.martin@nouveau-email.com'
WHERE id = 1;
```

### 1.3 Suppression des données avec DELETE
La commande DELETE permet de supprimer des enregistrements d'une table.


```sql
-- Supprimer un client de la table clients
DELETE FROM clients
WHERE id = 1;
```