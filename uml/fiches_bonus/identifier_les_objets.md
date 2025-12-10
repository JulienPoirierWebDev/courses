### 1\. La technique grammaticale (Le point de départ)

C'est la méthode la plus classique et la plus efficace pour commencer. Prends ta spécification (le texte qui décrit ce que le logiciel doit faire) et analyse les mots :

  * **Les Noms Communs** $\rightarrow$ **Candidats Classes**
      * *Exemple :* "Le **client** passe une **commande** de **produits**."
      * *Classes potentielles :* Client, Commande, Produit.
  * **Les Verbes** $\rightarrow$ **Candidats Méthodes (Responsabilités)**
      * *Exemple :* "Le client **valide** son panier."
      * *Méthode potentielle :* `valider()` dans la classe Panier ou Commande.
  * **Les Adjectifs / Compléments** $\rightarrow$ **Candidats Attributs**
      * *Exemple :* "Un client **premium** achète un produit **rouge**."
      * *Attributs potentiels :* `statut` (pour le client), `couleur` (pour le produit).

### 2\. Le test "Classe vs Attribut"

C'est le dilemme le plus fréquent : *"Est-ce que l'adresse du client est une classe ou juste un texte ?"* Pose-toi ces questions pour chaque nom identifié :

| Question | Verdict |
| :--- | :--- |
| **A-t-il plusieurs propriétés ?** <br>*(Ex: Une adresse a une rue, une ville, un code postal)* | C'est une **Classe**. |
| **Est-ce une simple valeur ?** <br>*(Ex: Un prix, un nom, une date)* | C'est un **Attribut**. |
| **A-t-il un comportement ?** <br>*(Ex: Une adresse doit être validée géographiquement)* | C'est une **Classe**. |
| **Est-il partagé ?** <br>*(Ex: Plusieurs personnes vivent à la même adresse)* | C'est une **Classe** (pour éviter la duplication). |

### 3\. Les 4 catégories d'objets à chercher

Si tu es bloqué, scanne ton projet à la recherche de ces quatre types de concepts. On oublie souvent les deux derniers \!

1.  **Objets Tangibles (Physiques) :** Ce qu'on peut toucher.
      * *Exemples :* Voiture, Livre, Imprimante, Capteur.
2.  **Rôles (Personnes/Acteurs) :** Qui interagit avec le système ?
      * *Exemples :* Utilisateur, Administrateur, Étudiant, Fournisseur.
3.  **Événements / Transactions :** Quelque chose qui se passe à un moment précis et qu'on doit garder en mémoire.
      * *Exemples :* Réservation, Prêt, Commande, Paiement, Session.
      * *Astuce :* C'est souvent une classe qui relie deux autres classes (ex: un `Prêt` relie un `Livre` et un `Adhérent`).
4.  **Lieux / Conteneurs :** Là où les choses sont stockées ou se passent.
      * *Exemples :* Entrepôt, Rayon, Salle de classe, Bibliothèque.

[Image of diagramme de classe UML bibliothèque]

### 4\. Attention aux pièges courants

  * **Le nom au pluriel :** Une classe est un moule pour créer des objets. Elle doit toujours être au singulier.
      * *Non :* `Livres`
      * *Oui :* `Livre`
  * **La "God Class" (Classe Dieu) :** Évite de créer une classe nommée `Système` ou `Manager` qui fait tout. Si une classe a 50 méthodes, c'est qu'elle doit être découpée.
  * **Les éléments d'interface (UI) :** Dans un diagramme de classe "domaine" (métier), on ne met pas les boutons, les fenêtres ou les bases de données. On modélise la logique, pas l'écran.

### 5\. Exemple Concret : Un site de E-commerce

Imaginons cette phrase : *"Un utilisateur ajoute un article dans son panier, puis paye sa commande."*

1.  **Utilisateur** : C'est une personne $\rightarrow$ **Classe**.
2.  **Article** : C'est un objet tangible $\rightarrow$ **Classe**.
3.  **Panier** : C'est un conteneur temporaire $\rightarrow$ **Classe**.
4.  **Commande** : C'est un événement (transaction) $\rightarrow$ **Classe**.
5.  **Paye (Paiement)** : C'est un événement lié à la commande $\rightarrow$ **Classe** (car un paiement a une date, un montant, un statut succès/échec).
6.  **Prix** : C'est juste un nombre $\rightarrow$ **Attribut** de l'Article.


