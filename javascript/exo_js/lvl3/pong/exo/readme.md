# Titre de l'exercice : Création d'un mini-jeu Pong avec la balise Canvas

Objectif : Dans cet exercice, vous allez créer un mini-jeu Pong en utilisant la balise <canvas> pour dessiner les éléments du jeu à l'écran. Vous apprendrez à manipuler la balise <canvas> et son contexte 2D pour créer des animations et gérer les interactions avec l'utilisateur.

## Etape 1

Créez un fichier HTML et ajoutez une structure de base avec les balises <html>, <head> et <body>.

Dans le <body>, ajoutez une balise <canvas> avec un identifiant pour pouvoir la sélectionner facilement en JavaScript.

## Etape 2 

Créez un fichier JavaScript pour gérer la logique du jeu.

Sélectionnez l'élément <canvas> en utilisant getElementById ou querySelector et stockez-le dans une variable.

Obtenez le contexte 2D du canvas en utilisant la méthode getContext('2d') et stockez-le dans une variable.

Créez une fonction pour gameLoop() qui sera appelée à chaque nouvelle image.
Cette fonction appelera d'autres fonctions pour animer la balle et gérer les interactions avec l'utilisateur.
Cette fonction devra également appeler requestAnimationFrame() pour appeler la fonction d'animation à chaque nouvelle image.
Cela permettra d'animer la balle de manière fluide et en synchronisation avec le rafraîchissement de l'écran.

## Etape 3

Dessinez les éléments du jeu (raquettes et balle) en utilisant les méthodes de dessin du contexte 2D, telles que fillRect() pour les raquettes et arc() pour la balle. Vous pouvez également utiliser fillStyle pour définir la couleur de ces éléments.

## Etape 4

Ajoutez une fonction pour animer la balle. Cette fonction doit mettre à jour la position de la balle, détecter les collisions avec les raquettes et les bords du canvas, et inverser la direction de la balle si nécessaire.


## Etape 5

Ajoutez des écouteurs d'événements pour détecter les événements de type "keydown" et "keyup" sur l'objet window ou document. Ces fonctions seront déclenchées lorsque l'utilisateur appuie ou relâche une touche du clavier.

Dans les fonctions de gestion des événements "keydown" et "keyup", vérifiez quelles touches ont été enfoncées ou relâchées (par exemple, les touches 'W', 'S', 'Up', et 'Down' pour contrôler les raquettes) et déplacez les raquettes en conséquence.

## Etape 6

Assurez-vous que les raquettes ne sortent pas du canvas en limitant leur déplacement à la hauteur du canvas.


## Etape 7
Testez votre mini-jeu Pong pour vérifier que les raquettes et la balle se déplacent correctement et que les collisions sont détectées et gérées correctement.

## Bonus 
- Ajoutez un système de score pour comptabiliser les points de chaque joueur. Incrémentez le score lorsqu'un joueur marque un point et affichez les scores à l'écran en utilisant le contexte 2D (méthodes fillText() et font).

- Implémentez un système de démarrage et de pause pour le jeu. Par exemple, ajoutez un bouton "Démarrer" et un bouton "Pause" pour permettre aux utilisateurs de contrôler le déroulement du jeu.

- Ajoutez des effets sonores lorsqu'une collision se produit entre la balle et une raquette ou lorsque l'un des joueurs marque un point.

- Améliorez l'apparence du jeu en ajoutant des dégradés de couleurs, des ombres et des formes plus complexes pour les éléments visuels.

- Ajoutez une difficulté croissante en augmentant progressivement la vitesse de la balle et/ou des raquettes à mesure que le jeu progresse.
