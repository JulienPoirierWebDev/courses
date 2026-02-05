# 🔐 Jetons de sécurité en application Web & API

## Pourquoi des jetons ?

Un **jeton** est une information temporaire utilisée pour :

* prouver une identité,
* autoriser une action,
* protéger une requête.

👉 Un jeton **ne remplace jamais une politique de sécurité**,
👉 il sert à **appliquer** cette politique.

---

## 🪪 JWT – JSON Web Token

### À quoi sert un JWT ?

Un **JWT** est un jeton **porteur d’identité et de droits**, utilisé principalement pour :

* authentifier un utilisateur,
* sécuriser des API,
* éviter l’usage de sessions serveur classiques.

👉 Il est très utilisé dans les architectures **API / SPA / mobile**.

---

### Structure d’un JWT

Un JWT contient **3 parties**, encodées en Base64 :

```
HEADER.PAYLOAD.SIGNATURE
```

#### Header

* type du token (`JWT`)
* algorithme de signature (`HS256`, `RS256`…)

#### Payload (claims)

* identité (`sub`)
* rôles
* dates (`iat`, `exp`)
* informations applicatives

📌 Le payload est **lisible**, pas chiffré.

#### Signature

* garantit l’intégrité du token
* empêche sa modification

---

### Exemple de payload JWT

```json
{
  "sub": 42,
  "role": "USER",
  "iat": 1710000000,
  "exp": 1710003600
}
```

👉 Toute modification invalide la signature.

---

### JWT et sécurité

#### Ce que fait un JWT

* prouve l’identité,
* transporte des rôles,
* permet l’authentification **stateless**.

#### Ce que ne fait PAS un JWT

* ne chiffre pas les données,
* ne remplace pas les contrôles d’accès,
* ne protège pas contre le XSS,
* ne protège pas contre le CSRF par défaut.

📌 Message clé :

> Un JWT valide n’est pas une autorisation suffisante.

---

### Bonnes pratiques JWT (examen)

* durée de vie courte (`exp`),
* séparation :

  * **access token** (court),
  * **refresh token** (long, protégé),
* signature robuste,
* stockage sécurisé (éviter `localStorage`),
* vérification systématique des rôles côté serveur.

---

## 🔁 Access token vs Refresh token

### Access token

* utilisé pour appeler l’API,
* durée de vie courte (minutes),
* limite l’impact d’un vol.

### Refresh token

* sert à obtenir un nouveau access token,
* durée plus longue,
* doit être fortement protégé.

📌 Logique sécurité :

> On accepte qu’un token puisse fuiter,
> on limite **combien de temps il est exploitable**.

---

## 🧨 Token CSRF – Protection contre les actions forcées

### À quoi sert un token CSRF ?

Un **token CSRF** sert à vérifier que :

* la requête provient bien du **site légitime**,
* l’utilisateur a **volontairement initié l’action**.

👉 Il protège les applications Web **basées sur des cookies de session**.

---

### Principe du CSRF

Sans token CSRF :

* le navigateur envoie automatiquement les cookies,
* un site externe peut déclencher une action.

Avec token CSRF :

* la requête doit contenir un jeton secret,
* le serveur peut vérifier l’intention.

---

### Exemple simplifié

Formulaire protégé :

```html
<input type="hidden" name="csrf_token" value="abc123">
```

Requête sans ce token → refusée.

---

### Token CSRF et JWT : ne pas confondre

| JWT                   | Token CSRF        |
| --------------------- | ----------------- |
| Identité              | Intention         |
| API                   | Formulaire Web    |
| Longue durée relative | Très courte durée |
| Transporte des rôles  | Jeton aléatoire   |
| Lisible               | Non signifiant    |

📌 Phrase clé :

> Le JWT dit *qui* agit,
> le token CSRF prouve *que l’action est volontaire*.

---

## 🔒 Où stocker les jetons ?

### JWT

* idéalement dans un **cookie HttpOnly + Secure**,
* éviter `localStorage` (XSS).

### CSRF

* généré côté serveur,
* stocké en session,
* transmis au client dans le formulaire.

---

## 🔍 Lien avec les attaques vues

| Attaque           | Protection            |
| ----------------- | --------------------- |
| Force brute       | Limitation, MFA       |
| MITM              | HTTPS                 |
| XSS               | Échappement, HttpOnly |
| CSRF              | Token CSRF            |
| Session hijacking | Cookies sécurisés     |

---

## 🧠 Formulation parfaite pour l’examen

> *Le JWT permet une authentification stateless des API en transportant l’identité et les rôles, tandis que le token CSRF protège contre l’exécution d’actions non volontaires en vérifiant l’intention de l’utilisateur.*

---

## Résumé ultra-clair

* JWT = **identité + rôles**
* CSRF token = **preuve d’intention**
* Aucun jeton n’est magique
* Les contrôles serveur restent indispensables


