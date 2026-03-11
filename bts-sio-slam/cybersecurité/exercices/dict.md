# Exo 1

# 📚 Contexte

Une startup lance **CinéPass+**, une plateforme de cinéma avec :

* réservation en ligne
* carte d’abonnement rechargeable
* création de listes de films
* like des listes d’autres utilisateurs
* espace administrateur

L’équipe technique est pressée. Certaines fonctionnalités ont été développées rapidement.

Vous êtes chargé(e) d’auditer les user stories avant mise en production.

---

# 🎯 Consigne pour les apprenants

Pour chaque user story :

1. Identifier les dimensions DICT concernées
2. Évaluer le niveau de risque (Faible / Moyen / Élevé)
3. Justifier techniquement
4. Proposer une mesure de sécurisation

---

# 📝 User Stories à analyser

---

## US1 — Connexion simplifiée

> En tant qu’utilisateur, je peux me connecter avec mon email et mot de passe.
> Les mots de passe sont stockés en base en texte brut pour faciliter le debug.

Pour l'analyse DICT : 

Disponibilité : faible
Intégrité : élevé
Confidentialité : élevé
Preuve : moyen

Dès lors que les mots de passe sont sauvegardé en clair, il est facile de faire un lien entre un utilisateur et un mot de passe. Il est nécessaire de hasher les MDP. 
De plus, l'absence de double auth rend plus simple l'utilisation d'un mot de passe volé. 

Stocker des preuves de connexion peut aussi permettre d'identifier plus facilement si la totalité de la BDD a été compromise. 

L'impact d'une faille d'un vol d'une BDD avec les mots de passe en brut est l'image de marque de l'entreprise car tous les utilisateurs seront impactés et les mots de passe en clair seront visibles de tous. De plus, c'est un fort risque juridique vis a vis du RGPD car la BDD n'a pas été protégé dans les règles de l'art. 

---

## US2 — Modification du solde

> En tant qu’utilisateur, je peux recharger ma carte d’abonnement.
> Le montant est envoyé par le front-end et directement appliqué en base.

---

## US3 — Page publique des profils

> En tant qu’utilisateur, je peux consulter le profil public d’un autre utilisateur.
> L’API renvoie toutes les informations du compte (email, date de naissance, historique des paiements).

---

## US4 — Suppression de compte

> En tant qu’administrateur, je peux supprimer un compte utilisateur.
> Aucune journalisation n’est mise en place.

---

## US5 — API de réservation

> L’API de réservation ne possède pas de limitation de requêtes.
> Aucun mécanisme anti-DDoS n’est prévu.

---

## US6 — Historique des paiements

> Les paiements sont stockés mais aucune sauvegarde automatique n’est réalisée.

---

## US7 — Like de listes

> Un utilisateur peut liker une liste autant de fois qu’il le souhaite en appelant directement l’API.



# Exo 2



# 📚 Contexte

Application : **MediLink**

Plateforme permettant :

* prise de rendez-vous médicaux
* consultation de documents (ordonnances, résultats)
* messagerie patient ↔ médecin
* facturation

Données traitées :

* identité
* numéro de sécurité sociale
* historique médical
* coordonnées bancaires

Vous intervenez avant la mise en production.

---

# 🎯 Consigne pour les apprenants

Pour chaque user story :

1. Identifier les dimensions DICT impactées
2. Évaluer le niveau de criticité (Faible / Moyen / Élevé / Critique)
3. Justifier techniquement
4. Proposer une mesure réaliste

---

# 📝 User Stories à analyser

---

## US1 — Accès rapide médecin

> En tant que médecin, je peux accéder aux dossiers patients sans double authentification pour éviter de perdre du temps.

---

## US2 — Téléchargement des documents

> Les documents médicaux sont accessibles via une URL directe du type :
> `/documents/ordonnance_4587.pdf`
> Aucune vérification d’autorisation n’est faite côté serveur.

---

## US3 — Messagerie interne

> Les messages entre patients et médecins sont stockés en base non chiffrés.

---

## US4 — Historique des consultations

> Les consultations peuvent être modifiées par les médecins, mais aucune trace des modifications n’est conservée.

---

## US5 — Paiement en ligne

> Lors du paiement, le montant est calculé côté front-end avant d’être envoyé à l’API.

---

## US6 — Serveur unique

> L’application est hébergée sur un seul serveur sans système de réplication ni sauvegarde automatique.

---

## US7 — Export Excel

> Un administrateur peut exporter tous les patients en fichier Excel (email, téléphone, pathologie).
> Le fichier est généré et stocké temporairement dans `/tmp`.

---
