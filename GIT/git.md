Le contrôle de version est une méthode avant d'être un outil. 
Il faut penser en version. 
Avant, les programmes étaient des cartes physiques percées de trous. On ne pouvait pas garder l'état antérieur du code. 
Maintenant, c'est possible. Git permet de garder toutes les versions successives d'un dossier. 
Une pratique régulière qui permet de générer "un système de confiance" David ALLEN.

Git est un logiciel de versioning créé en 2005 par Linus Torvalds, le créateur de Linux, justement pour répondre aux besoins du projet LINUX, comprenant des milliers de contributeurs. 
Il faut définir des règles de fonctionnement au dela de l'outil, pour que chacun utilise l'outil de la même manière.

Git permet à différentes versions d’un même fichier de coexister. Les développeurs travaillant avec Git ont accès à l’historique des modifications pour l’intégralité du projet et peuvent ainsi savoir quels changements ont été fait par rapport à leur version des fichiers, qui a fait ces changements, etc.

Méta données

## Les deux modèles des logiciels de gestion de version : modèle centralisé vs modèle décentralisé

Le modèle distribué a été popularisé par Git et présente différents avantages notables par rapport au modèle centralisé :
Simplicité / flexibilité du travail : Comme chaque utilisateur peut héberger le code du projet, on n’a plus besoin d’être constamment connecté à un serveur central et on peut donc travailler en ligne sur sa propre machine ;
Sécurité : Comme chaque utilisateur possède le code complet d’un projet, on peut utiliser la copie du projet d’un utilisateur comme back-up en cas de corruption du serveur central. (modifié)

Collaboration distribuée : chacun a une version de travail unique, qu'il modifie et envoi.

DONC : Git : copie intégrale du projet sur la machine du dev, sur le serveur et sur les machines de tous les devs (plus ou moins synchronisés).

GitHub est un service en ligne qui permet d’héberger des dépôts ou repo Git. C’est le plus grand hébergeur de dépôts Git du monde.

A titre d’information, les commandes (UNIX) de base à connaitre sont les suivantes :
La commande pwd affiche le nom et chemin du répertoire courant. Elle permet de savoir où on se situe sur notre machine ;
La commande ls affiche la liste des fichiers et répertories dans un répertoire ;
La commande cd permet de changer de répertoire, c’est-à-dire de se déplacer d’un répertoire à un autre ;
La commande mkdir permet de créer un nouveau répertoire (ou “dossier”) ;
La commande touch permet de créer un fichier ;
La commande mv permet de renommer ou de déplacer des fichiers.

--

## Configurer GIT

On va donc taper les commandes suivantes : git config --global user.name "Pierre Giraud" et git config --global user.email pierre.giraud@edhec.com à la suite pour renseigner un nom et une adresse email.

Pour vous assurer que vos informations ont bien été enregistrées, vous pouvez taper git config user.name et git config user.email. Les informations entrées devraient être renvoyées

--

## Penser en SNAPSHOT, en état de projet et état de fichier.

Git pense les données à la manière d’un flux d’instantanés ou “snapshots”. Grosso modo, à chaque fois qu’on va valider ou enregistrer l’état d’un projet dans Git, il va prendre un instantané du contenu de l’espace de travail à ce moment et va enregistrer une référence à cet instantané pour qu’on puisse y accéder par la suite.
Un fichier possède l’état “suivi” si il appartenait au dernier instantané capturé par Git, c’est-à-dire si il est enregistré en base. Tout fichier qui n’appartenait pas au dernier instantané et qui n’a pas été indexé est “non suivi”. (modifié)

Ensuite, chaque fichier suivi peut avoir l’un de ces trois états :
Modifié (“modified”) ;
Indexé (“staged”) ;
Validé (“committed”).

On dit qu’on “indexe” un fichier lorsqu’on indique à Git que le fichier modifié ou que le nouveau fichier doit faire partie du prochain instantané dans sa version actuelle.
Enfin, lorsqu’on demande à Git de prendre l’instantané, c’est-à-dire lorsqu’on lui demande d’enregistrer en base l’état du projet actuel (c’est-à-dire l’ensemble des fichiers indexés et non modifiés), les fichiers faisant partie de l’instantané sont à nouveau considérés comme “validés” et le cycle peut recommencer.