# Bonus 

Voici un **schéma visuel** (texte) + des **préconisations React (Vite/React)** pour JWT, cookies, refresh token et CSRF.

---

## Schéma visuel 1 — App Web “session cookie” + token CSRF (cas classique Symfony / PHP)

```
[React] ── GET /login-page ───────────────▶ [Serveur]
   │                                           │
   │  (réponse HTML/JSON + CSRF token)          │
   │◀───────────────────────────────────────────│
   │
   │  POST /login  (email+password + CSRF)      │
   │──────────────────────────────────────────▶ │
   │                                           │  crée session
   │                                           │  Set-Cookie: SESSIONID=...; HttpOnly; Secure; SameSite=Lax/Strict
   │◀───────────────────────────────────────────│
   │
   │  POST /change-email (CSRF + cookie auto)   │
   │──────────────────────────────────────────▶ │
   │                                           │  vérifie SESSIONID + CSRF
   │◀───────────────────────────────────────────│
```

**Idée :**

* Le **cookie de session** s’envoie automatiquement (donc CSRF possible).
* Le **token CSRF** prouve “ça vient bien de mon app + intention utilisateur”.

---

## Schéma visuel 2 — SPA React + API “JWT en cookie” + Refresh (recommandé en pratique)

```
                 (1) login
[React] ── POST /auth/login (creds) ─────────▶ [API]
   │                                             │
   │◀─ Set-Cookie: access=...; HttpOnly; Secure; SameSite=...; Max-Age=900
   │◀─ Set-Cookie: refresh=...; HttpOnly; Secure; SameSite=...; Max-Age=30j
   │
                 (2) appel API normal
[React] ── GET /api/me (cookie auto) ─────────▶ [API]
   │◀───────────────────────────────────────────│ 200 OK
   │
                 (3) access expiré
[React] ── GET /api/me ───────────────────────▶ [API]
   │◀───────────────────────────────────────────│ 401 (token expiré)
   │
                 (4) refresh
[React] ── POST /auth/refresh (cookie refresh) ▶ [API]
   │◀─ Set-Cookie: access=nouveau...            │
   │
                 (5) retry
[React] ── GET /api/me ───────────────────────▶ [API]
   │◀───────────────────────────────────────────│ 200 OK
```

**Idée :**

* Pas de token en `localStorage`.
* Les cookies **HttpOnly** ne sont pas lisibles en JS → meilleur contre XSS.
* Le refresh permet une UX fluide **sans access token long**.

---

# Préconisations React (pratiques et “jury-proof”)

## 1) Stockage des tokens

### ✅ Recommandé

* **JWT en cookie HttpOnly + Secure**, géré par le serveur.

### 🚫 À éviter

* `localStorage` / `sessionStorage` pour des tokens : si XSS → vol direct.

---

## 2) Requêtes fetch/axios : inclure les cookies

Si ton API est sur un domaine différent, ou même par rigueur :

### `fetch`

```js
fetch("/api/me", { credentials: "include" })
```

### `axios`

```js
axios.defaults.withCredentials = true;
```

---

## 3) CSRF : comment l’intégrer en React

### Quand tu en as besoin

* Dès que tu utilises des **cookies** pour l’auth (session ou JWT en cookie) **ET** que tu acceptes des requêtes cross-site possibles.

### Pattern simple (très utilisé)

1. React appelle un endpoint qui renvoie un token CSRF.
2. React le met dans un header sur les requêtes “state-changing” (POST/PUT/PATCH/DELETE).

Exemple de flux :

```
[React] GET /api/csrf  ──▶ [API]  renvoie token (JSON) + (optionnel) cookie CSRF
[React] POST /api/order avec header X-CSRF-Token: <token>
```

En React (exemple minimal) :

```js
let csrf = null;

export async function ensureCsrf() {
  if (csrf) return csrf;
  const r = await fetch("/api/csrf", { credentials: "include" });
  const data = await r.json();
  csrf = data.csrfToken;
  return csrf;
}

export async function postJson(url, body) {
  const token = await ensureCsrf();
  const r = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token
    },
    body: JSON.stringify(body),
  });
  return r;
}
```

---

## 4) Intercepteur “refresh automatique” (UX propre)

Le point important : **si 401**, tu tentes `/auth/refresh`, puis tu rejoues la requête.

Pseudo-stratégie :

* 401 → refresh → retry
* si refresh échoue → logout (état propre)

---

## 5) React et XSS : ce que tu peux dire sans te planter

* React échappe par défaut le texte injecté dans le DOM (bien).
* Le danger principal : `dangerouslySetInnerHTML`.

### Règle simple à enseigner

* **Jamais** de `dangerouslySetInnerHTML` avec du contenu non maîtrisé.
* Si tu dois afficher du HTML (éditeur WYSIWYG, etc.) :

  * sanitization côté serveur **et** côté client (ex : DOMPurify).

