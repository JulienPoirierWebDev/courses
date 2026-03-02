

# 🧭 BLOC 0 – Introduction à la cybersécurité. 

Ce cours a pour objectif de vous rendre le plus autonome et efficace possible dans le cadre du passage de l'examen du bloc "Cybersécurité des services informatiques". 

L'épreuve correspondante est un exament de 4 heures reposant sur l'analyse d'un corpus documentaire, via des questions ciblées. 

---

## Ce que vous saurez faire à la fin de cette introduction

À la fin de ce bloc 0, vous devrez être capable de :

* expliquer pourquoi la cybersécurité est évaluée en SLAM (et pas seulement en réseau),
* utiliser la grille **DIC(T)** pour analyser une fonctionnalité,
* structurer une réponse d'examen en 4 étapes (actif → risque → impact → mesure),
* distinguer une réponse "catalogue" d'une réponse argumentée.

---

## 0.1 Pourquoi la cybersécurité est évaluée en SLAM

En BTS SIO SLAM, la cybersécurité **n’est pas un domaine annexe** ni une spécialité réseau.
Elle concerne directement le travail du développeur, car il est responsable :

* du **code** qu’il écrit,
* des **données** qu’il manipule,
* des **accès** qu’il autorise,
* et des **preuves** qu’il laisse (ou non).

La cybersécurité évaluée à l’examen ne consiste donc pas à :

* lister des attaques,
* réciter des définitions,
* empiler des solutions techniques.

