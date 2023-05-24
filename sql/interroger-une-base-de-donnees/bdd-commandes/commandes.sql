-- Création de la base de données
CREATE DATABASE Ecommerce;

-- Sélection de la base de données
USE Ecommerce;

-- Création de la table "Clients"
CREATE TABLE Clients (
    ID INT PRIMARY KEY,
    Nom VARCHAR(50),
    Date_de_naissance DATE,
    Genre CHAR(1)
);

-- Insertion des données dans la table "Clients"
INSERT INTO Clients (ID, Nom, Date_de_naissance, Genre)
VALUES
    (1, 'Jean', '1998-01-15', 'M'),
    (2, 'Marie', '1993-06-10', 'F'),
    (3, 'Pierre', '1988-03-22', 'M'),
    (4, 'Sophie', '1994-09-18', 'F'),
    (5, 'Nicolas', '1990-12-05', 'M'),
    (6, 'Emma', '1995-07-30', 'F'),
    (7, 'Thomas', '1992-04-25', 'M'),
    (8, 'Laura', '1996-11-12', 'F'),
    (9, 'Alexandre', '1987-08-08', 'M'),
    (10, 'Charlotte', '1999-02-28', 'F');

-- Création de la table "Produits"
CREATE TABLE Produits (
    ID INT PRIMARY KEY,
    Nom VARCHAR(50),
    Prix DECIMAL(10, 2)
);

-- Insertion des données dans la table "Produits"
INSERT INTO Produits (ID, Nom, Prix)
VALUES
    (1, 'iPhone 12', 999.99),
    (2, 'MacBook Pro', 1999.99),
    (3, 'Samsung QLED TV', 1499.99),
    (4, 'Google Pixel 5', 799.99),
    (5, 'Dell XPS 13', 1499.99),
    (6, 'LG OLED TV', 1999.99),
    (7, 'Sony PlayStation 5', 499.99),
    (8, 'Microsoft Surface Laptop', 1299.99),
    (9, 'LG UltraWide Monitor', 699.99),
    (10, 'Bose QuietComfort 35 II', 349.99);

-- Création de la table "Commandes"
CREATE TABLE Commandes (
    ID INT PRIMARY KEY,
    Client_ID INT,
    FOREIGN KEY (Client_ID) REFERENCES Clients(ID)
);

-- Insertion des données dans la table "Commandes"
INSERT INTO Commandes (ID, Client_ID)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3),
    (5, 4),
    (6, 5),
    (7, 6),
    (8, 7),
    (9, 8),
    (10, 9);

-- Création de la table de liaison "Commandes_Produits"
CREATE TABLE Commandes_Produits (
    ID INT PRIMARY KEY,
    Commande_ID INT,
    Produit_ID INT,
    FOREIGN KEY (Commande_ID) REFERENCES Commandes(ID),
    FOREIGN KEY (Produit_ID) REFERENCES Produits(ID)
);

-- Insertion des données dans la table de liaison "Commandes_Produits"
INSERT INTO Commandes_Produits (ID, Commande_ID, Produit_ID)
VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 2),
(4, 3, 3),
(5, 4, 2),
(6, 5, 3),
(7, 6, 1),
(8, 7, 2),
(9, 8, 3),
(10, 9, 1);

-- Création de la table "Adresses"
CREATE TABLE Adresses (
ID INT PRIMARY KEY,
Client_ID INT,
Rue VARCHAR(100),
Ville VARCHAR(50),
FOREIGN KEY (Client_ID) REFERENCES Clients(ID)
);

-- Insertion des données dans la table "Adresses"
INSERT INTO Adresses (ID, Client_ID, Rue, Ville)
VALUES
(1, 1, 'Rue de Paris', 'Paris'),
(2, 2, 'Rue de Lyon', 'Lyon'),
(3, 3, 'Rue de Marseille', 'Marseille'),
(4, 5, 'Rue de Lyon', 'Lyon'),
(5, 7, 'Rue de Paris', 'Paris'),
(6, 8, 'Rue de Lyon', 'Lyon'),
(7, 10, 'Rue de Paris', 'Paris');