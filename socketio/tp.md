L’objectif est de construire un jeu où :

* **2 joueurs** jouent sur la même partie
* **le serveur décide de l’état officiel**
* **les clients affichent ce que le serveur envoie**
* le jeu gère :

  * les cartes
  * les tours
  * les paires
  * les scores
  * la fin de partie

---

# Fiche méthode — Réaliser un Memory multijoueur avec Express + Socket.IO

## 1. Comprendre ce que l’on veut construire

Avant de coder, il faut définir le fonctionnement du jeu.

Un **memory multijoueur** n’est pas un simple jeu front.
Ici, plusieurs navigateurs doivent voir **la même partie**, au même moment.

Cela implique une règle essentielle :

> **le serveur doit être la source de vérité**

Autrement dit :

* le **front** envoie les actions du joueur
* le **back** vérifie si l’action est autorisée
* le **back** met à jour la partie
* le **back** renvoie le nouvel état à tout le monde

Le front ne doit pas décider seul :

* si une paire est correcte
* à qui est le tour
* si une carte peut être retournée
* si la partie est terminée

Sinon, les clients peuvent se désynchroniser.

---

## 2. Définir le périmètre minimum du projet

Avant de partir dans trop de fonctionnalités, il faut cadrer un **MVP**.

### Version minimale conseillée

Le jeu doit permettre :

* d’ouvrir la page dans deux navigateurs ou deux onglets
* d’attribuer un rôle :

  * joueur 1
  * joueur 2
  * spectateur si plus de 2 connexions
* d’afficher une grille de cartes
* de cliquer sur une carte pour la retourner
* de comparer deux cartes
* de donner le point si la paire est correcte
* de changer de joueur si la paire est incorrecte
* d’annoncer la fin de la partie
* de recommencer

C’est déjà largement suffisant pour un vrai projet pédagogique.

---

## 3. Choisir l’architecture

Ici, l’architecture est simple.

## Côté serveur

Le serveur Node.js avec Express + Socket.IO sert à :

* afficher le front
* gérer les connexions des joueurs
* stocker l’état de la partie
* recevoir les actions
* valider les règles
* diffuser les mises à jour

## Côté client

Le client sert à :

* afficher l’interface
* écouter les clics
* envoyer les actions au serveur
* réafficher l’état du jeu reçu

---

## 4. Préparer le projet

Créer un dossier projet, puis une structure simple.

### Arborescence

