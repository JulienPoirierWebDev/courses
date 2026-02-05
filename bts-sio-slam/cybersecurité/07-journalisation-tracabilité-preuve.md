# 🧾 BLOC 4 – Journalisation, traçabilité et preuve numérique

*(Comprendre, détecter, prouver, se défendre juridiquement)*

## Idée centrale du bloc

Sécuriser un système **ne suffit pas**.
Un système réellement sécurisé doit permettre de :

* **détecter** un comportement anormal,
* **comprendre** ce qui s’est produit,
* **démontrer** les faits,
* **se défendre juridiquement** si nécessaire.

👉 Sans journalisation fiable, **aucune preuve n’existe**, même si la sécurité technique est bonne.

---

## Pourquoi la journalisation est centrale en cybersécurité SLAM

La journalisation est un **outil transversal**, à la fois technique, métier et juridique.

Elle sert à :

* détecter une attaque ou un abus,
* analyser un incident après coup,
* prouver qu’une action a eu lieu,
* engager ou dégager une responsabilité.

Sans logs exploitables :

* une attaque peut rester invisible,
* une fraude peut être impossible à prouver,
* une organisation ne peut pas démontrer sa conformité RGPD.

📌 À l’examen, le jury valorise fortement les réponses qui font le lien :

> **journalisation → preuve → responsabilité**

---

## Journalisation utile : quoi enregistrer (et quoi éviter)

### Les informations indispensables dans un log

🟥 **Attendu explicite à l’examen**

Un log exploitable doit permettre de répondre à cinq questions fondamentales :

* **Qui**
  utilisateur identifié, compte technique, rôle applicatif
* **Quand**
  date et heure précises (horodatage fiable)
* **Où**
  application, API, endpoint, éventuellement adresse IP
* **Quoi**
  action réalisée (connexion, modification, suppression, accès)
* **Résultat**
  succès, échec, refus, erreur

📌 Formule à retenir telle quelle :

> *Un log doit permettre de reconstituer un événement sans ambiguïté.*

---

### Ce qu’il ne faut pas journaliser

⚠️ **Piège classique, très sanctionné**

Il ne faut jamais journaliser :

* des mots de passe,
* des secrets (tokens complets, clés),
* des données sensibles en clair,
* du contenu métier inutilement dupliqué,
* des informations sans finalité précise.

Lien direct avec le RGPD :

* principe de **minimisation**,
* respect de la confidentialité,
* limitation de la conservation.

📌 Message clé :

> Un bon log est **utile**, pas exhaustif.

---

## Journalisation et RGPD : trouver le bon équilibre

Le RGPD **impose** une traçabilité minimale, mais **interdit la sur-collecte**.

L’équilibre attendu est le suivant :

* journaliser les **accès et actions sensibles**,
* limiter la quantité de données stockées,
* définir une **durée de conservation** claire des logs,
* restreindre l’accès aux journaux.

📌 Phrase-clé parfaite examen :

> *Les logs doivent être suffisants pour constituer une preuve, mais limités pour respecter le RGPD.*

---

## Analyse des journaux : détecter des comportements anormaux

🟥 **Compétence SLAM fortement valorisée**

Les logs ne servent pas uniquement à être stockés.
Ils doivent être **analysés** pour détecter des anomalies.

---

### Exemples de signaux d’alerte

* tentatives de connexion répétées,
* échecs fréquents sur un même compte,
* accès en dehors des horaires habituels,
* accès à des ressources incohérentes avec le rôle,
* actions massives en peu de temps.

Axes DIC(T) concernés :

* **Disponibilité** (attaques automatisées),
* **Traçabilité** (reconstruction des faits).

---

### Exploitation des logs via SQL

Compétences attendues :

* agrégation (`COUNT`),
* regroupement (`GROUP BY`),
* filtrage par période,
* identification de comportements récurrents.

📌 Le jury n’évalue pas seulement la requête, mais surtout :

> la capacité à **interpréter les résultats** et à en tirer une conclusion.

---

## Différencier une erreur utilisateur d’une attaque

Cette distinction est **essentielle à l’examen**.

### Erreur utilisateur

* ponctuelle,
* cohérente avec un usage normal,
* impact limité,
* pas de répétition systématique.

### Attaque

* répétée,
* structurée,
* visant plusieurs comptes ou ressources,
* suivant un schéma identifiable.

📌 Attendu du jury :

> savoir **argumenter**, pas juste affirmer.

---

## Preuve numérique et exploitabilité juridique

🟥 **Bloc très discriminant**

Une preuve numérique exploitable doit être :

* **fiable** (source maîtrisée),
* **intègre** (non modifiable),
* **horodatée**,
* **attribuable** (liée à une identité ou un rôle).

Sans ces éléments, la preuve peut être **contestée**.

---

### Garantir l’intégrité des preuves

Bonnes pratiques attendues :

* accès restreint aux logs,
* protection contre la modification,
* séparation des rôles (lecture / écriture),
* éventuellement empreinte (hash) des journaux.

📌 Objectif central :

> empêcher toute remise en cause ultérieure des faits.

---

### Lien direct avec le RGPD

Les preuves numériques permettent notamment de :

* démontrer un consentement,
* justifier un accès à des données,
* documenter une violation de données,
* répondre à une demande d’autorité.

Sans preuve :

* l’organisation est en faute,
* même si l’intention était correcte.

---

## Réaction à incident : vision attendue côté SLAM

Sans entrer dans un plan de crise complexe, un développeur SLAM doit comprendre que :

* les logs servent à **analyser un incident**,
* certaines réactions doivent être **automatiques** et proportionnées.

Exemples cohérents :

* désactivation temporaire d’un compte,
* alerte administrateur,
* renforcement temporaire de la journalisation,
* conservation spécifique des traces.

📌 Message clé :

> Une bonne réaction est **mesurée**, pas excessive.

---

## Synthèse globale du cours

À ce stade, la logique est complète :

* **DIC(T)** : comment raisonner,
* **RGPD** : pourquoi protéger,
* **Menaces** : contre quoi,
* **Défenses** : comment limiter,
* **Preuve** : comment démontrer.

👉 La cybersécurité SLAM devient :

> une démarche cohérente, techniquement solide et juridiquement défendable.

---

## 🧠 À retenir absolument (examen)

* Un système non journalisé est **indéfendable**
* Les logs servent autant au **technique** qu’au **juridique**
* Trop de logs = risque RGPD
* Pas assez de logs = absence de preuve

