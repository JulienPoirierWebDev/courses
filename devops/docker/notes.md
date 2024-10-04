# Intro

Le but de ce cours est de se familiariser avec Docker, un outil qui permet de créer, de déployer et de gérer des conteneurs.

# Le contexte d'apparition de Docker

## Les machines virtuelles

Les machines virtuelles permettent de faire tourner plusieurs systèmes d'exploitation sur une seule machine physique. Chaque machine virtuelle a son propre système d'exploitation, ses propres ressources et son propre noyau.

Les machines virtuelles sont lourdes et consomment beaucoup de ressources.

## Les conteneurs

Les conteneurs sont des environnements isolés qui partagent le même noyau et les mêmes ressources que la machine hôte. Ils sont plus légers et plus rapides que les machines virtuelles.

# Les concepts de base de Docker

## Les images

Une image Docker est un modèle de conteneur. Elle contient un système d'exploitation, des bibliothèques, des dépendances, des fichiers de configuration, etc.

## Les conteneurs

Un conteneur Docker est une instance d'une image Docker. Il contient un système d'exploitation, des bibliothèques, des dépendances, des fichiers de configuration, etc.

## Les registres

Un registre Docker est un service cloud qui permet de stocker et de partager des images Docker. Le registre Docker le plus connu est Docker Hub.

## Installation de Docker

Liste des elements :

-   Docker Engine
    C'est le coeur de Docker, il permet de créer et de gérer les conteneurs.
-   Docker Desktop & CLI
    Docker Desktop est une application qui fournit une interface graphique pour Docker Engine. Docker CLI est une interface en ligne de commande pour Docker Engine.
-   Docker Hub
    C'est un service cloud qui permet de partager des conteneurs et des images Docker.
-   Docker Compose
    C'est un outil qui permet de définir et de gérer des applications multi-conteneurs.

## Etape 1 - Projet Node.js & Express

Voir le dossier "etape1" pour le projet Node.js & Express.

Pour lancer ce projet, il faudrait avoir Node.js installé sur votre machine et lancer la commande :
`node index.mjs` après avoir installé les dépendances avec la commande : `npm install`.

L'idée avec Docker est de créer une image Docker pour ce projet et de lancer un conteneur Docker à partir de cette image.

### Ajout de Dockerfile
