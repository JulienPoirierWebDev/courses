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

```dockerfile

FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.mjs"]

```

-   `FROM node:14` : On utilise l'image officielle de Node.js version 14.

-   `WORKDIR /app` : On définit le répertoire de travail dans lequel on va copier les fichiers du projet, sur l'image Docker.

-   `COPY package.json .` : On copie le fichier package.json dans le répertoire de travail (le `.` signifie le répertoire de travail).

-   `RUN npm install` : On installe les dépendances du projet.

-   `COPY . .` : On copie tous les fichiers du projet dans le répertoire de travail.

-   `EXPOSE 3000` : On expose le port 3000 pour pouvoir accéder à l'application depuis l'extérieur du conteneur. Cela permet de faire le lien entre le port du conteneur et le port de la machine hôte.

-   `CMD ["node", "index.mjs"]` : On définit la commande à exécuter pour lancer l'application.

Dans un terminal, à la racine du projet, on construit l'image Docker avec la commande :
`docker build .`
Cela va créer une image Docker à partir du Dockerfile. On peut vérifier que l'image a bien été créée avec la commande :
`docker images`
Cette image va avoir un ID unique qui va permettre de lancer un conteneur à partir de cette image.

Pour lancer un conteneur à partir de l'image Docker, on utilise la commande :
`docker run -p 3000:3000 <ID de l'image>`
Ici, le flag `-p` permet de faire le lien entre le port du conteneur et le port de la machine hôte : p est pour port. Par defaut, il n'y a aucune liaison entre le port du conteneur et le port de la machine hôte, les deux sont isolés.

Pour voir les conteneurs qui tournent, on utilise la commande :
`docker ps`
`ps` pour processus status.

Pour voir les logs d'un conteneur, on utilise la commande :
`docker logs <ID du conteneur>`

Pour arrêter un conteneur, on utilise la commande :
`docker stop <ID du conteneur>`
On peut aussi utiliser le nom du conteneur :
`docker stop <nom du conteneur>`

Pour supprimer un conteneur, on utilise la commande :
`docker rm <ID du conteneur>`
`rm` pour remove.

Pour supprimer une image, on utilise la commande :
`docker rmi <ID de l'image>`
`rmi` pour remove image.


Avec ce premier exemple, on a vu comment créer une image Docker à partir d'un Dockerfile et lancer un conteneur à partir de cette image. On a aussi vu comment gérer les conteneurs et les images avec les commandes Docker.