### 6\. Les conteneurs d'autres objets : comment les identifier ? 

Parfois, on a des objets multiples dans notre périmètre d'analyse mais on ne sait pas où les mettre dans le diagramme de classe. 

Pour l'exercice du lasergame : j'ai plusieurs réservations pour un client. Où dois-je stocker l'ensemble des réservations ? Dois-je créer une classe intermédiaire ? 

C'est une question qui touche au cœur de la conception objet : la **répartition des responsabilités**.

La réponse courte est : **Non**, on ne va pas créer systématiquement une classe conteneur "juste pour faire une requête", par exemple pour connaitre le nombre de réservation d'un client.

En revanche, il faut se poser la question : **"Qui possède la liste de ces objets dans mon contexte ?"**.

Voici les deux solutions standards pour modéliser cela dans un diagramme de classe.

---

#### Solution 1 : La classe "Conteneur" (Le parent naturel)

C'est la solution la plus fréquente. Si les objets font partie d'un ensemble plus grand, c'est cet ensemble qui doit porter la méthode de comptage ou de recherche.

**La logique :** Un élève ne sait pas combien d'autres élèves ont les yeux bleus. C'est la **Classe** (ou l'École) qui a la liste des élèves et qui peut les compter.

* **Exemple :** Tu veux connaître le nombre de *Commandes* dont le statut est "En cours".
* **Où mettre la méthode ?** Dans la classe qui contient la liste des commandes, par exemple `Client` ou `Magasin`.

**Dans ton diagramme :**
Imagine une relation **1..*** (Un à Plusieurs).
* Classe `Magasin` (Le conteneur)
* Classe `Commande` (L'élément)

Tu ajoutes la méthode dans `Magasin` :
`+ getNombreCommandesEnCours() : Entier`

> **Règle d'or :** Si une classe A contient une liste de classe B (A $\diamondsuit$-- B), alors les méthodes qui filtrent ou comptent les B vont dans A.

#### Solution 2 : La classe "Gestionnaire" (Pattern Repository/Manager)

Parfois, il n'y a pas de "parent" évident, ou alors tu ne veux pas surcharger la classe parente. Dans les architectures plus avancées (et souvent dans les diagrammes de conception détaillée), on crée une classe technique dédiée à la gestion des données.

On appelle souvent ces classes `Manager`, `Repository` ou `Service`.

* **Exemple :** Tu veux compter des *Utilisateurs* actifs, mais il n'y a pas de classe "Univers" qui contient tous les utilisateurs.
* **La solution :** Tu crées une classe `UtilisateurManager` (ou `UtilisateurRepository`).

**Dans ton diagramme :**
* Classe `Utilisateur` (Contient juste les données : nom, email, statut).
* Classe `UtilisateurRepository` (Contient les méthodes de gestion).
    * `+ trouverParId(id)`
    * `+ compterUtilisateursActifs() : Entier`

---

#### Résumé : Le piège à éviter

Il ne faut jamais mettre une méthode de comptage global à l'intérieur de l'objet lui-même.

**❌ Mauvais design :**
Classe `Commande`
* `date`
* `montant`
* `compterToutesLesCommandesPayees()` $\rightarrow$ *Absurde : une commande unique ne connaît pas ses voisines.*

**✅ Bon design (Approche Conteneur) :**
Classe `DossierClient`
* `listeCommandes`
* `getMontantTotalDepense()` $\rightarrow$ *Logique : le dossier parcourt sa propre liste pour calculer.*

**✅ Bon design (Approche Gestionnaire) :**
Classe `CommandeService`
* `getChiffreAffairesDuMois()` $\rightarrow$ *Logique : le service interroge la base de données.*

**Quelle approche choisir pour ton niveau actuel ?**
Si tu débutes ou que tu fais un diagramme de domaine (analyse), utilise la **Solution 1**. Cherche "l'objet parent" ou le "groupe" et mets la méthode là-bas.

Mais avec le temps et l'habitude, tu voudra modeliser differement et a ce moment-là, tu pourra commencer a utiliser la méthode deux, voir des design patterns structurels. 

Certains design patterns sont expliqués ici : 
https://refactoring.guru/fr/design-patterns/structural-patterns

Par exemple, le bridge montre comment découper une classe en deux, en faisant un "pont", pour alleger sa structure et les héritages possibles. 
https://refactoring.guru/fr/design-patterns/bridge