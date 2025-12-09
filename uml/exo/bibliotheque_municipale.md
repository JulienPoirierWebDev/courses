## 📚 Scénario : Gestion d'une Bibliothèque Municipale

"Alors, notre principal souci, c'est la gestion des livres et des abonnés. On a un catalogue de milliers d'ouvrages qu'on doit suivre.

Tout d'abord, les **adhésions**. Pour pouvoir emprunter, les gens doivent s'inscrire et devenir **Abonnés**. Ils fournissent leur nom, adresse et une preuve de résidence, et nous créons leur fiche. L'adhésion est annuelle et doit être renouvelée. On doit pouvoir vérifier facilement si l'abonnement d'une personne est toujours **Valide** ou s'il est **Expiré**.

Ensuite, le cœur de l'activité, ce sont les **livres**. Chaque livre dans notre inventaire a un titre, un auteur, un ISBN unique, et une date d'acquisition. Le plus important, c'est de savoir où il est. On peut avoir plusieurs exemplaires du même titre, et chacun a un **numéro de cote** et un statut : **Disponible**, **Emprunté** ou **Mis au rebut**.

Le processus d'**emprunt** est simple : l'Abonné présente sa carte et sélectionne ses livres. Il a droit à un maximum de 5 livres à la fois, et la durée du prêt est fixée à 3 semaines (21 jours). Le système doit vérifier s'il a déjà atteint sa limite de 5 livres et si sa carte est valide avant d'autoriser l'emprunt. Quand l'emprunt est enregistré, la date de retour prévue est calculée automatiquement, et le statut de l'exemplaire passe à **Emprunté**.

Les **retours** doivent aussi être gérés. Quand un livre revient, on le scanne, on met à jour son statut à **Disponible**, et on vérifie s'il y a eu un **retard**. Si un livre est rendu après la date prévue, l'Abonné reçoit une **pénalité** journalière (un petit montant symbolique). Cette pénalité doit être enregistrée sur sa fiche et il doit la payer avant de pouvoir emprunter à nouveau.

Enfin, nous gérons les **réservations**. Si un Abonné veut un livre qui est actuellement emprunté, il peut le **réserver**. Quand l'exemplaire réservé est retourné, le système doit le mettre de côté et envoyer une **notification** à l'Abonné en question. Il a alors 48 heures pour venir le chercher avant que la réservation ne soit annulée ou passe au suivant sur la liste d'attente.

Pour les employés, on a besoin de faire des recherches rapides dans le catalogue et de pouvoir sortir des listes de tous les abonnés ayant des livres en retard."
