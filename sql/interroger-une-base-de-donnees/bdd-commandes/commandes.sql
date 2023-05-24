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
    Nom VARCHAR(50)
);

-- Insertion des données dans la table "Produits"
INSERT INTO Produits (ID, Nom)
VALUES
    (1, 'Téléphone'),
    (2, 'Ordinateur'),
    (3, 'Télévision');

-- Création de la table de liaison "Commandes_Produits"
CREATE TABLE Commandes_Produits (
    ID INT PRIMARY KEY,
    Commande_ID INT,
    Produit_ID INT,
    FOREIGN KEY (Commande_ID) REFERENCES Commandes(ID),
    FOREIGN KEY (Produit_ID) REFERENCES Produits(ID)
);

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
    Rue VARCHAR(
