# 1 - intro objet

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

# 2 persistence

La persistance d'un objet, c'est sa capacité à transcender l'espace et le temps : on peut détruire un objet qui a une persistence pour l'activer plus tard, lorsque l'on en a besoin.



Un objet non persistant est transitoire. Mais par défaut, un objet est persistant.



Passivation et activation des objets : on transmet un objet d'un espace de nom à un autre.





La communication entre objets. La base de tout.

Trois catégories de comportement : agent, acteur et serveur.



Les acteurs sont à l'origine de l'interaction.



Les serveurs ne sont jamais à l'origine de l'interaction, ils sont destinataires des messages.



Les agents ont les caractéristiques des acteurs et des serveurs : ils sont proches des humains. Ils peuvent agir en toute initiative avec sur les autres objets, ou suite à une sollicitation externe.



Le concept de message : on a décomposé le système en objet, les messages sont la relation de communication qui les relient de façon dynamique.



Le message permet la mise en collaboration. Importance du polymorphisme et de la liaison dynamique.



Un message, ça se traduit dans le programme par : une procédure, un événement, une interruption, etc.



Message synchrone : flèche a tête triangulaire pleine. L'expéditeur est bloqué jusqu'à ce que le destinataire accepte le message.



Message asynchrone : demi flèche ou flèche simple. Pas d'interruption pour l'expéditeur.



On coupe la parole : synchrone. On envoi une lettre, asynchrone.



Message minuté : comme le synchrone, ca bloqué mais pendant un temps donné, après l'expéditeur reprend la main. Une flèche avec un petit cercle comme une montre.



Les diagrammes d'interaction : diagramme de collaboration et diagramme de séquence.



Diagramme de collaboration : les objets sont des rectangles, des flèches symbolise les messages, ils sont numérotés dans l'ordre d'exécution



Bien pour la phase exploratoire. Mais devient peu claire s'il y a bcp de message.



Diagramme de séquence :



On insiste sur la communication, on voit le temps s'écouler, c'est plus abstrait.



Bien pour la complexité, dans un 2e temps.

# 3 Classes

Les classes



L'humain a tendance à aller vers l'abstraction. On a vu des objets en interaction, on peut en déduire des caractéristiques communes : une classe.



Cela dépend du point de vue. Les caractéristiques doivent être pertinente à la situation observée.



L'objet a un nom souligné c'est l'instance de la classe, qui ne l'est pas.



Généralités dans la classe, particularités dans les objets.



L'avantage des classes, c'est que le dev peut construire son logiciel à partir des abstractions de type objet du monde réel. C'est moins bas niveau.



Les attributs de la classe.



C'est les valeurs des attributs de la classe, c'3st donc l'état de l'objet.



Les opérations : 5 catégories

Les constructeurs.

Les destructeurs

Les sélecteurs (getter,entre autre)

Les modificateurs (setter, entre autre)

Les iterateurs : permet de visiter une structure de données contenant plusieurs objets.



Representation graphique :

Souvent, trois compartiments : nom, attributs, opérations.



On a parfois d'autres compartiments avec des noms : opérations, responsabilité et exceptions.



Description des classes :



En deux partie :



Specification : domaine de definition et propriétés Des instances de la classe, souvent en forme de type.

Réalisation : comment la specification est réalisé et contient le corps des opérations et données nécessaires à leur fonctionnement.



Specification (ou interface) se fait avant la réalisation



L'occulation des details de la réalisation, c'est l'encapsulation :

Avantages :

Les données des objets sont protégés des accès intempestifs + les utilisateurs de l'abstraction ne dépendent pas de la réalisation, donc moins de couplage dans les modèles (défini couplage ici)



Par défaut, les valeurs d'attributs sont encapsules : Il faut utiliser les opérations.

On peut assouplir au profit d'autres classes.



Privé, protégé et public : - | # | +



Encapsulation : enceinte de confinement d'une centrale nucléaire. Les défauts restent dans la classe, maintenance simplifiée.



Les opérations doivent fournir une vraie plus value, pas simplement être des sélecteurs et des modificateurs simples.

# 4 Relation entre les classes 

Les relations entre classes



L'association : c'est la relation avec le moins de couplage. Elle représente une connexion, un moment d'échange entre deux classes.

Parfois, on décoré une association en donnant une forme verbale passive ou active avec un sens de lecture.

On peut aussi ajouté des rôles et des cardinalités, pour définir le nombre d'instance ayant un rôle dans la relation.



