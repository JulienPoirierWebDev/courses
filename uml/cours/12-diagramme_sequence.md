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
