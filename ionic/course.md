# Installer Ionic CLI

```bash
npm install -g @ionic/cli 
```

Cela va installer l'outil en ligne de commande Ionic de manière globale (sur toute la machine)

## Avant toute chose, c'est quoi Ionic ?

C'est un ToolKit UI pour créer des applications web et mobile avec une seule codebase.

Il vient se greffer aux frameworks et librairies Front classiques (Vue, React et Angular).

Il permet de déployer des PWA (progressive web app) mais aussi des app IOS et Android sans avoir besoin de les coder en natif (avec leur propre langage -> Kotlin & Swift).

Ainsi, une connaissance en HTML CSS et JS permet de faire une application / un site web qui sera disponible partout.

Pour gérer cela, Ionic propose un ensemble d'outil :

- La CLI, qui permet de tout initialiser et de builder l'application sur IOS, Android.
- Une librairie de composants, les composants ION, qui permet d'adapter l'UI aux Iphone et Android, sans avoir a se demander comment cela va fonctionner puisque c'est cette lib de composants qui va gérer les subtilités des deux types de devices.
- Capacitor (remplacant Cordova) qui permet d'utiliser les technologies des smartphones dans l'application que l'on développe, sans devoir coder deux fois pour IOS ou Android. Par exemple, les vibrations (retour haptique), l'utilisation de la caméra ou bien de la mémoire internet du téléphone. C'est surement la partie la plus complexe car on doit intégrer les plugins Capacitor un par un, avec des paramétrages spécifiques.

Ionic se positionne face a React Native par exemple, qui permet de faire des applications avec React. L'avantage de Ionic, c'est qu'il est agnostique (il marche avec tout) autant pour la techno front que pour la techno mobile.

`https://www.youtube.com/watch?v=p3AN3igqiRc&ab_channel=Ionic`

## Créer une app

Pour créer une app, on peut utiliser la commande : `ionic start`| Cela proposera d'utiliser le wizard, pour accompagner la création de l'app.
On peut aussi utiliser des flag sur la commande pour aller plus vite si besoin.

```bash
ionic start myApp tabs --type react
```

Lorsque l'installation est terminée, ce message apparait :

``̀ bash
Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd ./which-one-battle
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config
  --copy
- Explore the Ionic docs for components, tutorials, and more:
  https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features:
  https://ion.link/enterprise-edition

``

# Utiliser Android Studio

Après avoir fait un build de votre application en android avec la commande :

`ionic capacitor build android`

Vous pouvez ouvrir le projet avec Android Studio, sur le dossier Android qui vient d'être crée.

Pour tester l'application (il ne s'agit pas ici de la développer puique c'est le rôle de la codebase IONIC de contenir tout le code et d'être modifié, ce dossier n'est qu'il build de ce qui a été fait avant), nous pouvons utiliser des virtual devices.

## Les virtual devices

Android Studio propose des virtual devices pour tester les applications, c'est a dire qu'il émule un téléphone Android sur lequel on peut installer l'application. On peut tester l'application sur plusieurs versions d'Android, avec plusieurs tailles d'écran.

Pour avoir une pplication qui tourne sur le maximum de devices, on serait tenté de viser la version la plus ancienne d'Android. Cependant, il est conseillé de viser une version plus récente, car les versions les plus anciennes ne sont plus supportées par les mises à jour de sécurité. Et le fait de rendre l'app compatible avec ces versions anciennes peut aussi rendre l'app plus lente pour les versions plus récentes.

Nous allons viser la version 9 d'Android, qui est une version assez récente. 89% des devices tournent sur une version d'Android égale ou supérieure à 9. Désolé pour les 11% restants :D

Sur ma version d'Android Studio, nous pouvons aller sur l'onglet a droite de l'écran avec un texte en hover "Device Manager" et cliquer sur le "+" pour ajouter un device.

Vous avez le choix entre plusieurs devices, a vous de définir votre taille d'écran cible et la version d'Android. Android Studio vous recommande une liste de versions d'Android en fonction de votre machine (a base de x86 ou x86_64 pour les processeurs Intel ou AMD, ou bien ARM pour les processeurs apple).

Nous allons utiliser un Pixel 2 avec Android 9, car la taille d'écran est assez standard. Vous pourriez ajouter un device avec une taille d'écran plus grande pour voir comment l'app se comporte sur un écran plus grand, notamment pour les tablettes (choisissez un appareil qui possède le play store pour avoir les services Google).