L'agrégation est une relation avec un couplage plus fort, c'est toujours bidirectionnelle mais assymétrique cette fois.



Parent enfant, par exemple. L'un existe sans l'autre, mais la relation n'est pas égalitaire.



Graphiquement, c'est un trait avec un losange vide (un pointeur) vers la classe ayant le rôle le plus fort.



Cela permet de transmette plus facilement attributs et opération du tout vers la partie.



La composition



Couplage encore plus fort car le composite est propriétaire des composants. Sa destruction entraîne aussi celle des composants. Une voiture et un moteur. Des salles dans un bâtiments.



La composition permet parfois de mettre en valeur des attributs importants.



Ce choix de modélisation à des conséquence :

Notamment pour les cardinalités : si c'est 1 de chaque côté, alors la création d'une instance de la classe À impliqué la création d'une instance de la classe B.



Si composition, alors destruction du composant.

Si composition et cardinalités 1 au composant, il ne peut pas être détruit si c' est le dernier. Etc.

# 5 hiérarchie classe

Hiérarchie des classes.



Généralisation et specification



Les arbres de classe ne partent pas de leur racine mais de leur feuille. Des objets reel vers des classes plus abstraites. C'est une démarche difficile.



Flèche à tête triangulaire en direction de la superclasse. Forme de dépendance comme les commits de gît.



La Généralisation, c'est au début de la modélisation, lorsque les éléments du système on été identifié. La spécialisation intervient plutôt lorsque l'on cherche à programmer par extension et réutilisation.

Les nouveaux besoins sont capsules dans des sous classés qui spécialisent et étendent Les fonctions déjà existantes.



La définition des super classe : Généralisation demande une capacité d'analyse et d'abstraction.



Les sous classes demandent une bonne connaissance du processus métier, pour arriver à identifier précisément ce qui est spécifique et ne pas faire de l'overengeneering.



Pas de lien, ni de cardinalite.



Un lion est une sorte de carnivore.



Utiliser la notion d'ensemble. Définir une classe, c'est faire preuve d'abstraction, utiliser des points communs alors même qu'il y a des différences. Comme lorsque l'on identifie un ensemble d'objet.



Les sous classés sont donc des sous ensembles.



