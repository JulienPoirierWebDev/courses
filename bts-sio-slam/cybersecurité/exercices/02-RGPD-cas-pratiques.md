# Exercice – RGPD appliqué au développement (cas pratiques)

## Objectif

Valider le raisonnement RGPD côté développeur :

* minimisation,
* finalité,
* durée de conservation,
* preuve de conformité,
* lien avec DIC(T).

---

## Contexte

Vous développez une application de réservation d'activités sportives.

Fonctionnalités prévues :

* création de compte
* réservation de séance
* newsletter
* espace administrateur
* historique des actions sensibles

L'équipe produit propose de stocker :

* nom, prénom, email, téléphone
* date de naissance complète
* adresse postale complète
* genre
* profession
* photo de profil obligatoire
* préférences marketing
* historique de navigation complet

---

## Travail demandé

### 1) Minimisation (tableau)

Pour chaque donnée proposée :

* indiquez si elle est **nécessaire**, **optionnelle**, ou **non justifiée**
* justifiez en 1 ligne par rapport à la finalité

### 2) Finalité et base légale (raisonnement)

Donnez une base légale plausible pour :

* création de compte
* réservation
* envoi de newsletter
* journalisation des actions sensibles

📌 Attention : ne pas répondre "consentement" pour tout.

### 3) Consentement (interface)

Proposez les éléments minimaux d'un écran / formulaire pour un consentement newsletter valide.

Attendus :

* formulation claire
* case non pré-cochée
* possibilité de refus
* preuve enregistrée

### 4) Preuve de conformité (technique)

Décrivez ce que l'application doit conserver pour pouvoir prouver le consentement à la newsletter.

### 5) DIC(T)

Choisissez **2 fonctionnalités** du contexte et attribuez un niveau de criticité DIC(T) avec justification :

* réservation de séance
* modification des tarifs en back-office
* consultation du planning public

---

## Restitution attendue (format conseillé)

* tableau (données / finalité / décision)
* réponses courtes structurées
* vocabulaire précis (donnée personnelle, minimisation, preuve, journalisation)

---

## Bonus (si vous voulez monter le niveau)

Proposez :

* une durée de conservation pour les logs de sécurité,
* une durée de conservation pour les préférences marketing,
* une stratégie de purge / archivage.