(Même s'il faut connaitre un certain nombre de choses pour pouvoir raisonner)

👉 Elle consiste à **raisonner**.

---

## 0.2 Ce que le jury attend réellement

Le jury n’évalue pas si une solution est « la meilleure du monde », mais si elle est :

* **cohérente avec le contexte**
* **justifiée par un risque réel**
* **proportionnée**
* **défendable juridiquement**

Une bonne réponse est une réponse qui montre que l’étudiant sait :

* identifier ce qui est critique,
* prioriser,
* et expliquer ses choix.

On peut dire qu'il y a des "red flags" a tout système informatique : connexion non sécurisée, mot de passe en clair, pas de sauvegarde de BDD, etc. Il faut connaitre ses "classiques" et savoir raisonner dans une situation donnée. 

---

## 0.3 La grille de lecture fondamentale : DIC(T)

Pour raisonner correctement en cybersécurité, on utilise une **grille de lecture simple et universelle**, que l’on retrouvera tout au long du cours :

- Disponibilité  
- Intégrité  
- Confidentialité  
- Traçabilité  

Cette grille sert à **analyser et prioriser les risques** liés à une activité, une fonctionnalité ou une user story.

L’objectif n’est pas de tout sécuriser au même niveau, mais de **comprendre ce qui est critique, ce qui l’est moins, et pourquoi**.

---

### À ne pas confondre (vocabulaire de base)

Avant de continuer, voici 4 mots souvent mélangés :

* **Menace** : ce qui peut nuire (attaquant, erreur, panne, abus)
* **Vulnérabilité** : faiblesse exploitable (bug, mauvais réglage, absence de contrôle)
* **Attaque** : exploitation concrète d'une vulnérabilité
* **Risque** : probabilité + impact d'un événement défavorable

Exemple SLAM :

* menace : attaquant externe
* vulnérabilité : formulaire sans protection
* attaque : injection SQL
* risque : fuite de données clients

📌 Cette distinction vous aide à répondre plus précisément au jury.

---

### Échelle de criticité utilisée

Pour chaque axe DIC(T), on évalue le **niveau de criticité** :

- **Faible** : impact limité, peu de conséquences en cas de problème  
- **Modéré** : impact réel mais maîtrisable  
- **Élevé** : conséquences importantes pour l’organisation  
- **Critique** : conséquences graves (financières, juridiques, image)

Cette échelle permet :
- de comparer les activités entre elles,
- de hiérarchiser les efforts de sécurité,
- de justifier les choix techniques et organisationnels.

---

### Les 4 axes à toujours avoir en tête

#### 1️⃣ Disponibilité

> Le service et les données sont-ils **accessibles quand on en a besoin** ?

Exemples :

* ransomware,
* saturation par tentatives de connexion,
* blocage abusif de comptes,
* application inutilisable.

Une atteinte à la disponibilité = **service hors service**.

---

#### 3️⃣ Intégrité

> Qui a le droit de **modifier** l’information ?

Exemples :

* modification d’un montant,
* falsification d’un contrat,
* altération d’un consentement RGPD,
* injection SQL modifiant des données.

Une atteinte à l’intégrité = **fraude ou falsification**.

---

#### 2️⃣ Confidentialité

> Qui a le droit de **voir** l’information ?

Exemples concrets :

* données personnelles des clients,
* informations médicales,
* jetons d’authentification (JWT),
* journaux contenant des identifiants.

Une atteinte à la confidentialité = **fuite d’information**.

---

#### 4️⃣ Traçabilité / Preuve

> Peut-on **prouver** ce qui s’est passé ?

Exemples :

* savoir qui a accédé à une donnée,
* prouver qu’un consentement a été donné,
* identifier l’origine d’une action,
* produire des logs exploitables juridiquement.

Sans traçabilité :

* pas de preuve,
* pas de responsabilité claire,
* pas de défense possible.

📌 **Ce 4ᵉ axe est central en BTS** : il relie la technique au RGPD et au droit.

### Exemple 1 : consultation des films à l’affiche

Un utilisateur souhaite consulter les films actuellement à l’affiche dans un cinéma.

- **Disponibilité : Critique**  
- **Intégrité : Faible**  
- **Confidentialité : Faible**  
- **Traçabilité : Faible**  

**Explication :**  
Cette fonctionnalité doit être très disponible, car elle constitue un service de base pour les utilisateurs.  
Une intégrité minimale reste nécessaire afin d’éviter l’affichage d’informations erronées. 
Les données affichées sont publiques et non sensibles, ce qui limite les enjeux de confidentialité.  
La traçabilité des accès n’est pas un enjeu majeur, mais peut exister sous forme de statistiques anonymisées. 

---

### Exemple 2 : modification du prix des billets par un administrateur

Un administrateur souhaite modifier le prix des billets vendus en ligne.

- **Disponibilité : Modéré**  
- **Intégrité : Critique**  
- **Confidentialité : Faible**  
- **Traçabilité : Critique**  

**Explication :**  
La fonctionnalité doit rester disponible, mais ce n’est pas l’enjeu principal.  
L’intégrité est critique : une modification non autorisée ou erronée peut entraîner une perte financière et nuire à la crédibilité de l’entreprise.  
Le prix affiché n’est pas une donnée confidentielle, mais l’action de modification constitue une opération sensible.  
Une traçabilité forte est indispensable afin de savoir qui a effectué la modification, quand et dans quel contexte, notamment en cas d’incident ou d’attaque.

---

## 0.4 À quoi sert cette grille dès maintenant ?

Cette grille permet de répondre correctement à **presque toutes les questions de cybersécurité** :

* Qu’est-ce qu’on protège ?
* Quel est le risque principal ?
* Quelle mesure est prioritaire ?
* Pourquoi cette solution plutôt qu’une autre ?

👉 À l’examen, **penser en DIC(T)** permet d’éviter :

* les réponses vagues,
* les listes de solutions sans lien,
* les hors-sujets techniques.

---

## 0.5 Méthode attendue à l’examen.

Face à une situation donnée, la démarche attendue est toujours la même :

1. Identifier l’**actif** (donnée, accès, service, preuve)
2. Identifier l’axe principal concerné :

   * Confidentialité ?
   * Intégrité ?
   * Disponibilité ?
   * Traçabilité ?
   On peut retenir plusieurs axes, notamment lorsque l'actif est trés sensible.
3. Expliquer **l’impact métier ou juridique**
4. Proposer une **mesure cohérente et réaliste**

📌 Une réponse courte mais structurée vaut **mieux** qu’une réponse longue et floue. Donc utiliser clairement cette grille dans vos réponses peut être judicieux : mieux vaut être un peu mécanique dans son approche, cela montre aussi une méthode et un professionnalisme. 
---

### Exemple de réponse d'examen : insuffisante vs attendue

**Réponse insuffisante (trop vague)**

> "Il faut sécuriser l'application avec du HTTPS, des logs et des mots de passe forts."

Pourquoi c'est faible :

* ne dit pas **quel actif** est protégé,
* ne dit pas **quel risque** est prioritaire,
* empile des solutions sans justification.

**Réponse attendue (courte mais structurée)**

> "L'actif principal est l'accès administrateur (Confidentialité / Intégrité). Le risque prioritaire est l'usurpation de compte. L'impact est une modification frauduleuse des tarifs. Je priorise donc MFA + limitation de tentatives + journalisation des actions sensibles afin de réduire la compromission et de conserver une preuve."

📌 Le jury attend surtout le **raisonnement**, pas une liste de buzzwords.

---

## 0.6 Ce que nous ferons dans la suite du cours

* Le **bloc 1** expliquera *pourquoi* ces protections sont nécessaires (RGPD).
* Le **bloc 2** reviendra en détail sur cette grille DIC(T) pour :

  * modéliser les menaces,
  * prioriser les risques,
  * comprendre les attaques.
* Les **blocs 3 et 4** montreront *comment* les développeurs mettent en place ces protections :

  * par le code,
  * la base de données,
  * les rôles,
  * les logs et les preuves.

Transition :

> Nous avons maintenant la méthode de raisonnement (**DIC(T)**). Le bloc suivant apporte le cadre juridique (RGPD) qui explique pourquoi certaines protections et certaines preuves ne sont pas seulement "utiles", mais nécessaires.

---

### 🧠 À retenir dès maintenant

> **La cybersécurité n’est pas une liste de techniques.**
> C’est une manière structurée de réfléchir aux risques, aux données et aux responsabilités.

---

## Références externes (pour aller plus loin)

* CNIL – Guide RGPD du développeur : <https://www.cnil.fr/fr/guide-rgpd-du-developpeur>
* OWASP Cheat Sheet Series (vue d'ensemble) : <https://cheatsheetseries.owasp.org/>
* ANSSI – Hygiène informatique (bonnes pratiques générales) : <https://cyber.gouv.fr/publications/guide-dhygiene-informatique>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — ENISA Threat Landscape 2025 (rapport UE)

**Source** : ENISA, *ENISA Threat Landscape 2025* (publication du **1 octobre 2025**, révision **9 janvier 2026**)  
<https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025>

Ce que cela apporte en cours :

* une vue d'ensemble des menaces en Europe (ransomware, DDoS, etc.),
* un support pour montrer que les priorités changent selon les secteurs,
* un bon point d'appui pour justifier la logique **DIC(T)**.

### Encadré 2 — Verizon DBIR 2025 (rapport d'incidents réels)

**Source** : Verizon, *2025 Data Breach Investigations Report (DBIR)* (édition 2025)  
<https://www.verizon.com/business/resources/reports/dbir/>

Ce que cela apporte en cours :

* des statistiques issues d'incidents réels,
* des vecteurs d'attaque initiaux utiles pour prioriser,
* un support concret pour montrer qu'une réponse sécurité doit être **contextualisée**.
