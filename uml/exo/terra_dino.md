## 🦖 Scénario : Gestion du Parc à Thème "Terra Dino"

"En tant que PDG de 'Terra Dino', ma priorité est la sécurité et la rentabilité. Notre système actuel ne fait que gérer les tickets, il ne suit pas nos vrais problèmes : les dinosaures et les visiteurs.

Nous devons commencer par les **Dinosaures**. Chaque Dino est une entité critique. Il nous faut enregistrer son **Espèce** (T-Rex, Vélociraptor, Tricératops), son **Niveau de Dangerosité** (de 1 à 5), son **Enclos** actuel (qui est une zone physique du parc), et son **Statut de Santé** (Optimal, Blessé, Soins Intensifs). Un point essentiel : chaque espèce a des **Besoin Alimentaires** spécifiques (Carnivore ou Herbivore) et le système doit alerter si la ration quotidienne n'est pas distribuée.

Les **Enclos** sont des zones physiques avec une capacité maximale et un niveau de sécurité. Un enclos de haute sécurité (pour les T-Rex par exemple) ne peut pas héberger d'Herbivores, et vice-versa, pour des raisons de protocole. Le système doit vérifier cette compatibilité avant qu'un Dino soit déplacé. Surtout, chaque enclos a un **Statut de Sécurité** (Normal, Alerte 1, Brèche de Sécurité). Le statut 'Brèche' doit immédiatement déclencher un protocole d'urgence.

Ensuite, la **Gestion des Visiteurs**. Les **Visiteurs** achètent des **Billets** (Standard ou VIP) pour une date donnée. Les billets VIP donnent accès aux **Zones d'Observation Spéciales**. Nous devons suivre le nombre de visiteurs dans le parc en temps réel pour ne pas dépasser la capacité maximale fixée par le conseil de sécurité. Quand un visiteur entre, son Billet est validé ; quand il sort, son statut est mis à jour.