---

Tout projet Git est composé de trois sections : le répertoire de travail (working tree), la zone d’index (staging area) et le répertoire Git (repository).
Le répertoire de travail ou “working tree” correspond à une extraction unique (“checkout”) d’une version du projet. Les fichiers sont extraits de la base de données compressée située dans le répertoire Git et sont placés sur le disque afin qu’on puisse les utiliser ou les modifier.
La zone d’index ou “staging area” correspond à un simple fichier, généralement situé dans le répertoire Git, qui stocke les informations concernant ce qui fera partie du prochain instantané ou du prochain “commit”.
Le répertoire Git est l’endroit où Git stocke les méta-données et la base de données des objets de votre projet. C’est la partie principale ou le coeur de Git.

![Image](https://media.discordapp.net/attachments/1070449884752269332/1070453392306090114/image0.png?width=500&height=206)

![Image](https://media.discordapp.net/attachments/1070449884752269332/1070453439198404669/image0.png?width=500&height=276)

## Créer depot git

Lorsqu’on utilise git init, Git nous renvoie un message en nous informant que le dépôt Git a bien été initialisé et qu’il est vide. C’est tout à fait normal puisque nous n’avons encore versionné aucun fichier (nous n’avons ajouté aucun fichier du répertoire en base).

On peut utiliser ici la commande git status pour déterminer l’état des fichiers de notre répertoire. Cette commande est extrêmement utile et c’est une de celles que j’utilise le plus personnellement

## Ajouter des fichiers avec "git add"

Pour indexer des fichiers, on utilise la commande git add. On peut lui passer un nom de fichier pour indexer le fichier en question, le nom d’un répertoire pour indexer tous les fichiers du répertoire d’un coup ou encore un “fileglob” pour ajouter tous les fichiers correspondant au schéma fourni.

Les fileglobs utilisent les extension de chemin de fichier. Grosso-modo, cela signifie que certains caractères comme * et ? vont posséder une signification spéciale et nous permettre de créer des schémas de correspondances. Le caractère * par exemple correspond à n’importe quel caractère. Lorsque j’écris git add *.txt, je demande finalement à Git d’ajouter à l’index tous les fichiers du projet qui possèdent une extension .txt, quelque soit leur nom.

On nous informe ici qu’on se situe sur la branche master, qu’il s’agit du premier commit (root-commit) et on nous donne sa somme de contrôle (4ed866e) qui permet de l’identifier de manière unique. On nous dit également que deux fichiers ont été modifiés et que 0 lignes ont été ajoutées ou supprimées dans ces fichiers

## Clone un repository local avec git clone

J’utilise ensuite la commande git clone en lui passant d’abord le chemin complet du projet à cloner (qui correspond à son nom dans notre cas puisque le répertoire du projet est également sur le bureau) puis le chemin complet du clone qui doit être créé. On va choisir de créer le clone sur le bureau par simplicité et on va donc simplement passer un nom à nouveau. Appelons le clone “projet-git-2” par exemple comme ceci :
git clone projet local

---

## Quand faire un git add ?

J’attire ici votre attention sur un point important : le commit (la validation / l’enregistrement en base de données) d’un fichier se basera sur l’état de ce fichier au moment du git add.

Cela signifie que si vous effectuer une commande git add sur un fichier puis modifiez à nouveau le fichier puis effectuez un git commit, c’est le fichier dans son état au moment du dernier git add qui sera validé et les dernières modifications ne seront donc pas enregistrées dans le dépôt Git.

Pour mettre en un coup les fichiers modifiés et déjà sous suivi dans la zone d’index puis pour les valider, vous pouvez également utiliser git commit avec une option -a comme ceci : git commit -a. Cela vous dispense d’avoir à taper git add.



## git add -all || git add -A

--

## Supprimer un fichier et l'exclure du suivi

Pour supprimer un fichier et l’exclure du suivi de version, nous allons utiliser la commande git rm (et non pas simplement une commande Bash rm).

Pour simplement exclure un fichier du suivi Git mais le conserver dans le projet, on va utiliser la même commande git rm mais avec cette fois-ci une option --cached.

Ici, le fichier a bien été exclu du suivi Git mais existe toujours dans notre projet. On va ensuite pouvoir modifier ce fichier (lui ajouter du texte par exemple) comme n’importe quel fichier et Git ne se préoccupera pas des modifications.

--

## Retirer un fichier de la zone d'index (ne pas le commiter)

Le contenu de la zone d’index est ce qui sera proposé lors du prochain commit. Imaginons qu’on ait ajouté un fichier à la zone d’index par erreur. Pour retirer un fichier de l’index, on peut utiliser git reset HEAD nom-du-fichier. (modifié)

-

## Ignorer des fichers de manière globale.

Lorsqu’on dispose d’un projet et qu’on souhaite utiliser Git pour effectuer un suivi de version, il est courant qu’on souhaite exclure certains fichiers du suivi de version comme certains fichiers générés automatiquement, des fichiers de configuration, des fichiers sensibles, etc.

On peut informer Git des fichiers qu’on ne souhaite pas indexer en créant un fichier .gitignore et en ajoutant les différents fichiers qu’on souhaite ignorer. Notez qu’on peut également mentionner des schémas de noms pour exclure tous les fichiers correspondant à ce schéma et qu’on peut même exclure le contenu entier d’un répertoire en écrivant le chemin du répertoire suivi d’un slash.

-

## Renommer un fichier via git

On peut également renommer un fichier de notre projet depuis Git en utilisant cette fois-ci une commande git mv ancien-nom-fichier nouveau-nom-fichier.
On peut par exemple renommer notre fichier “README.txt” en “LISEZMOI.txt” de la manière suivante :
git mv pour renommage de fichier
Le fichier a bien été renommé dans notre répertoire et le changement est prêt à être validé dans le prochain commit.

---

## Renommer un fichier sans passer par git

Git reconnait les fichiers par leur nom : voir le cas où l'on renomme un fichier : git considère qu'on le supprime et qu'un nouveau arrive. Le contenu importe peu, seul le nom est important. 

Pour que le fichier soit considéré comme modifier comme nous le souhaitons, il faut ajouter la suppression (sic) au prochain commit avec la commande git rm

## Consulter l'historique des modifications.

La manière la plus simple de consulter l’historique des modifications Git est d’utiliser la commande git log. Cette commande affiche la liste des commits réalisés du plus récent au plus ancien. Par défaut, chaque commit est affiché avec sa somme de contrôle SHA-1, le nom et l’e-mail de l’auteur, la date et le message du commit.

--
La commande git log supporte également de nombreuses options. Certaines vont pouvoir être très utiles comme par exemple les options -p, --pretty, --since ou --author.


Utiliser git log -p permet d’afficher explicitement les différences introduites entre chaque validation.

L’option --pretty permet, avec sa valeur oneline, d’afficher chaque commit sur une seule ligne ce qui peut faciliter la lecture dans le cas où de nombreux commits ont été réalisés.
commande git log avec option pretty
L’option --since permet de n’afficher que les modifications depuis une certaine date (on peut lui fournir différents formats de date comme 2.weeks ou 2019-10-10 par exemple).
L’option --author permet de n’afficher que les commits d’un auteur en particulier.

--

## Ecraser le dernier commit en cas d'oubli de fichier :)

La façon la plus simple d’écraser un commit est d’utiliser la commande git commit avec l’option --amend. Cela va pousser un nouveau commit qui va remplacer le précédent en l’écrasant.
Par exemple, dans notre projet, on peut imaginer qu’on souhaite commit les changements effectués dans la leçon précédente sur le fichier README.txt et qu’on souhaite également réintégrer le fichier fichier2.txt dans l’index.

Ici, on s’aperçoit après coup qu’on a oublié de réintégrer le fichier fichier2.txt à l’index. On peut utiliser une commande git add puis git commit --amend pour remplacer le commit précédent :

--

## Revenir a l'état antérieur (annuler les modifs), celui du dernier commit.

Parfois, certaines modifications ne vont pas apporter les comportements espérés et on voudra revenir à l’état du fichier du dernier instantané Git (c’est-à-dire au dernier état enregistré).
On va pouvoir faire cela avec la commande générale git checkout -- nom-du-fichier ou la nouvelle commande spécialisée git restore

-----

La branche par défaut dans Git s’appelle master. Cette branche master va se déplacer automatiquement à chaque nouveau commit pour pointer sur le dernier commit effectué tant qu’on reste sur cette branche.

## Les branches


La branche par défaut dans Git s’appelle `master`. Cette branche `master` va se déplacer automatiquement à chaque nouveau commit pour pointer sur le dernier commit effectué tant qu’on reste sur cette branche.

Notez que la branche `master` n’est pas une branche spéciale pour Git : elle est traitée de la même façon que les autres branches. L’idée est que lorsqu’on tape une commande `git init`, une branche est automatiquement créée et que le nom donné à cette branche par Git par défaut est “master”. On pourrait très bien la renommer ensuite mais ça ne présente généralement aucun intérêt.





## Creer une nouvelle branche

Pour créer une nouvelle branche, on utilise la commande `git branch nom-de-la-branche`. Cette syntaxe va créer un nouveau pointeur vers le dernier commit effectué (le commit courant). A ce stade, vous allez donc avoir deux branches (deux pointeurs) vers le dernier commit : la branche master et la branche tout juste créée.

![Illustration branche git](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-branch-illustration.jpg)



Pour déterminer quel pointeur vous utilisez, c’est-à-dire sur quelle branche vous vous trouvez, Git utilise un autre pointeur spécial appelé `HEAD`. `HEAD` pointe sur la branche master par défaut. Notez que la commande `git branch` permet de créer une nouvelle branche mais ne déplace pas `HEAD`.

Nous allons donc devoir déplacer explicitement `HEAD` pour indiquer à Git qu’on souhaite basculer sur une autre branche. On utilise pour cela la commande `git checkout` suivi du nom de la branche sur laquelle on souhaite basculer.



![Exemple d'utilisation de la commande git checkout](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-checkout-illustration.jpg)



Note : On peut également utiliser `git checkout -b` pour créer une branche et basculer immédiatement dessus. Cela est l’équivalent d’utiliser `git branch` puis `git checkout`.

`HEAD` pointe maintenant vers notre branche `test`. Si on effectue un nouveau commit, la branche `test` va avancer automatiquement tandis que `master` va toujours pointer sur le commit précédent. C’est en effet la branche sur laquelle on se situe lors d’un commit qui va pointer sur ce commit.

![Illustration de git head](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-head-branche-illustration.jpg)





## Fusionner les branches.



![Fusion branches simple git](https://www.pierre-giraud.com/wp-content/uploads/2019/12/fusion-branches-git-exemple.jpg)

Ici, on a une branche `test` qui pointe sur un commit commitN+1 et une branche `master` qui pointe sur un commit commitN. commitN est l’ancêtre direct de commitN+1 et il n’y a donc pas de problème de divergence.

Pour fusionner nos deux branches, on va se placer sur `master` avec une commande `git checkout` puis taper une commande `git merge` avec le nom de la branche qu’on souhaite fusionner avec `master`.

Dans ce cas, “fusionner” nos deux branches revient finalement à faire avancer `master` au niveau du commit pointé par `test`. C’est exactement ce que fait Git et c’est ce qu’on appelle un “fast forward” (avance rapide).

Il ne nous reste alors plus qu’à effacer notre branche `test`. On peut faire cela en utilisant la commande `git branch -d`.



### Situation plus complexe !



![Fusion de branches avec historique divergent git](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-branches-diverge-fusion-rebasage.jpg)



Pour fusionner deux branches ici on va à nouveau se placer dans la branche dans laquelle on souhaite fusionner puis effectuer un `git merge`.

Ici, comme la situation est plus complexe, il me semble intéressant d’expliquer comment Git fait pour fusionner les branches. Dans ce cas, Git réalise une fusion en utilisant 3 sources : le dernier commit commun aux deux branches et le dernier commit de chaque branche.

Cette fois-ci, plutôt que de simplement faire un fast forward, Git crée automatiquement un nouvel instantané dont le contenu est le résultat de la fusion ainsi qu’un commit qui pointe sur cet instantané. Ce commit s’appelle un commit de fusion et est spécial puisqu’il possède plusieurs parents.

Notez que dans le cas d’une fusion à trois sources, il se peut qu’il y ait des conflits. Cela va être notamment le cas si une même partie d’un fichier a été modifiée de différentes manières dans les différentes branches. Dans ce cas, lors de la fusion, Git nous alertera du conflit et nous demandera de le résoudre avant de terminer la fusion des branches.

On peut utiliser une commande `git status` pour voir précisément quels fichiers sont à l’origine du conflit. Imaginons par exemple que nos deux branches possèdent un fichier LISEZMOI.txt et que les deux fichiers LISEZMOI.txt possèdent des textes différents. Git va automatiquement “fusionner” les contenus des deux fichiers en un seul qui va en fait contenir les textes des deux fichiers de base à la suite l’un de l’autre avec des indicateurs de séparation.

On peut alors ouvrir le fichier à la main et choisir ce qu’on conserve (en supprimant les parties qui ne nous intéressent pas par exemple). Dès qu’on a terminé l’édition, on va taper une commande `git add` pour marquer le conflit comme résolu. On n’aura alors plus qu’à effectuer un `git commit` pour terminer le commit de fusion.

## Le rebase

![Fusion de branches avec historique divergent git](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-branches-diverge-fusion-rebasage.jpg)

Plutôt que d’effectuer une fusion à trois sources, on va pouvoir rebaser les modifications validées dans commitN+1 dans notre branche `master`. On utilise la commande `git rebase` pour récupérer les modifications validées sur une branche et les rejouer sur une autre.

Dans ce cas, Git part à nouveau du dernier commit commun aux deux branches (l’ancêtre commun le plus récent) puis récupère les modifications effectuées sur la branche qu’on souhaite rapatrier et les applique sur la branche vers laquelle on souhaite rebaser notre travail dans l’ordre dans lequel elles ont été introduites.



![git rebasage branches](https://www.pierre-giraud.com/wp-content/uploads/2019/12/git-branches-rebase.jpg)

Le résultat final est le même qu’avec une fusion mais l’historique est plus clair puisque toutes les modifications apparaissent en série même si elles ont eu lieu en parallèle. Rebaser rejoue les modifications d’une ligne de commits sur une autre dans l’ordre d’apparition, alors que la fusion joint et fusionne les deux têtes.

Gardez cependant à l’esprit que rebaser équivaut à supprimer des commits existants pour en créer de nouveaux (qui sont similaires de par leur contenu mais qui sont bien des entités différentes). Pour cette raison, vous ne devez jamais rebaser des commits qui ont déjà été poussés sur un dépôt public.

En effet, imaginons la situation suivante :

1. Vous poussez des commits sur un dépôt public ;
2. Des personnes récupèrent ces commits et se basent dessus pour travailler ;
3. Vous utilisez un `git rebase` pour “réécrire” ces commits et les poussez à nouveau.

Dans ce cas, des problèmes vont se poser puisque les gens qui ont travaillé à partir des commits de départ ne vont pas les retrouver dans le projet si il veulent récupérer les mises à jour et lorsqu’ils vont pousser leur modification sur le dépôt public les commits effacés vont être réintroduits ce qui va créer un historique très confus et potentiellement des conflits.







# GITHUB



## Copier un dépot : clone vs fork



Pour copier un dépôt (repository) GitHub sur nos machines, il suffit d’utiliser l’option “clone URL” de GitHub pour récupérer le lien du repo puis d’utiliser la commande `git clone [URL]` dans notre console.

On peut également utiliser l’option “fork” de GitHub. Un fork est une copie d’un dépôt distant qui nous permet d’effectuer des modifications sans affecter le projet original.