```txt
memory-socketio/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

### Dépendances

Il faut installer :

* **express** pour servir les fichiers
* **socket.io** pour la communication temps réel

### Commandes

```bash
npm init -y
npm install express socket.io
```

---

## 5. Commencer par le serveur HTTP

Avant de penser au temps réel, il faut déjà faire fonctionner le site.

Le rôle d’Express ici est simplement de servir les fichiers statiques du front :

* `index.html`
* `style.css`
* `app.js`

Cette étape est importante car elle permet de vérifier que :

* le projet démarre
* la page s’affiche
* le front se charge correctement

Tant que ça ne marche pas, inutile d’aller plus loin.

---

## 6. Ajouter Socket.IO

Une fois Express fonctionnel, on branche Socket.IO sur le serveur HTTP.

L’idée est que chaque navigateur ouvre une connexion persistante avec le serveur.
Cette connexion permettra :

* au client d’envoyer un clic
* au serveur de répondre immédiatement
* au serveur d’envoyer les mises à jour à tous les joueurs

C’est ce qui rend le jeu multijoueur.

---

## 7. Définir clairement l’état du jeu

Avant même d’écrire les événements Socket.IO, il faut réfléchir au **state**.

Un bon projet temps réel commence presque toujours par cette question :

> Quelles données décrivent complètement ma partie ?

Pour un memory, il faut au minimum :

### Les cartes

Chaque carte doit avoir :

* un identifiant
* une valeur
* un état `visible`
* un état `matched`

Exemple conceptuel :

```js
{
  id: 3,
  value: "A",
  visible: false,
  matched: false
}
```

### Les joueurs

Il faut stocker :

* leur identifiant
* leur score
* leur état de connexion

### Le tour actuel

Il faut savoir à qui c’est de jouer.

### Les cartes temporairement sélectionnées

Quand un joueur retourne une carte, puis une deuxième, le serveur doit pouvoir comparer les deux.

### Un verrou

Il faut prévoir un booléen du type `lock` pour éviter qu’un joueur clique pendant qu’on attend la comparaison ou l’animation.

### Le statut global

Par exemple :

* `waiting`
* `playing`
* `finished`

---

## 8. Construire le paquet de cartes

Le memory repose sur une logique simple :

* on choisit des symboles
* on les duplique
* on mélange le tout

Exemple :

* valeurs de base : `A B C D E F`
* on les double : `A B C D E F A B C D E F`
* on mélange
* on transforme en objets cartes

Cette étape est importante car elle isole déjà une logique métier claire :

* création de la partie
* génération du plateau

C’est une bonne habitude de faire une fonction du type :

* `createDeck()`
* `createNewGame()`

---

## 9. Gérer la connexion des joueurs

Quand un client se connecte, le serveur doit décider de son rôle.

La stratégie la plus simple :

* premier connecté = `player1`
* deuxième connecté = `player2`
* les suivants = `spectator`

Pourquoi faire ça ?

Parce qu’il faut distinguer :

* ceux qui ont le droit d’agir
* ceux qui observent seulement

Le serveur doit ensuite envoyer ce rôle au client.
Le front pourra alors afficher :

* “vous êtes joueur 1”
* “vous êtes joueur 2”
* “vous êtes spectateur”

---

## 10. Démarrer la partie seulement quand les deux joueurs sont là

Le jeu ne doit pas commencer tant qu’il manque un joueur.

Il faut donc une logique du type :

* si `player1` connecté **et** `player2` connecté → statut `playing`
* sinon → statut `waiting`

C’est simple, mais très utile.

Cela évite :

* qu’un joueur joue seul par erreur
* que des clics soient acceptés trop tôt
* que l’état de la partie soit incohérent

---

## 11. Définir les événements réseau

Un projet Socket.IO se construit autour d’événements nommés.

Pour ce jeu, il faut rester simple.

### Événements envoyés par le client

Par exemple :

* `flip_card`
* `restart`

### Événements envoyés par le serveur

Par exemple :

* `role`
* `game_state`
* `info_message`

Il faut que chaque événement ait une responsabilité claire.

### Exemple de logique

* le client clique sur une carte
* il envoie `flip_card` avec l’identifiant de la carte
* le serveur traite
* le serveur renvoie `game_state`

---

## 12. Programmer la logique métier côté serveur

C’est le cœur du projet.

Quand le serveur reçoit `flip_card`, il doit vérifier plusieurs choses **dans l’ordre**.

## Vérification 1 : la partie est-elle en cours ?

Si le statut n’est pas `playing`, on ignore.

## Vérification 2 : le client est-il un vrai joueur ?

Un spectateur ne doit pas pouvoir jouer.

## Vérification 3 : est-ce bien son tour ?

Si ce n’est pas son tour, on ignore.

## Vérification 4 : la partie est-elle verrouillée ?

Si deux cartes sont déjà en train d’être comparées, on ignore.

## Vérification 5 : la carte est-elle valide ?

Il faut refuser si :

* la carte n’existe pas
* elle est déjà visible
* elle est déjà trouvée

Ces vérifications sont essentielles.
Sans elles, le jeu sera fragile.

---

## 13. Gérer le premier clic

Quand toutes les vérifications sont passées :

* le serveur met la carte en `visible: true`
* il l’ajoute dans `selectedCards`
* il diffuse le nouvel état

Si une seule carte est sélectionnée, on s’arrête là.

À ce stade, rien n’est encore comparé.

---

## 14. Gérer le deuxième clic

Quand la deuxième carte est choisie :

* le serveur la rend visible
* il l’ajoute à `selectedCards`
* il diffuse l’état
* puis il compare les deux cartes

Il faut alors distinguer deux cas.

---

## 15. Cas 1 : les deux cartes sont identiques

Si les valeurs sont identiques :

* les deux cartes passent en `matched: true`
* le score du joueur augmente
* `selectedCards` est vidé
* le verrou est retiré

Ensuite :

* soit le joueur rejoue
* soit vous choisissez de changer de joueur malgré la réussite

Dans un memory classique, on laisse rejouer le joueur qui trouve une paire.

Enfin, on vérifie si toutes les cartes sont trouvées.
Si oui, on passe le statut à `finished`.

---

## 16. Cas 2 : les deux cartes sont différentes

Si les deux cartes sont différentes :

* on verrouille temporairement la partie
* on laisse les cartes visibles un court instant
* après un délai, on les recache
* on vide `selectedCards`
* on change de joueur
* on enlève le verrou
* on diffuse le nouvel état

Le délai est utile pour que les joueurs aient le temps de voir les cartes.

Exemple : 1 seconde ou 1,2 seconde.

---

## 17. Toujours diffuser l’état après une modification

Une règle simple :

> dès que l’état du jeu change, le serveur renvoie le nouvel état

Cela permet à tous les clients d’avoir la même vue.

Exemples :

* une carte est retournée
* une paire est validée
* une paire est masquée
* le tour change
* la partie se termine
* un joueur se connecte ou se déconnecte

---

## 18. Faire un état public propre

Le serveur connaît la vérité complète, mais il n’est pas obligé d’envoyer toutes les données telles quelles.

Bonne pratique : construire un **état public**.

Par exemple :

* pour une carte cachée, le serveur peut envoyer `value: null`
* pour une carte visible ou trouvée, il peut envoyer sa vraie valeur

Ainsi, le client n’a jamais connaissance de toutes les cartes à l’avance.

C’est beaucoup plus sain.

---

## 19. Construire le front progressivement

Il ne faut pas essayer de faire une belle interface trop tôt.
Commencer par quelque chose de simple.

### Étape 1

Afficher :

* le rôle
* le statut
* le joueur courant
* les scores

### Étape 2

Afficher la grille

### Étape 3

Créer les boutons cartes

### Étape 4

Ajouter le clic qui envoie `flip_card`

### Étape 5

Redessiner la grille à chaque `game_state`

Le front doit devenir une simple machine à afficher l’état reçu.

---

## 20. Décider quand un clic est autorisé côté front

Même si le serveur reste le vrai arbitre, il est utile de filtrer côté front pour le confort utilisateur.

Par exemple, côté client, on peut désactiver les cartes si :

* la partie n’est pas en cours
* le joueur est spectateur
* ce n’est pas son tour

Attention :
ce filtrage est utile pour l’UX, mais **ne remplace jamais la validation serveur**.

---

## 21. Gérer la déconnexion

Quand un joueur quitte la partie :

* le serveur supprime son rôle
* il met à jour l’état de connexion
* il remet le statut à `waiting` si nécessaire
* il diffuse le nouvel état

C’est important pour que la partie ne continue pas “dans le vide”.

---

## 22. Ajouter le bouton recommencer

Le bouton “recommencer” doit :

* envoyer un événement `restart`
* être traité côté serveur
* recréer un nouveau paquet
* remettre les scores à zéro
* remettre le tour au premier joueur
* relancer une partie propre

Là encore, c’est le serveur qui décide vraiment du reset.

---

## 23. Tester étape par étape

Il ne faut surtout pas coder tout d’un bloc.

Ordre de test recommandé :

### Test 1

Le serveur Express démarre.

### Test 2

La page s’affiche.

### Test 3

Socket.IO se connecte.

### Test 4

Le rôle s’affiche côté client.

### Test 5

Le serveur envoie un `game_state`.

### Test 6

La grille s’affiche.

### Test 7

Un clic envoie bien un événement.

### Test 8

Le serveur retourne une carte.

### Test 9

Deux cartes identiques donnent un point.

### Test 10

Deux cartes différentes se recachent.

### Test 11

Le tour change correctement.

### Test 12

La partie se termine bien.

Cette progression évite les bugs flous.

---

## 24. Les erreurs fréquentes à éviter

## Erreur 1 : faire la logique de jeu côté front

C’est le piège principal.

Si le front décide des paires ou des scores, tu casses le modèle multijoueur.

## Erreur 2 : ne pas verrouiller la partie pendant la comparaison

Sans verrou, un joueur peut cliquer trop vite et casser l’état.

## Erreur 3 : envoyer trop peu d’informations

Le client doit recevoir assez d’informations pour se redessiner complètement.

## Erreur 4 : ne pas vérifier le tour côté serveur

Même si le front bloque, le serveur doit revérifier.

## Erreur 5 : ne pas penser à la déconnexion

Le multijoueur doit survivre aux cas réels.

---

## 25. Ce qu’il faut retenir comme logique générale

Pour ce projet, la méthode correcte est :

### Le client

* capte l’action utilisateur
* envoie l’intention
* affiche l’état reçu

### Le serveur

* possède l’état officiel
* valide les actions
* applique les règles
* diffuse la nouvelle version de la partie

C’est exactement le bon modèle pour un jeu tour par tour en temps réel.

---

# Plan de réalisation conseillé

## Étape 1

Créer le projet et installer Express + Socket.IO.

## Étape 2

Servir le front avec Express.

## Étape 3

Mettre en place la connexion Socket.IO.

## Étape 4

Créer la structure `gameState`.

## Étape 5

Créer le paquet de cartes mélangées.

## Étape 6

Attribuer les rôles des connexions.

## Étape 7

Envoyer l’état initial aux clients.

## Étape 8

Gérer le clic sur une carte.

## Étape 9

Comparer deux cartes.

## Étape 10

Gérer score, tour et fin de partie.

## Étape 11

Ajouter le bouton recommencer.

## Étape 12

Améliorer l’interface.

---

# Version très courte à mémoriser

Pour réussir ce jeu, il faut penser comme ça :

1. **Je définis l’état complet de ma partie**
2. **Je stocke cet état sur le serveur**
3. **Le client envoie seulement ses actions**
4. **Le serveur décide si l’action est valide**
5. **Le serveur met à jour l’état**
6. **Le serveur envoie le nouvel état à tous**
7. **Le front réaffiche tout**
