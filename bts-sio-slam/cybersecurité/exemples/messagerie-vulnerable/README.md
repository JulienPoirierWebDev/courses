# Messagerie Node.js + SQLite volontairement vulnérable

Ce projet est une **démo pédagogique** pour un cours de cybersécurité.
Il ne doit pas être utilisé en production.

## Fonctionnel
- Deux rôles: `ADMIN` et `USER`
- Connexion
- Liste des utilisateurs / conversations
- CRUD sur les messages:
  - Create: envoi d'un message
  - Read: lecture d'une conversation
  - Update: modification d'un message
  - Delete: suppression d'un message

## Vulnérabilités implémentées volontairement
- **SQL Injection**: requêtes SQL construites par concaténation côté backend
- **XSS stocké**: rendu des messages en `innerHTML` côté frontend

## Installation
```bash
npm install
npm start
```
Puis ouvrir: http://localhost:3000

## Comptes de test
- `admin` / `admin123` (ADMIN)
- `alice` / `alice123` (USER)
- `bob` / `bob123` (USER)

## Exemples de payloads pédagogiques
- XSS stocké (champ message):
```html
<img src=x onerror=alert('XSS')>
```
- SQLi login (pour démonstration):
```text
username: admin' --
password: nimportequoi
```

## Autres vulnérabilités possibles à montrer
- `IDOR` (modifier/supprimer les messages d'autres utilisateurs via l'ID)
- `CSRF` (aucun jeton anti-CSRF)
- `Mots de passe en clair` (pas de hash)
- `Session faible` (secret statique, cookie non sécurisé)
- `Absence de rate-limit` (bruteforce login)
- `Divulgation d'erreurs SQL` dans les réponses API
- `Manque de validation d'entrée` (taille/type/formats)
- `Aucune journalisation de sécurité` (audit incomplet)

## Comment corriger chaque vulnérabilité

### 1) SQL Injection
- Utiliser des requêtes préparées/paramétrées (`?`) au lieu de concaténer des chaînes SQL.
- Valider et typer les entrées avant usage (ex: `parseInt` pour les IDs).
- Appliquer le principe du moindre privilège sur le compte DB.

Exemple:
```js
db.get(
  'SELECT id, username, role FROM users WHERE username = ? AND password = ?',
  [username, password],
  callback
);
```

### 2) XSS stocké
- Ne jamais injecter des données utilisateur avec `innerHTML`.
- Utiliser `textContent` côté front.
- Ajouter une sanitization côté serveur (ex: `sanitize-html`) si un sous-ensemble HTML est autorisé.
- Ajouter une Content Security Policy (CSP) stricte.

Exemple:
```js
const content = document.createElement('div');
content.textContent = msg.content; // pas de HTML interprété
```

### 3) IDOR
- Vérifier côté serveur que l'utilisateur est propriétaire du message (ou ADMIN) avant `UPDATE/DELETE`.
- Ne jamais se baser sur le front pour l'autorisation.

Exemple de logique:
- `USER`: peut agir uniquement sur ses propres messages.
- `ADMIN`: peut agir sur tous.

### 4) CSRF
- Ajouter un token CSRF (`csurf`) pour les requêtes d'état (`POST/PUT/DELETE`).
- Configurer les cookies de session avec `sameSite: 'lax'` ou `strict`.
- Vérifier `Origin/Referer` pour les endpoints sensibles.

Résumé rapide (session + CSRF):
- Le navigateur stocke un cookie de session (identifiant), pas les données complètes de session.
- Les données de session (`req.session`) sont côté serveur dans un session store.
- Dans ce projet, le store est implicite: `MemoryStore` d'Express (en RAM, perdu au redémarrage).
- Le secret `express-session` sert à signer/protéger la session cookie.
- Le token CSRF est généré côté backend à partir d'un secret lié à la session.
- Le front récupère ce token puis le renvoie sur `POST/PUT/DELETE`.
- Le backend vérifie que le token correspond à la session courante; sinon il refuse (`403`).
- Le token CSRF complète la sécurité session/cookie, mais ne remplace pas la protection XSS.