Il faut telecharger l'image d'Android 9 pour le device (avec un peu d'attente selon votre connexion), puis cliquer sur "Finish" pour ajouter le device.

Vous pouvez ensuite cliquer sur "Run" pour lancer le device, et vous aurez un écran d'accueil avec un écran de déverrouillage. Vous pouvez déverrouiller l'écran en cliquant sur l'écran et en glissant vers le haut.

Une fois l'écran déverrouillé, vous pouvez voir l'écran d'accueil d'Android. Des mises à jour peuvent être proposées, vous pouvez les accepter ou les refuser. Idéalement, vous devriez accepter les mises à jour pour avoir un device a jour.

On peut éteindre le device, il est prêt a être utilisé pour tester l'application.

## Le SDK Manager

Le SDK Manager est un outil qui permet de gérer les versions d'Android installées sur votre machine. Il permet de télécharger des versions d'Android pour les virtual devices, que ce soit les TV, les wearables, les tablettes ou les smartphones. Cela permet de gérer votre espacioe disque en ne téléchargeant que les versions d'Android dont vous avez besoin.

Si vous vous spécialisez dans les applications pour les wearables, vous n'avez pas besoin de télécharger les versions d'Android pour les smartphones. Vous pouvez donc les désélectionner pour ne pas les télécharger.
Par contre, si vous développez des applications cross-platform, vous aurez besoin de nombreuses versions d'android sur différentes machines pour tester les applications sur différents devices. Cela peut prendre beaucoup de place sur votre disque dur.

## Tester l'application

La première fois que l'on ouvre le projet sur Android Studio, il faut attendre un peu pour que le projet se charge. Cela peut prendre un peu de temps, car cela telecharge du Java et des dépendances.

### Mettre a jour la minSdkVersion

Dans le dossier, on peut voir un dossier Gradle Scripts, qui contient un fichier variables.gradle. Dans ce fichier, on peut voir la version de minSdkVersion, qui est la version minimale d'Android sur laquelle l'application peut tourner. Nous avons défini que nous vision au minimum la version 9 d'Android, donc nous allons changer la version de minSdkVersion a 28.

Attention : rien d'autre ne doit être changé dans ce fichier, car cela pourrait générer des bugs dans l'application, qui n'auront aucun lien avec le code IONIC.

### Lancer l'application

Pour lancer l'application, il faut cliquer sur le bouton "Run" en haut a droite de l'écran. Cela va lancer l'application sur le device que vous avez choisi.

Si vous avez plusieurs devices, vous pouvez choisir le device sur lequel vous voulez lancer l'application. Vous pouvez aussi choisir de lancer l'application sur un émulateur, si vous en avez un d'installé.

L'application va se lancer sur le device, et vous pourrez voir l'application en action. Vous pourrez tester les différentes fonctionnalités de l'application, et voir comment elle se comporte sur le device.

### Voir les logs de capacitor

Vous pouvez voir les logs de capacitor en cliquant sur le bouton "Logcat" en bas de l'écran (avec une petite tête de chat). Cela va afficher tous les logs. Il faut ensuite taper "Capacitor" dans la barre de recherche pour voir les logs de capacitor.

### Lancer l'app sur un device réel

Il faut d'abord mettre le device en mode développeur. Pour cela, il faut aller dans les paramètres du device, puis dans "A propos du téléphone". Il faut ensuite cliquer plusieurs fois sur "Numéro de build" pour activer le mode développeur. Un message va apparaître pour vous dire que le mode développeur est activé: "Vous êtes maintenant un développeur".

On peut ensuite retourner en arrière et aller dans Systeme -> Options pour les développeurs. Il faut activer le débogage USB. Un message va apparaître pour vous dire que le débogage USB est activé.

Il faut ensuite brancher le device a l'ordinateur avec un câble USB. Un message va apparaître sur le device pour vous demander si vous voulez autoriser le débogage USB. Il faut cliquer sur "Autoriser".

Dans "Device Manager" d'Android Studio, vous devriez voir le device apparaître. Vous pouvez cliquer sur "Run" pour lancer l'application sur le device. Il apparait aussi en haut, a coté du bouton "Run", vous pouvez choisir le device sur lequel vous voulez lancer l'application.

L'application va se lancer sur le device, et vous pourrez voir l'application en action. Vous pourrez tester les différentes fonctionnalités de l'application, et voir comment elle se comporte sur le device.

## Si l'on change le code

Si l'on change notre codebase, il faut refaire un build de l'application pour que les changements soient pris en compte.

Pour cela, il faut relancer la commande :

`ionic capacitor build android`

Autrement, on peut aussi utiliser la commande :

` npm run build && npx cap sync android`

C'est surement moins long de tout rebuild avec la première commande, mais je la trouve plus simple a retenir puisque c'est la même commande que pour build l'application la première fois.

# Les splash screens

Pour changer les splash screens, il faut utiliser la lib de Ionic Team : Capacitor Assets

https://github.com/ionic-team/capacitor-assets

Tout est expliqué dans le README :D

# Syllabus

Pour ce cours, nous allons utiliser un projet fil rouge : un jeu de "Which one battle". Le but est de choisir entre deux options, et de voir le résultat en fonction de notre choix.
Nous ne developperons pas le backend, mais nous utiliserons un backend déjà existant pour récupérer les données. Le code de ce backend est disponible sur Github, et nous pourrons l'utiliser pour notre application. Il pourra être récupéré pour ceux qui veulent continuer le projet après le cours.

## Structure de l'app :

- Une page d'accueil avec les derniers battles mis en ligne
- Une page de création de battle
- Une page de profil (avec le système de login et d'authentification)

Bonus si le temps le permet :

- Une page avec scroll infini pour voir tous les battles auquel l'utilisateur n'a pas encore participé

## Le développement mobile

- Les différentes technologies mobiles
- Les avantages et inconvénients du développement mobile
- L'avantage et l'inconvénient de Ionic par rapport aux autres technologies mobiles

## Ionic et React

- Rappel des bases de React :
  - Les composants
  - Le styling
  - Les props
  - Les states
  - Les hooks
  - Les contextes
  - Les custom hooks
  - UseMemo et UseCallback

## Installer Ionic CLI

- Installer Ionic CLI
- Créer une application avec Ionic CLI
- Lancer l'application sur un device virtuel
- Lancer l'application sur un device réel

## Les bases d'Ionic

- Les composants ION :

  - Les boutons
  - Les listes
  - Les cards
  - Les formulaires
  - Etc.

- Le routing

## Les bases de Capacitor

- Les plugins Capacitor :
  - Utilisation des plugins : cookies, haptics, etc.
  - Intégration avec React.
  - Build de l'application avec Capacitor
