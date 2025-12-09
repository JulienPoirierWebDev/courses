## 🃏 1. Les Alchimistes Fous (Jeu de Cartes) : Documentation Système

"Notre jeu nécessite un moteur capable de gérer les inventaires de cartes et le suivi des objectifs. L'entité centrale est le **Joueur**. Chaque joueur doit être traqué par son **Score** (initialement zéro) et son **Inventaire de Cartes**. L'Inventaire contient deux sous-ensembles : la **Main** (maximum cinq cartes Ingrédients) et le **Stock de Potions Maîtresses** (maximum trois).

Le jeu commence par la distribution de cinq cartes Ingrédients à chaque joueur. La pioche principale doit être aléatoire et contenir les quatre types d'Ingrédients, chacun avec des valeurs variant de 1 à 3. Les Cartes Recettes sont gérées par une pile séparée, toujours accessible.

Le flux de jeu est cyclique : Pioche, Action Unique, Vérification de la Main. Lors de l'**Action de Création de Potion**, le système doit valider deux conditions : premièrement, que le joueur possède les **types** d'Ingrédients requis (ex: 1 Terre, 1 Feu) et deuxièmement, que la **somme** des valeurs de ces cartes Ingrédients atteigne le seuil requis par la Recette (ex: Total de 5 points ou plus). Si la validation échoue, les cartes Ingrédients restent dans la main du joueur. Si la validation réussit, les cartes utilisées sont envoyées à la défausse. Si la Potion créée est une Potion Maîtresse, elle doit être ajoutée au Stock du joueur et son Score doit être mis à jour de +3.

La partie se termine immédiatement dès qu'un joueur atteint soit un Score de 10 points, soit un Stock de 3 Potions Maîtresses."

---

## 🗺️ 2. Le Contrôleur Aérien (Jeu de Plateau) : Documentation Système

"Le cœur de ce jeu est la gestion des **États** des avions et des **Ressources** (les pistes). Nous avons besoin d'un système qui gère le temps et les changements d'état.

Au début de chaque tour, le système doit générer un nouvel **Avion** et lui assigner aléatoirement un **T.A.C.** (Temps Avant Collision) entre 3 et 5. La phase de mise à jour T.A.C. est critique : le système doit itérer sur *tous* les avions actifs (statuts En Vol et En Approche) et décrémenter leur compteur. S'il trouve un avion dont le T.A.C. est à zéro ou moins, cela déclenche la séquence de **Collision** : le joueur perd un Jeton de Sécurité et l'avion est retiré du jeu.

Le joueur a droit à deux **Actions d'Instruction** par tour. Ces actions modifient l'état de l'Avion ciblé : *Approche* change l'état de 'En Vol' à 'En Approche' (et cible une Piste), *Atterrissage* change l'état de 'En Approche' à 'Sur Piste'. L'action *Décollage* change l'état de 'Sur Piste' à 'Atterri', ce qui ajoute un Jeton de Sécurité au joueur.

Il est essentiel de modéliser la **Piste d'Atterrissage** comme une ressource : elle a un état **Occupée** ou **Libre**. La tentative d'utiliser l'instruction *Atterrissage* sur une Piste déjà **Occupée** doit immédiatement provoquer une **Collision**."

---

## 🛡️ 3. Le Dévouement du Héros (JDR Minimaliste) : Documentation Système

"L'implémentation de ce jeu repose sur la bonne gestion des **Statistiques de Combat** et du processus de **Résolution de la Menace**.

L'entité **Héros** doit être persistante tout au long de la partie, avec un suivi de ses **PV** (limite max : 10), sa **Valeur d'Attaque** (Base 1 + bonus de l'Arme) et sa **Valeur de Défense** (Base 0 + bonus de l'Armure). L'entité **Équipement** doit être modélisée pour gérer les bonus qu'elle apporte (Attaque ou Défense) et être assignée au Héros.

Chaque tour est un affrontement. La **Menace** tirée doit avoir ses propres PV et sa propre valeur d'Attaque, sans Défense. Si le joueur choisit d'**Attaquer**, les calculs de dégâts doivent être effectués :
* $D_{\text{Héros}} = \max(0, \text{Attaque Héros} - \text{Attaque Menace})$
* $D_{\text{Menace}} = \max(0, \text{Attaque Menace} - \text{Défense Héros})$

Si le joueur choisit de **Fuir**, le Héros subit des dégâts égaux à l'Attaque de la Menace, et la Menace est défaussée.

L'état de la partie dépend des PV du Héros (s'ils tombent à zéro, le jeu est perdu) et du nombre de Menaces de type **Boss** vaincues (l'objectif étant 3). Si une Menace non-Boss est vaincue, le système doit déclencher le gain d'une carte Équipement aléatoire et restaurer 2 PV au Héros (sans dépasser 10)."
