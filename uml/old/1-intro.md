# 🌱 **Introduction : Les concepts de la conception objet sous-tendant UML**

L'UML (Unified Modelisation Language) est apparu en 1997 : 

Pourquoi a ce moment là ? 

Les languages POO ne sont pas récent : on parle de Simula en 1960 et a amené l'émergence de Smalltalk, C++, Java, C#, etc. 

Pour répondre aux exigences d'ingéniérie logicielle, des formalismes rigoureux ont émergé, mais ils étaient en concurrence. 

Il existait l'OMT, la méthode Booch et la méthode Jacobson. Ce sont les trois personnes (RUMBAUCH, BOOCH et JACOBSON) qui ont finit par travailler au sein de Rational Softwar pour créer en 1997 la version 1.0 d'UML. 

Ils ont demandé de l'aide a l'Object Management Group, un consortium de 800 entreprises et universités. Notamment pour les MAJ : 

La v1.5 en 2003
La v2.0 en 2005
la v2.2 en 2009
la v2.5.1 en 2017

Ces trois auteurs d'UML ont aussi déterminé ce qu'ils nomment le Processus Unifié :
Une méthode incrémentale et itérrative où l'on dialogue avec l'équipe métier pour avoir un logiciel le plus proche possible des attentes. 

Cycle de développement en 4 phases : 
- Phase d'inception : on évelue le projet, on donne le go pour continuer le projet, notamment au niveau investissement financier. Pour ce faire, on détermine des cas d'utilisation et une première ébauche d'architecture. 
- Phase d'élaboration : 
Une fois le go lancé, on détermine l'architecture du système : a la fin de cette phase, elle est connue, ainsi que les exigences du projet. 
- Phase de constructure : c'est le développement logiciel a proprement parlé. 
- La phase de transition : on déploie le logiciel chez le client et on forme les utilisateurs. 

L'UML vient dans toutes les phases et sert a "découvrir le logiciel" dans les 2 premières phases. 

# 1️⃣ Pourquoi la conception objet ?

La programmation orientée objet (POO) ne sert pas à “faire joli”.
Elle répond à trois enjeux concrets dans le développement logiciel :

### **1. Structurer un système complexe**

On découpe un problème en un ensemble d’objets simples, cohérents, compréhensibles.

### **2. Faciliter la maintenance**

Un code orienté objet est plus facile à corriger, faire évoluer, tester.

### **3. Favoriser la réutilisation**

On évite de réécrire la même chose. Une classe bien conçue sert dans plusieurs contextes.

👉 UML n’est pas un langage de programmation : c’est **un langage de description**, pensé pour représenter précisément cette structuration.

---

# 2️⃣ Les concepts fondamentaux de l’objet (ce que UML doit refléter)

## **2.1 Les objets**

Un objet représente une entité du monde réel ou du système.
Exemples : *Utilisateur, Commande, Paiement, Voiture, Capteur…*

Un objet a deux choses :

* **Des caractéristiques** → des attributs
  *ex : nom, prix, date, état…*
* **Des comportements** → des méthodes
  *ex : payer(), s’authentifier(), calculerTVA()…*

👉 UML va décrire ces objets, leurs attributs, leurs comportements.

L'objet a aussi une troisième chose : une identité : quand on parle d'un objet, on parle d'une chose unique. Une classe permet de produire une infinité d'objet avec des caractéristiques et des comportements comparables mais avec des légères variations. 

Par exemple, la classe Voiture permet de gérer plusieurs types de voiture, des 3/5 portes, différentes motorisations, etc. 

---

## **2.2 Les classes**

Une classe est **le plan** qui permet de construire des objets.

La classe définit :

* ce que tous les objets auront comme attributs
* ce qu’ils pourront faire comme actions
* leurs règles (visibilité, contraintes…)

**Classe → Moule avec des paramèttres**
**Objet → Gateau produit à partir du moule**

UML modélise **les classes**, pas les objets individuels.

---

## **2.3 L’encapsulation**

L’idée est simple :
**on protège l’état interne d’un objet en contrôlant son accès.**

* Attributs privés (private)
* Méthodes publiques pour interagir proprement

C’est essentiel pour :

* éviter les incohérences
* maîtriser les modifications
* garantir la robustesse du système

👉 UML représente l’encapsulation via les symboles **+ (public)**, **- (private)** et **# (protected)**.

---

## **2.4 Les relations entre objets**

Les objets ne vivent jamais seuls. UML doit représenter **comment ils collaborent**.

### Les principaux types de relations :

#### **Association**

Relation simple entre deux classes.
*Un client passe une commande.*

#### **Agrégation**

