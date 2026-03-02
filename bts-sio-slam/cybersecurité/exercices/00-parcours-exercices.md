# Parcours d'exercices (Root-Me / TryHackMe + exos locaux)

## Objectif

Proposer un parcours progressif pour **pratiquer** les notions des cours :

* menaces Web (XSS, CSRF, SQLi),
* authentification / sessions / tokens,
* raisonnement sécurité (DIC(T), RGPD, preuve),
* journalisation et détection.

📌 Ce document **ne contient pas de solution**.  
Il sert de guide de pratique, de révision et de progression.

---

## Règles de travail (important)

* Travailler uniquement sur des plateformes de TP légitimes (Root-Me, TryHackMe, environnements locaux).
* Ne jamais reproduire ces techniques sur un système réel sans autorisation.
* Toujours documenter :
  * l'objectif du test,
  * la faille observée,
  * l'impact (DIC(T)),
  * la mesure corrective.

---

## Correspondance rapide avec les blocs du cours

| Bloc | Thème | Exos externes | Exos locaux |
| --- | --- | --- | --- |
| Bloc 0 | Introduction / DIC(T) | peu adapté | oui |
| Bloc 1 | RGPD / preuve | peu adapté | oui |
| Bloc 2 | Menaces / priorisation | oui | oui |
| Bloc 3 | Solutions techniques | oui | oui |
| Bloc 3 bis | SQL & sécurité | oui | oui |
| Bloc JWT/CSRF | Tokens / sessions | oui | oui |
| Bloc 4 | Logs / preuve | partiel | oui |

---

## 1) Root-Me (exercices ciblés Web)

### XSS (bloc 2 / bloc 3)

* Root-Me – Web Client – `XSS - Stored 1`  
  <https://www.root-me.org/en/Challenges/Web-Client/XSS-Stored-1>
* Root-Me – Web Client – `XSS - DOM Based`  
  <https://www.root-me.org/en/Challenges/Web-Client/XSS-DOM-Based>

Compétences à travailler :

* type de XSS (stocké / DOM),
* impact réel (session, interface, action),
* contre-mesures (échappement, sanitization, CSP).

### CSRF (bloc 2 / bloc JWT-CSRF)

* Root-Me – Web Client – `CSRF - 0 protection`  
  <https://www.root-me.org/en/Challenges/Web-Client/CSRF-0-protection>
* Root-Me – Web Client – `CSRF - Token bypass` (niveau plus avancé, selon progression)  
  Rechercher dans la catégorie Web Client si l'intitulé évolue.

Compétences à travailler :

* préconditions d'un CSRF,
* rôle des cookies de session,
* protection par token CSRF + validation serveur.

### SQL injection (bloc 2 / bloc 3 bis SQL)

* Root-Me – Web Server – `SQL injection - Authentication`  
  <https://www.root-me.org/en/Challenges/Web-Server/SQL-injection-authentication>
* Root-Me – Web Server – `SQL injection - Numeric` (ou challenge SQLi équivalent débutant)  
  Rechercher dans la catégorie Web Server si le slug varie.

Compétences à travailler :

* comprendre la vulnérabilité (concaténation),
* distinguer démonstration d'attaque et correction,
* proposer la remédiation (requêtes paramétrées, moindre privilège, logs).

---

## 2) TryHackMe (parcours guidés)

### Fondations / vision d'ensemble (bloc 0 / bloc 2)

* TryHackMe – `OWASP Top 10` (room de synthèse)
  <https://tryhackme.com/room/owasptop10>
* TryHackMe – `Burp Suite: The Basics` (prise en main utile pour Web)
  <https://tryhackme.com/room/burpsuitebasics>
  
  * TryHackMe – `De manière générale, les free rooms` (Pas mal de sujet)
  <https://tryhackme.com/resources/blog/free_path>
  

Compétences à travailler :

* vocabulaire des vulnérabilités,
* observation des requêtes/réponses,
* lien entre faille observée et impact.

### SQL injection (bloc 2 / bloc 3 bis SQL)

* TryHackMe – `SQL Injection` (room dédiée)
  <https://tryhackme.com/room/sqlinjectionlm>
* TryHackMe – `OWASP Juice Shop` (plus global, inclut SQLi / auth / XSS selon scénarios)
  <https://tryhackme.com/room/owaspjuiceshop>

Compétences à travailler :

* repérer les points d'injection,
* expliquer les causes côté code,
* proposer les corrections adaptées à l'examen.

### Auth / sessions / tokens (bloc 3 / JWT-CSRF)

* TryHackMe – `Authentication Bypass`
  <https://tryhackme.com/room/authenticationbypass>
* TryHackMe – `JWT Security` (si disponible dans votre plan / abonnement ; sinon faire la partie JWT via lecture + TP local)
  Rechercher `JWT` dans TryHackMe (les rooms évoluent).

Compétences à travailler :

* authentification vs autorisation,
* risque session/token,
* durée de vie, stockage, contrôle serveur.

### Journalisation / détection (bloc 4)

* TryHackMe – `Session Security` / `Security Operations` / `SOC Level 1` (selon votre parcours)
* TryHackMe – `Unified Kill Chain` (raisonnement incident, corrélation, défense)
  <https://tryhackme.com/room/unifiedkillchain>

📌 Les rooms exactes changent souvent sur la partie SOC/logs : privilégier les modules qui font manipuler des **logs** et de la **corrélation d'événements**.

---

## 3) Exos locaux (à faire dans ce dossier) pour les notions moins couvertes

### Déjà présent

* `bts-sio-slam/cybersecurité/exercices/05-SQL.md`

### Ajoutés pour compléter le module

* `bts-sio-slam/cybersecurité/exercices/02-RGPD-cas-pratiques.md`
* `bts-sio-slam/cybersecurité/exercices/07-logs-detection-preuve.md`

---

## 4) Parcours conseillé (ordre)

1. `OWASP Top 10` (TryHackMe) + relecture `03-Modélisation&priorisation.md`
2. XSS / CSRF (Root-Me Web Client) + relecture `03` et `06`
3. SQLi (Root-Me/TryHackMe) + relecture `05-SQL.md`
4. TP local API SQL Express (`exercices/05-SQL.md`)
5. Exos locaux RGPD / logs (dossier `exercices`)
6. Reprise orale : actif → risque → impact → mesure → preuve

---

## 5) Grille d'auto-évaluation (très utile BTS)

Après chaque exercice, répondre en 5 lignes maximum :

1. Quel est l'actif principal ?
2. Quelle vulnérabilité est exploitée ?
3. Quel axe DIC(T) est principal ?
4. Quelle mesure prioritaire corrige le problème ?
5. Quelle preuve / journalisation permettrait de démontrer l'incident ?