---

## 6) Cookies : réglages recommandés (côté serveur, mais utile à expliquer)

* `HttpOnly` : JS ne peut pas lire le cookie
* `Secure` : uniquement en HTTPS
* `SameSite` :

  * `Lax` (souvent bon compromis pour web)
  * `Strict` (plus strict, peut gêner certains flux)
  * `None` + `Secure` (si cross-site obligatoire)

---

## 7) CORS / Dev (Vite) : point de vigilance

* Si React est sur `localhost:5173` et API sur `localhost:8000` :

  * il faut CORS + `credentials: true` côté API,
  * et un `SameSite` compatible.
* En prod, idéalement : **même domaine** (ou sous-domaines maîtrisés) pour réduire les emmerdes.

---

## 8) Ce que le jury adore (formulation simple)

> **JWT = identité + rôles**, mais il faut quand même vérifier les autorisations côté serveur.
> **CSRF = preuve d’intention**, utile quand l’auth passe par cookies.
> **HttpOnly + Secure + exp courte + refresh** = réduction d’impact.

---
# Bonus 2 

Un token CSRF, c’est **pas un “token utilisateur”** et **ça ne se gère pas comme un JWT**.
Le but est simple : le serveur doit pouvoir vérifier que la requête vient bien de **ton site** et qu’elle est liée à **une session/identité** en cours.

---

## Comment on génère un token CSRF ?

### Principe minimal

1. Le serveur génère une valeur **imprévisible** (aléatoire cryptographiquement)
2. Il l’associe à l’utilisateur **ou à sa session**
3. Il la renvoie au client (React)
4. Le client la renvoie dans un header (ex: `X-CSRF-Token`) sur les requêtes sensibles
5. Le serveur compare → si ça match, il accepte

### Génération (concept)

* en PHP : `random_bytes(...)` puis encodage (hex/base64)
* en Node : `crypto.randomBytes(...)`
* en Java : `SecureRandom`

Ce qui compte : **aléatoire fort**, pas un `Math.random()`.

---

## Est-ce que c’est stocké en base de données ?

👉 **En général : non.**

### Pourquoi pas la BDD ?

* ça ajouterait une écriture/lecture à chaque session,
* ça complique pour rien,
* et ce n’est pas nécessaire.

### Où c’est stocké alors ?

La plupart des frameworks font un de ces 3 modèles :

#### Modèle A — Stockage en session serveur (le plus courant)

* le token est stocké dans la **session** (RAM/Redis/fichier selon config)
* React reçoit le token, le renvoie
* le serveur compare avec la valeur en session

✅ Simple, robuste.

#### Modèle B — “Double Submit Cookie”

* le serveur met un token dans un **cookie** (non HttpOnly)
* React lit ce cookie et renvoie la même valeur dans un header
* le serveur vérifie que cookie == header

✅ Pas besoin de session serveur dédiée au CSRF
⚠️ dépend de cookies, et tu dois cadrer XSS (sinon on peut voler le token)

#### Modèle C — Token signé (stateless)

* le serveur génère un token qui contient des infos + une signature (HMAC)
* pas de stockage, le serveur vérifie la signature

✅ Pas de stockage
⚠️ implémentation plus exigeante, à faire proprement

---

## Durée de vie : oui, il a un TTL

👉 **Oui**, un token CSRF doit avoir une durée de vie, mais elle dépend du modèle.

### Le cas le plus fréquent (session serveur)

* le token vit **tant que la session vit**
* ou il est régénéré :

  * à chaque chargement de formulaire,
  * ou à intervalle régulier,
  * ou après login.

Dans les frameworks, tu as souvent :

* TTL de session (ex : 30 min d’inactivité, ou 2h, etc.)
* et rotation possible du token CSRF

### Bonne pratique simple (niveau cours)

* token CSRF valable “session courante”
* et régénération à des moments clés :

  * **après login**
  * **après changement de droits**
  * **après reset mot de passe**

---

## Pourquoi on ne veut pas un TTL très long ?

Parce que si le token est compromis (ex : XSS, poste partagé, capture), tu veux limiter :

* **la fenêtre d’exploitation**
* **le risque de rejeu**

---

## Réponse directe à tes questions

✅ **Comment on le génère ?**
Avec un générateur aléatoire cryptographique côté serveur, puis on l’associe à la session (ou on le signe).

❌ **Il est en BDD ?**
En général **non**. Plutôt en **session** (ou cookie + header dans le double-submit).

✅ **Il a une durée de vie ?**
Oui : soit celle de la session, soit un TTL explicite + rotation.

---

## Point important à dire aux élèves (et au jury)

> Le token CSRF n’est pas là pour “cacher un secret”, mais pour prouver l’origine et l’intention.
> Si tu as du XSS, le CSRF ne te sauvera pas : l’attaquant peut agir depuis ton site.