Relation “est composé de” mais non vitale.
*Une équipe contient des joueurs (les joueurs peuvent exister sans équipe).*

#### **Composition**

Relation forte, l’un ne peut pas survivre sans l’autre.
*Une commande contient des lignes de commande.*

#### **Dépendance**

Une classe utilise temporairement une autre.
*Un contrôleur utilise un service.*

👉 Ces relations seront essentielles dans le diagramme de classes.

---

## **2.5 L’héritage**

Une classe peut **hériter** des caractéristiques d’une autre.

* Superclasse → classe générale : *Animal*
* Sous-classe → classe spécialisée : *Chien*, *Chat*

UML représente ça par une flèche triangulaire.

Avantages :

* éviter de dupliquer du code
* organiser les concepts du plus général au plus spécifique

---

## **2.6 Le polymorphisme**

Capacité pour plusieurs classes de répondre à la même méthode, chacune à sa façon.

Exemple :
Tous les *Animaux* ont une méthode *faireDuBruit()* :

* Chien → aboie
* Chat → miaule
* Vache → meugle

C’est la base de la flexibilité logicielle.

---

# 3️⃣ Pourquoi UML repose totalement sur ces concepts

UML n’a pas été créé pour faire des images.
Il a été créé pour **parler clairement d’un système**, à la fois :

* aux devs
* aux architectes
* aux chefs de projet
* aux clients

Chaque diagramme décrit un aspect de l'objet :

| Concept OO                   | Diagramme UML associé   |
| ---------------------------- | ----------------------- |
| Classes, attributs, méthodes | Diagramme de classes    |
| Relations, cardinalités      | Diagramme de classes    |
| Interaction entre objets     | Diagramme de séquence   |
| Flux de traitement           | Diagramme d’activité    |
| Fonctions du système         | Cas d’usage             |
| Structure logicielle globale | Diagramme de composants |

👉 Sans les concepts objet, ces diagrammes sont incompréhensibles.

---

# 4️⃣ Résumé clair pour les étudiants

* UML modélise **un système orienté objet**, pas du code.
* Pour comprendre UML, il faut comprendre :

  * ce qu’est un **objet**
  * ce qu’est une **classe**
  * l’encapsulation
  * les **relations** entre objets
  * l’héritage
  * le polymorphisme
* UML sert à **communiquer**, **concevoir**, **anticiper**.

---

# 5️⃣ Exercice d’introduction (5 minutes)

**Question : Dans une application de location de vélos, identifiez :**

1. 3 objets
2. Leurs attributs
3. 2 relations
4. Une situation d’héritage possible

Ça ancre immédiatement les concepts avant d’aller vers UML.





--- 

Notes pour du formateur, non utile pour l'apprenant.
L'approche objet : elle permet de gérer la complexité du monde apt décomposition de l'espace des problème et, de fait, de l'espace des solutions.



La où l'approche fonctionnelle reposait sur des fonctions très hiérarchiques, dont la modification d'une entraîne des impacts sur toute la chaîne, l'approche objet permet de de considérer des interactions avec des abstractions du monde reel, permettant de mieux se représenter ce qu'il se passe.



Un objet, c'est quoi ?



Une unité atomique ayant un état mais aussi un comportement. Le vrai rôle de l'objet apparaît avec les messages qu'il peut envoyer, lors d'un scénario de communication



Monde physique : grain de sable, étoile, voiture.



Monde virtuel : compte en banque, message, équation mathématique.



Les objets informatique, que nous allons manipuler, sont une représentation abstraite d'objets '' reels'', que nous simplifions pour les manipuler, dans un système.



En UML, un objet est un rectangle. Ils ont des liens entre eux,symbolisé par des traits.



On peut ajouter des commentaires, qui sont des rectangles avec des coins repliés et liés en points tilles aux objets qu'ils concernent.



Si le nom de l'objet est générique, il est noté avec : et une majuscule.



:Élève

:Professeur



Un objet = un état + un comportement + une identité



État : les valeurs instantanées de tous les attributs de l'objet.



Ça se représente dans la 2e partie du rectangle : attribut = valeur.



L'état évolue, les valeurs changent.



Le comportement :

Compétences, actions et réactions de l'objet.

Un atome de comportement est appelé une opération.

Une opération est déclenchée 0ar une stimulation externe, que l'on représente sous forme d'un message envoyé par un autre objet.



Les interactions entres objets sont des lignes continues et les messages, des flèches au dessus de ces lignes, avec le message envoyé.



Le comportement depend de l'état, et le modifie



Un avion peut atterrir s'il est en train de voler.



L'identité : des objets similaires ont pourtant une identité propre. On peut distinguer un objet de manière non ambiguë, peu importe son état.