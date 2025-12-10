# Etape 1 : Analyse lexicale

Voici l'analyse lexicale détaillée de ton scénario pour "Le Bouquineur Curieux".

---

### 1. Candidats Classes (Les Noms)
Ce sont les entités principales, les "objets" que le système doit manipuler.

* **Client / Abonné :** La personne qui utilise le service.
* **Abonnement :** Le contrat qui lie le client au service.
* **Formule :** Le type d'abonnement choisi (3 mois, 6 mois, illimitée).
* **Questionnaire (ou Profil de Goûts) :** L'ensemble des préférences du client.
* **Livre :** L'article principal géré par le système.
* **Libraire (ou Libraire Référent) :** L'employé responsable des choix.
* **Box (ou Commande/Sélection) :** L'objet physique mensuel contenant les livres et goodies.
* **Stock :** La gestion de la quantité de livres disponibles.
* **Service Logistique :** (Note : Souvent un acteur externe, mais peut être une classe s'il y a des actions spécifiques à gérer dans le système).

### 2. Candidats Attributs (Les Propriétés)
Ce sont les détails qui décrivent les classes identifiées ci-dessus.

* **Pour le Client :**
    * Coordonnées de facturation
    * Adresse de livraison
    * Email
* **Pour la Formule / Abonnement :**
    * Durée (3 mois, 6 mois, illimitée)
    * Statut (Actif, Suspendu, Résilié, Terminé)
    * Date de début / Date de fin
* **Pour le Questionnaire :**
    * Genres préférés (Fantasy, Polar, etc.)
    * Genres détestés
    * Format préféré (Poche, Grand format)
    * Historique lecture (Classiques déjà lus)
* **Pour la Box / Sélection :**
    * Date de sélection
    * Date limite d'envoi
    * Statut (En préparation, Expédiée)
    * Numéro de suivi
* **Pour le Livre :**
    * Titre
    * Auteur (impliqué par "titres")
    * Genre
    * Quantité (pour le stock)
    * État du stock (Épuisé ou non)

### 3. Candidats Méthodes (Les Verbes)
Ce sont les actions ou les comportements que le système ou les acteurs effectuent.

* **Gestion de l'Abonnement :**
    * `sAbonner()`
    * `choisirFormule()`
    * `validerPaiement()`
    * `suspendreAbonnement()`
    * `résilierAbonnement()`
    * `renouvelerAbonnement()`
* **Gestion du Profil :**
    * `remplirQuestionnaire()`
    * `mettreAJourGouts()`
    * `assignerLibraire()`
* **Opérations du Libraire :**
    * `accederProfilClient()`
    * `choisirLivres()` (Créer la sélection)
    * `modifierSelection()`
* **Logistique et Système :**
    * `genererListeSelection()`
    * `preparerBox()` (scan)
    * `expedierBox()` (changer statut)
    * `notifierClient()` (envoyer email)
* **Gestion des Livres :**
    * `verifierStock()`
    * `mettreAJourStock()` (décrémenter)



---

### 💡 Notes d'analyse (Pour affiner ton diagramme)

Pour passer de cette liste brute à un diagramme propre, voici quelques conseils de structuration :

1.  **Relation Client - Abonnement :** Un client peut-il avoir plusieurs abonnements (historique) ou un seul actif ? Le texte suggère "Le client s'abonne", donc une relation 1-1 ou 1-N est à prévoir.
2.  **La classe "Box" vs "Sélection" :** Dans ton texte, le Libraire fait une "Sélection" (virtuelle) qui devient ensuite une "Box" (physique) scannée par la logistique. Tu pourrais fusionner cela en une seule classe `BoxMensuelle` qui change d'état (de "Sélectionnée" à "Expédiée").
3.  **Le Questionnaire :** Au lieu de mettre tous les goûts directement dans la classe `Client`, il est plus propre de créer une classe séparée `ProfilLecture` ou `Questionnaire` liée au Client. Cela allège la classe Client.
4.  **Goodies :** Le texte mentionne "quelques goodies". Si tu ne gères pas le stock de goodies spécifiquement, tu peux les considérer comme un simple attribut texte ou une liste générique dans la classe `Box`, sans créer une classe `Goodies` complexe.

# Etape 2 : les relations avec cardinalités (sans aggrégation / composition)

C'est une excellente initiative de séparer **Abonnement** (le contrat spécifique d'un client avec ses dates de début/fin) et **Formule** (le "template" de l'offre, ex: "Pack 3 mois", "Pack Illimité").

Cela vous permettra effectivement de modifier les prix, la durée ou le nombre de livres des futures formules sans casser les abonnements historiques déjà signés.

Voici les relations et les cardinalités proposées pour votre diagramme de classe, basées sur le scénario :

### 1. Le Cœur : Client, Abonnement et Formule

C'est la structure commerciale du système.

* **Client ↔ Abonnement**
    * **Relation :** "Souscrit à"
    * **Cardinalités :** `Client (1) ---- (1..*) Abonnement`
    * **Explication :** Un client a au moins un abonnement (sinon ce n'est qu'un prospect, mais le texte dit "le client doit s'abonner"). Je mets `*` car un client peut avoir eu plusieurs abonnements dans le passé (historique) ou renouveler son abonnement (création d'un nouveau contrat).
* **Abonnement ↔ Formule**
    * **Relation :** "Est basé sur"
    * **Cardinalités :** `Abonnement (*) ---- (1) Formule`
    * **Explication :** Un abonnement spécifique (celui de M. Dupont) correspond à une seule formule (ex: "3 mois"). Par contre, une Formule est liée à une infinité d'abonnements potentiels.

### 2. La Personnalisation : Client et Questionnaire

* **Client ↔ Questionnaire (ProfilGoûts)**
    * **Relation :** "Définit" ou "Remplir"
    * **Cardinalités :** `Client (1) ---- (1) Questionnaire`
    * **Explication :** Le texte dit "remplir UN questionnaire". C'est une relation un-pour-un forte. Chaque client a son propre profil unique.

### 3. La Gestion Humaine : Client et Libraire

* **Libraire ↔ Client**
    * **Relation :** "Est référent de" / "Gère"
    * **Cardinalités :** `Libraire (1) ---- (*) Client`
    * **Explication :** "Chaque nouvel abonné est assigné à un Libraire". Un libraire gère plusieurs clients (`*`), mais un client n'a qu'un seul libraire référent (`1`).

### 4. La Logistique Mensuelle : Box, Abonnement et Livres

C'est ici que la séparation "Formule" prend tout son sens technique.

* **Abonnement ↔ Box (Sélection)**
    * **Relation :** "Génère"
    * **Cardinalités :** `Abonnement (1) ---- (0..*) Box`
    * **Explication :** Un abonnement actif va générer plusieurs box au fil du temps (une par mois). `0` au début (rien envoyé encore), et `*` car cela dépend de la durée.
    
    *Note : On relie la Box à l'Abonnement plutôt qu'au Client directement pour savoir dans le cadre de quel contrat cette box a été envoyée.*

* **Libraire ↔ Box**
    * **Relation :** "Effectue / Valide"
    * **Cardinalités :** `Libraire (1) ---- (*) Box`
    * **Explication :** C'est le libraire qui crée la sélection (la box). Il en crée plein chaque mois. Une box spécifique est validée par un seul libraire.

* **Box ↔ Livre**
    * **Relation :** "Contient"
    * **Cardinalités :** `Box (*) ---- (2) Livre`
    * **Explication :**
        * Côté Livre (`2`) : Le texte est strict : "**choisir deux livres**". C'est une règle métier forte.
        * Côté Box (`*`) : Un même livre (ex: le dernier Harry Potter) peut se retrouver dans les box de plein de clients différents ce mois-ci.

### Récapitulatif visuel textuel

Pour vous aider à tracer les traits :

| Classe A | Cardinalité A | Relation | Cardinalité B | Classe B |
| :--- | :---: | :---: | :---: | :--- |
| **Client** | 1 | possède | 1..* | **Abonnement** |
| **Abonnement** | * | est de type | 1 | **Formule** |
| **Client** | 1 | a pour profil | 1 | **Questionnaire** |
| **Libraire** | 1 | suit | * | **Client** |
| **Abonnement** | 1 | génère | 0..* | **Box** |
| **Libraire** | 1 | prépare | * | **Box** |
| **Box** | 1 | est lié | 1 | **Selection** |
| **Selection** | * | contient | 2 | **Livre** |

On pourrait mettre la selection comme attribut de box, puisque c'est une relation 1-1. Mais on peut garder pour plus d'évolutivité. 