Enfin, les **Employés de la Sécurité** (un acteur clé !). Ils doivent pouvoir signaler un **Incident** (panne électrique, comportement agressif d'un Dino, vandalisme). Chaque Incident doit être enregistré avec sa **Localisation** (dans quel Enclos ou Zone Visiteur), sa **Priorité** (Urgence Critique ou Maintenance), et être **assigné** à une équipe de sécurité pour résolution. L'équipe met ensuite le statut de l'Incident à 'Résolu'.

En résumé, il me faut suivre mes Dinos, gérer l'occupation et la sécurité de mes Enclos, contrôler le flux de mes Visiteurs, et surtout, gérer la résolution des Incidents. La sécurité est prioritaire !"


## Incidents 

C'est une excellente idée ! Intégrer des exemples concrets et des cas d'usage avec des noms et des dates aide énormément à identifier les attributs, les états et les séquences de temps pour la modélisation.

Je vais vous réécrire le scénario de **Terra Dino** en intégrant des situations narratives spécifiques, comme si vous lisiez un rapport d'activité ou un journal de bord.

---

## 🦖 Scénario : Gestion du Parc à Thème "Terra Dino" (Version Scénarisée)

"En tant que PDG, je dois vous raconter la semaine dernière pour que vous compreniez l'urgence de notre système.

Tout a commencé **mardi à 14h00**. Notre T-Rex vedette, que nous avons nommé **'Atlas'**, a commencé à montrer des signes d'agressivité au-delà de la normale. Le Vétérinaire de garde, **Dr. Chavez**, a immédiatement mis à jour la fiche d'**Atlas** dans le système : son **Statut de Santé** est passé de *Optimal* à *Blessé* (diagnostic préliminaire : irritation digestive). Il a aussi noté ses **Besoins Alimentaires** exceptionnels pour la semaine : uniquement des carcasses entières de chèvre, au lieu du bœuf haché habituel.

Cette modification a eu des conséquences sur l'**Enclos A5** où se trouve Atlas. L'Enclos A5 est classé **Niveau de Sécurité 5**. **Mercredi à 9h00**, le système a généré une alerte critique car le stock de nourriture spécifique pour Atlas n'était pas suffisant pour la journée. Cela doit être modélisé comme une **alerte de maintenance préventive**.

Le vrai problème est survenu **jeudi à 16h30**. L'**Agent Sécurité Michel** a signalé une anomalie. En effectuant sa patrouille dans la **Zone d'Observation des Tricératops (Zone T2)**, il a découvert qu'un **rail de la barrière électrique était désactivé**. Michel a immédiatement ouvert un **Incident #20250912-001** avec la **Localisation : Enclos C3** et la **Priorité : Urgence Critique**. Le système l'a enregistré avec le statut *Ouvert*. Il a immédiatement et automatiquement basculé le **Statut de Sécurité de l'Enclos C3** de *Normal* à *Alerte Niveau 1*.

L'Incident #001 a été **assigné** à l'Agent **Sophie Dubois** à 16h35. Sophie, après avoir récupéré le matériel, a marqué l'Incident comme *En Cours de Résolution* à 16h45. Elle a constaté qu'un Visiteur, **Mme. Léger (Billet Standard)**, avait tenté de court-circuiter le rail pour récupérer son chapeau, ce qui a déclenché l'incident. À 17h15, Sophie a rétabli le courant et a mis le statut de l'Incident à *Résolu*. Le système a alors basculé l'Enclos C3 à *Normal*. L'incident a été **Fermé/Archivé** officiellement à **17h30**. L'historique doit montrer que l'incident a duré 60 minutes.

Quant aux **Visiteurs**, **samedi**, nous avons atteint notre **Capacité Maximale** de 15 000 personnes à 11h00. Le système a bloqué l'accès aux portiques jusqu'à 14h00, heure à laquelle 500 personnes sont sorties. Nous devons pouvoir modéliser ces **billets validés à l'entrée** puis **dévalidés à la sortie**. De plus, les 200 **Visiteurs VIP** présents ont eu accès toute la journée à la **Zone d'Observation de 'Atlas' (Zone A5 VIP)**, ce qui nous montre la nécessité de cette relation entre **Billet VIP** et l'accès à certaines **Zones**.

C'est ce type d'événements et de données (horodatages précis, statuts de l'équipement et des Dinos) que votre système doit pouvoir gérer."



## 📅 Événement 1 : Logistique du Déplacement de Dino (Le Déménagement de 'Rexy')

* **Date & Heure :** Lundi 18 novembre, 08h00.
* **Acteurs Impliqués :** Biologiste Vétérinaire (Dr. Alix), Agent Sécurité (Jean).
* **Description de l'Action :** Le Dr. Alix doit déplacer **'Rexy'** (un jeune T-Rex, Dangerosité 4, Carnivore) de l'**Enclos A2** (maintenance prévue) vers l'**Enclos A6** (disponible).
* **Séquence des Opérations :**
    1.  **08h00 :** Le Dr. Alix ouvre le formulaire de **Déplacement de Dino** dans le système, sélectionne Rexy, A2 (source) et A6 (cible).
    2.  **08h01 :** Le **Système** vérifie la compatibilité : **A6** a un Niveau de Sécurité de 4 (OK pour Dangerosité 4), et est configuré pour les *Carnivores* (OK).
    3.  **08h02 :** Le Système vérifie la **Capacité de l'Enclos** : A6 contient déjà 2 dinosaures ; sa capacité maximale est 4. L'ajout de Rexy est autorisé (place restante : 1).
    4.  **08h30 :** Le Dr. Alix et l'Agent Jean confirment le transfert dans le système. Le **Statut** de Rexy est temporairement mis à *En Transit*.
    5.  **09h00 :** Rexy arrive en A6. Le Dr. Alix met à jour le système : Rexy est maintenant localisé en **Enclos A6**. Le statut de Rexy redevient *Optimal*.
* **Point clé pour UML :** Le processus de validation du **Système** (vérification de la compatibilité, de la capacité) est un point de **décision conditionnelle** crucial pour un Diagramme d'Activité ou de Séquence.

---

## 🎫 Événement 2 : Gestion d'un Flux de Visiteurs VIP (Le Groupe du Samedi)

* **Date & Heure :** Samedi 23 novembre, 10h00 – 17h00.
* **Acteurs Impliqués :** Visiteur (M. Durant, groupe de 5), Agent de Porte (Emma).
* **Description de l'Action :** Un groupe VIP arrive et déclenche des validations spécifiques tout au long de la journée.
* **Séquence des Opérations :**
    1.  **10h00 :** M. Durant (ID: DURA78) arrive avec 4 invités. L'Agent **Emma** scanne le Billet (Type: VIP, Quantité: 5).
    2.  **10h01 :** Le **Système** vérifie la **Validité du Billet** et décrémente le nombre de places disponibles. Les 5 Visiteurs sont enregistrés comme *Présents*. Le compteur total des Visiteurs passe de 14 500 à 14 505.
    3.  **10h30 :** Le groupe tente d'entrer dans la **Zone d'Observation Protégée Z9** (réservée aux VIP). L'accès est **Autorisé** car le type de Billet est *VIP*.
    4.  **15h00 :** L'Agent **Michel** signale que M. Durant a dépassé la durée maximale de 2 heures dans la Zone Z9. Le **Système** génère une **Alerte Douce** à l'intention de l'Agent Emma pour qu'elle rappelle le règlement au groupe (sans intervention physique).
    5.  **17h00 :** M. Durant et ses 4 invités sortent. L'Agent de Porte met à jour leur statut. Le **Système** passe le statut des 5 Visiteurs à *Absent* et met à jour le compteur total.
* **Point clé pour UML :** La gestion des **autorisations conditionnelles** (accès à Z9 uniquement si Billet VIP) et les **notifications non bloquantes** (Alerte Douce) sont essentielles pour le Diagramme d'Activité.

---

## ⚡ Événement 3 : Brèche de Sécurité Critique (L'Évasion de Vélociraptor)

* **Date & Heure :** Dimanche 24 novembre, 12h05.
* **Acteurs Impliqués :** Agent Sécurité (Sophie), Le Gérant (Mme. Leroy), Tous les Visiteurs.
* **Description de l'Action :** Un vélociraptor s'échappe, déclenchant le protocole d'urgence maximal.
* **Séquence des Opérations :**
    1.  **12h05 :** Un capteur de mouvement signale la présence d'un **Vélociraptor** dans la zone de service adjacente à l'**Enclos D1**.
    2.  **12h06 :** L'Agent **Sophie** confirme la brèche et déclenche l'événement **Brèche de Sécurité** pour l'Enclos D1. Le statut de l'Enclos D1 passe immédiatement à **Brèche de Sécurité**.
    3.  **12h06 :** Le **Système** exécute le **Protocole d'Urgence N°1 (Brèche)** :
        * **Action 1 :** Notification Immédiate et Critique au **Gérant (Mme. Leroy)**.
        * **Action 2 :** Changement du statut de *toutes* les **Zones Visiteur** adjacentes à D1 à **Zone Confineé**.
        * **Action 3 :** Affichage d'un message d'alerte sur tous les écrans du parc.
    4.  **12h10 :** Le Gérant Mme. Leroy valide l'envoi de l'équipe d'intervention.
    5.  **13h30 :** Le Vélociraptor est maîtrisé et ramené à D1. L'Incident est marqué comme *Résolu*.
    6.  **13h35 :** Le **Système** remet le statut des **Zones Visiteur** à *Normal*.
* **Point clé pour UML :** L'événement **Brèche de Sécurité** doit être modélisé comme un **déclencheur puissant** dans le **Diagramme d'État** de l'Enclos, provoquant l'exécution de **multiples actions parallèles** (*Fork*) au niveau du **Système** (notification, changement de statut de zone, alerte publique).