### 5) Mots de passe en clair
- Hasher avec `bcrypt`/`argon2` + salt.
- Ne jamais stocker ni logger les mots de passe en clair.
- Prévoir une politique de rotation et de complexité des mots de passe.

Exemple:
```js
const hash = await bcrypt.hash(password, 12);
const ok = await bcrypt.compare(password, storedHash);
```

### 6) Session faible
- Secret de session robuste via variable d'environnement.
- Cookies avec `httpOnly: true`, `secure: true` (en HTTPS), `sameSite`.
- Régénérer l'ID de session après login (`req.session.regenerate`).
- Durée de session courte + invalidation au logout.

### 7) Absence de rate-limit (bruteforce)
- Ajouter `express-rate-limit` sur `/api/login`.
- Bloquer temporairement après N échecs (par IP et/ou compte).
- Ajouter éventuellement un captcha après plusieurs tentatives.

Détail recommandé:
- Limiter fortement `/api/login` (ex: `5` tentatives / `10 min` par IP).
- Ajouter une protection complémentaire par compte (`username`) pour éviter le contournement via botnet.
- Renvoyer un code `429 Too Many Requests` avec un message générique.
- Journaliser les dépassements de limite (IP, username, horodatage).
- Sur endpoint sensible (reset password, admin), utiliser des seuils encore plus stricts.

Exemple Express (base):
```js
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts, retry later' }
});

app.use('/api/login', loginLimiter);
```

Complément anti-bruteforce:
- Utiliser un store partagé (Redis) pour une vraie efficacité multi-instances.
- Ajouter un backoff progressif (attente croissante après échecs).
- Après X échecs sur un compte: verrouillage temporaire + alerte.

### 8) Divulgation d'erreurs SQL
- Ne pas renvoyer `err.message` au client en production.
- Retourner des erreurs génériques (`500 internal error`) côté API.
- Logger le détail côté serveur uniquement.

### 9) Validation d'entrée insuffisante
- Valider toutes les entrées avec un schéma (`zod`, `joi`, `express-validator`).
- Imposer limites de taille (ex: longueur max d'un message).
- Refuser les types inattendus et normaliser les données.

### 10) Journalisation sécurité absente
- Logger les événements sensibles: login succès/échec, actions admin, suppression message.
- Conserver horodatage, user id, IP, user-agent.
- Mettre en place alertes (pics d'échecs login, comportements anormaux).

Détail recommandé:
- Distinguer logs applicatifs et logs sécurité.
- Format structuré JSON (facile à requêter dans ELK/Loki/Splunk).
- Ne jamais logger de secrets: mot de passe, token CSRF, cookie de session, JWT complet.
- Ajouter un `requestId` par requête pour corréler les événements.
- Prévoir rétention + rotation des logs (conformité RGPD + exploitation SOC).

Événements sécurité minimaux à tracer:
- `auth.login.success`
- `auth.login.failure`
- `auth.rate_limit.triggered`
- `message.delete`
- `admin.action`
- `auth.session.revoked`

Exemple de log sécurité:
```json
{
  "event": "auth.login.failure",
  "timestamp": "2026-02-28T10:15:00Z",
  "ip": "203.0.113.10",
  "username": "alice",
  "reason": "invalid_credentials",
  "requestId": "req-7f3a"
}
```

Alerting utile:
- Alerte si > N échecs login/minute.
- Alerte si un compte tente des actions ADMIN sans rôle ADMIN.
- Alerte si suppressions de messages massives sur une courte période.

## Bonnes pratiques complémentaires (production)
- Activer `helmet` pour les en-têtes HTTP de sécurité.
- Forcer HTTPS partout (HSTS, redirection HTTP -> HTTPS).
- Ajouter des tests de sécurité automatisés (lint sécurité, SAST, tests d'intrusion).
- Mettre en place des sauvegardes et une politique de restauration DB.
