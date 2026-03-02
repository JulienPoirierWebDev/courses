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

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* définir ce qu'un log exploitable doit contenir,
* distinguer journalisation utile et sur-collecte risquée,
* interpréter des signaux d'attaque à partir des logs,
* expliquer ce qui rend une preuve numérique contestable ou défendable.

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

Complément très utile en pratique :

* **Identifiant de corrélation** (`request_id`, `trace_id`)
  pour relier plusieurs logs d'une même requête / action

📌 Formule à retenir telle quelle :

> *Un log doit permettre de reconstituer un événement sans ambiguïté.*

---

### Exemple de log structuré (JSON)

```json
{
  "event_time": "2026-02-26T10:14:22Z",
  "request_id": "req_9f31",
  "actor_id": 42,
  "role": "ADMIN",
  "action": "UPDATE_PRICE",
  "resource": "tarif:12",
  "endpoint": "PUT /api/tarifs/12",
  "result": "SUCCESS",
  "ip": "203.0.113.8"
}
```

📌 Le format exact importe moins que la capacité à **reconstituer l'action**.

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

### Mini cas d'analyse (à verbaliser)

Cas 1 :

* `1` échec de connexion sur un compte, puis succès quelques secondes plus tard

Conclusion probable :

* erreur utilisateur (mot de passe mal saisi), pas forcément une attaque

Cas 2 :

* `300` échecs en `2` minutes sur `50` comptes depuis une même IP

Conclusion probable :

* attaque automatisée (force brute / spraying / stuffing selon le motif)

📌 L'attendu n'est pas de "deviner", mais **d'argumenter avec les traces**.

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

Compléments importants :

* horodatage en **UTC** (plus simple à corréler),
* synchronisation d'horloge (NTP) pour éviter des traces incohérentes.

---

### Garantir l’intégrité des preuves

Bonnes pratiques attendues :

* accès restreint aux logs,
* protection contre la modification,
* séparation des rôles (lecture / écriture),
* éventuellement empreinte (hash) des journaux.

📌 Objectif central :

> empêcher toute remise en cause ultérieure des faits.

Exemples de mesures techniques (niveau cours) :

* accès restreint en lecture aux personnes habilitées,
* séparation entre production des logs et consultation,
* stockage append-only / export régulier,
* empreinte (hash) périodique des journaux sensibles.

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

---

## Références externes (logs / preuve / bonnes pratiques)

* OWASP Logging Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html>
* CNIL – Guide RGPD du développeur : <https://www.cnil.fr/fr/guide-rgpd-du-developpeur>
* ANSSI – Guide d'hygiène informatique : <https://cyber.gouv.fr/publications/guide-dhygiene-informatique>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — Cloudflare : postmortem d'une panne majeure (2025)

**Source** : Cloudflare, *Cloudflare outage on November 18, 2025* (**18 novembre 2025**)  
<https://blog.cloudflare.com/18-november-2025-outage/>

Intérêt pédagogique :

* excellent exemple de **postmortem** détaillé (chronologie, hypothèses initiales, cause racine, remédiations),
* permet de travailler la distinction incident / attaque,
* très utile pour parler de **traçabilité**, **horodatage**, **preuve technique** et **disponibilité**.

### Encadré 2 — CISA et partenaires : bonnes pratiques de logging (2024)

**Source** : CISA, *Best Practices for Event Logging and Threat Detection* (**21 août 2024**)  
<https://www.cisa.gov/resources-tools/resources/best-practices-event-logging-and-threat-detection>

Intérêt pédagogique :

* guide concret pour construire une journalisation exploitable,
* permet d'illustrer le compromis entre **visibilité** et **contraintes de ressources**,
* très bon complément aux exigences "preuve + détection".