[ajouter image d'ensemble et de sous ensemble]



Il y a donc une inclusion : ce qui est vrai pour un objet d'une superclasse est vrai pour u' objet d'une sous classe.



On peut utiliser une classe abstraite, qui n'a pas la possibilité d'avoir des instances, pour alléger la description des sous classés : on met en commun les points communs de plusieurs sous classes. Même si l'on sait que l'on n'aura jamais besoin d'une objet de la superclasse abstraite. C'est une facilité de lecture.



Une classe abstraite est en italique



Avec la Généralisation en losange, on peut être sous classe de de super classe, elle même heritant d' une supersuperclasse.



Parfois, les critères des classes heritantes sont clairs mais pas leur ordre : on parle de covariance. On peut tenter de réduire cela, mais c'est parfois lié aux descriptions métiers. Covariance.



Attention à ne pas defenir un attribut comme critère de spécialisation : couleur d'une voiture par ex.



Avec la spécialisation, on créer un couplage fort entre deux classes.



Attention à l'héritage multiple, cela peut générer des conflits par collisions de nom notamment lors de l'héritage en losange.



Donc certains langages empêchent l'héritage multiple. Il faut donc savoir si c'est le cas dans son langage, ou bien revoir la modélisation une fois le langage choisi.



La classification propage l'état, le comportement et les contraintes.


on peut substituer n'importe quel instance d'une sous classe à 'importe quelle instance d' une superclasse sans que cela pose problème dans le programme. Merci Liskov (m. Ou Mme?). En gros, si une superclasse peut le faire, une sousclasse qui en hérité aussi et il ne devrait pas y avoir de problème.



Dans le code, il faut faire attention à cela car on peut modifier les comportements, notamment avec le polymorphisme d'héritage que l'on va voir après.

# 6 interface

L'interface permet d'ajouter des fonctionnalités à des classes de natures assez différentes, permettant de garder la taxonomie de l'héritage Claire et limpide, et de considérer les interfaces comme des outils pour les classes ?

# 7 UML : présentation 

La sémantique et la notation sont associés.



On part d'un système réel, on tente de l'abstraire. Avec des diagrammes de classes, diagramme de cas d'utilisation et diagramme de séquence. Bonne porte d'entrée.



Ensuite, on a des diagrammes structurels et des diagrams comportementaux.



On peut modéliser le même élément avec différents diagrammes : c'est une question de point de vue.



La granularité différe. Cela dépend de la volonté du concepteur / de l'équipe.

# 9 use case

Cas d'utilisation



Acteur et cas d'utilisation avec une association.



Récupérer les besoins des utilisateurs pour interagir avec le système. Souvent flou au début. Très incremental.



Les use case doivent être considéré comme des classes dont les instances sont les scénarios. Ce sont des classes orchestratrices qui permettent de communiquer avec les autres classes / objets.



Idéal pour définir les besoins mais aussi tout au long du projet, dans la doc, les tests utilisateurs en fin de cycle.



Extension : cas d'utilisation qui étendent un cas d'utilisation initial. Souvent lié à une condition, pas à une demande de l'utilisateur (ça serait un autre use case avec intention).



Include : un cas d'utilisation que l'on rend obligatoire car nécessaire dans la logique du système. Même si l'utilisateur je le souhaite pas.





Les cas d'utilisation, c'est un flot d'événement, en lien avec une motivation de l'utilisateur.



Des événements alternatifs, qui permettent de comprendre les exceptions, les points de bifurcation ms, etc. Donc fin non prévu d'un use case ou fin alternative.



Le diagram des cas d'utilisation permet de construire le bon système. On passe en objet avec une collaboration entre le use case et les autres objets du système.







On peut ensuite passer au diagram objet.

# 10 diagramme de classes

Diagramme de classe.



Les classes sont indiquées en gras.



On peut ajouter <<>> pour donner des infos complémentaire comme si c'est une interface, ou autre. Assez libre.



Une classe peut avoir attributs et operations.

Un attribut peut être rédigé de manière à indiquer : visibilité, multiplicité, intervalle, limite inf et sup, valeur initiale éventuellement (ou par défaut ?)



On peut mettre des remarques sous forme de notes.



On peut mettre des compartiments complémentaires comme attributs, responsabilité et exceptions.



On peut avoir des associations, avec les multiplicité. Mais cela ne représente pas des messages, juste des relations globales.



Il peut y avoir des contraintes en lien avec les relations : notamment une notion de sous ensemble, ordonnée, exclusif



On peut avoir de l'agrégation, de la composition et de la Généralisation. Il peut aussi y avoir des contraintes sur la Généralisation.



Des classes abstraites.

# 12 diagrame sequence

diagramme de sequence

montre les interactions d'un point de vue temporel

permet de décrire des scenarios complexes avec peu d'objet. Ils ne rendent pas compte du contexte interne des objets (plutôt voir le diagramme de collaboration)

Les interactions : les objets communiquent en envoyant des messages. Les objets sont placé horizontalement en haut et ont une ligne de vie. 
Une interaction, c'est un comportement dynamique entre les objets : l'envoi d'un message, donc l'éxécution d'une méthode de l'objet qui recoit le message par l'objet qui l'envoi (le receveur se fait "exécuter")

Les activations et la durée de vie : 

le diagramme de sequence montre les activations des objets et combien de temps il reste actif. 

les types de message (donne des exemples en plantUML): 

flot de controle a plat : asynchrone, symbolisé par une fleche simple

appel de procédure ou flot de controle emboité : la séquence emboité doit se terminer pour que la séquence englobante reprenne le contrôle. Symbole : des flèches a l'extrémité triangulaire. 

le retour explicite de procédure : fleche de retour en point tillé, normalement implicite et done non noté, car s'exécute a la fin de l'activation de l'objet. On peut y associer un retour de paramètre. 

exercice : faire le diagramme de sequence d'un ascenseur. 



---- 

diagramme de collaboration

présente les rôles joués par les objets dans un contexte. interaction par envoi de message

on insiste ici sur la représentation spatiale des objets. 
La description du comportement se fait par la description de la structure et des formes de communication. 

donc diagramme de collaboration : réalisation d'une opération (méthode) ou d'un classificateur (use case, classe) dans un contexte donné. 

deux types de descriptions : 
1- description générale au niveau spécification : le role des classificateurs et le role des associations. Une interaction : une sequence de messages partiellement ordonnées échangés entre les rôles des classificateurs. 
2- description spécifique au niveau instance : une instance particulière d'interaction avec les objets et les liens qui se conforment a ce qui est décrit au niveau spécification + les stimulus (instances des messages) échangés entre ces objets. 
