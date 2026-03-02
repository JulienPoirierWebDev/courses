# 🔐 Jetons de sécurité en application Web & API

## Pourquoi des jetons ?

Un **jeton** est une information temporaire utilisée pour :

* prouver une identité,
* autoriser une action,
* protéger une requête.

👉 Un jeton **ne remplace jamais une politique de sécurité**,
👉 il sert à **appliquer** cette politique.

---

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* expliquer la différence entre JWT et token CSRF,
* choisir un stockage de jeton cohérent (cookie vs JS),
* justifier la présence (ou non) d'une protection CSRF selon l'architecture,
* expliquer pourquoi un JWT valide ne suffit pas pour autoriser une action.

---

## À ne pas confondre : session, cookie, JWT, CSRF

* **Session** : état conservé côté serveur
* **Cookie** : mécanisme de transport / stockage côté navigateur
* **JWT** : format de jeton signé (claims)
* **Token CSRF** : preuve d'intention pour une requête sensible

📌 Un JWT peut être transporté dans un cookie, sans devenir une protection CSRF.

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

Claims fréquents à connaître :

* `iss` : émetteur
* `aud` : audience
* `nbf` : pas valide avant
* `jti` : identifiant du token

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

Pièges fréquents :

* access token trop long,
* absence de vérification de `exp` / `aud`,
* refresh token mal protégé,
* confusion entre "JWT valide" et "action autorisée".

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

Bonne pratique avancée (utile à citer) :

* rotation du refresh token,
* détection de réutilisation anormale (signe possible de compromission).

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

### Mini tableau décisionnel (quand parler de CSRF ?)

| Contexte | CSRF ? | Pourquoi |
| --- | --- | --- |
| Session en cookie | Oui | Cookies envoyés automatiquement |
| JWT en cookie HttpOnly | Oui (souvent) | Le navigateur envoie aussi le cookie |
| Bearer token en header `Authorization` (hors cookie) | Pas de CSRF classique | Le navigateur ne l'envoie pas automatiquement |

📌 Sans CSRF ne veut pas dire "sans risque" : le **XSS** reste critique si le token est géré en JS.

---

## 🔒 Où stocker les jetons ?

### JWT

* idéalement dans un **cookie HttpOnly + Secure**,
* éviter `localStorage` (XSS).

### CSRF

* généré côté serveur,
* stocké en session,
* transmis au client pour être renvoyé dans la requête sensible.

Concrètement côté client, le token CSRF est généralement :
* dans un champ caché du formulaire (`<input type="hidden">`),
* ou dans une variable JS (récupérée via un endpoint `/csrf-token`) puis envoyé dans un header (ex: `X-CSRF-Token`).

Il n'est pas "secret" comme un mot de passe : il sert de preuve d'intention liée à la session courante.

Exemple (token récupéré en JS puis ajouté au formulaire) :

```js
// Frontend
async function initCsrf() {
  const res = await fetch('/csrf-token', { credentials: 'include' });
  const data = await res.json(); // { csrfToken: "..." }

  // 1) Option formulaire classique : injecter un champ caché
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = '_csrf';
  input.value = data.csrfToken;
  document.querySelector('#profile-form').appendChild(input);

  // 2) Option AJAX : garder le token en mémoire JS
  window.csrfToken = data.csrfToken;
}

document.querySelector('#profile-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await fetch('/profile', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': window.csrfToken
    },
    body: JSON.stringify({ email: 'alice@example.com' })
  });
});
```

```js
// Backend Express (exemple)
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.post('/profile', (req, res) => {
  // Si token absent/invalide, le middleware CSRF renvoie 403
  res.json({ ok: true });
});
```

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

# Préconisations React (pratiques et adaptées à l'examen)

## 1) Stockage des tokens

### ✅ Recommandé

* **JWT en cookie HttpOnly + Secure**, géré par le serveur.

### 🚫 À éviter

* `localStorage` / `sessionStorage` pour des tokens : si XSS → vol direct.

---

## 2) Requêtes fetch/axios : inclure les cookies

Si votre API est sur un domaine différent, ou par précaution :

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

### Quand la protection est nécessaire

* Dès que vous utilisez des **cookies** pour l’authentification (session ou JWT en cookie) **et** que des requêtes cross-site sont possibles.

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

Point important : en cas de **401**, l'application tente `/auth/refresh`, puis rejoue la requête.

Pseudo-stratégie :

* 401 → refresh → retry
* si refresh échoue → logout (état propre)

---

## 5) React et XSS : formulation fiable

* React échappe par défaut le texte injecté dans le DOM (bien).
* Le danger principal : `dangerouslySetInnerHTML`.

### Règle simple à enseigner

* **Jamais** de `dangerouslySetInnerHTML` avec du contenu non maîtrisé.
* S'il faut afficher du HTML (éditeur WYSIWYG, etc.) :

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
* En production, idéalement : **même domaine** (ou sous-domaines maîtrisés) pour réduire la complexité opérationnelle.

Exemple côté API (Express, conceptuel) :

```js
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
```

---

## 8) Ce que le jury adore (formulation simple)

> **JWT = identité + rôles**, mais il faut quand même vérifier les autorisations côté serveur.
> **CSRF = preuve d’intention**, utile quand l’auth passe par cookies.
> **HttpOnly + Secure + exp courte + refresh** = réduction d’impact.

---
# Bonus 2 

Un token CSRF, c’est **pas un “token utilisateur”** et **ça ne se gère pas comme un JWT**.
Le but est simple : le serveur doit pouvoir vérifier que la requête vient bien du **site légitime** et qu’elle est liée à **une session/identité** en cours.

---

## Comment on génère un token CSRF ?

### Principe minimal

1. Le serveur génère une valeur **imprévisible** (aléatoire cryptographiquement)
2. Il l’associe à l’utilisateur **ou à sa session**
3. Il la renvoie au client (React)
4. Le client la renvoie dans un header (ex: `X-CSRF-Token`) sur les requêtes sensibles
5. Le serveur compare → si le jeton correspond, il accepte

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
⚠️ dépend des cookies, et la protection XSS doit être rigoureuse (sinon le token peut être volé)

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

Dans les frameworks, on retrouve souvent :

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

Si le token est compromis (ex : XSS, poste partagé, capture), il faut limiter :

* **la fenêtre d’exploitation**
* **le risque de rejeu**

---

## Réponses directes aux questions

✅ **Comment on le génère ?**
Avec un générateur aléatoire cryptographique côté serveur, puis on l’associe à la session (ou on le signe).

❌ **Il est en BDD ?**
En général **non**. Plutôt en **session** (ou cookie + header dans le double-submit).

✅ **Il a une durée de vie ?**
Oui : soit celle de la session, soit un TTL explicite + rotation.

---

## Point important à dire aux élèves (et au jury)

> Le token CSRF n’est pas là pour “cacher un secret”, mais pour prouver l’origine et l’intention.
> En cas de XSS, le CSRF ne suffit pas : l’attaquant peut agir depuis le site légitime.

---

## Références externes (JWT / cookies / CSRF)

* RFC 7519 (JWT) : <https://www.rfc-editor.org/rfc/rfc7519>
* OWASP CSRF Prevention Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html>
* OWASP Session Management Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html>
* MDN – Set-Cookie : <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie>
* MDN – CORS : <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — Microsoft / Storm-0558 : falsification de tokens

**Source** : Microsoft MSRC, *Microsoft mitigates China-based threat actor Storm-0558 targeting of customer email* (**11 juillet 2023**)  
<https://msrc.microsoft.com/blog/2023/07/microsoft-mitigates-china-based-threat-actor-storm-0558-targeting-of-customer-email/>

Intérêt pédagogique :

* cas réel pour montrer qu'un problème de **tokens / validation / clés de signature** peut avoir un impact majeur,
* utile pour rappeler qu'un jeton valide en apparence n'est pas suffisant sans architecture robuste,
* très bon exemple pour parler d'**identité**, **autorisation** et **impact cloud**.

### Encadré 2 — Okta : vol de tokens de session via fichiers de support (HAR)

**Source** : Okta Security, *Tracking Unauthorized Access to Okta's Support System* (**20 octobre 2023**)  
<https://sec.okta.com/articles/2023/10/tracking-unauthorized-access-oktas-support-system/>

Intérêt pédagogique :

* illustre un risque concret de **session hijacking** sans vol de mot de passe,
* montre pourquoi les fichiers techniques (HAR) peuvent contenir des **cookies / tokens** sensibles,
* très bon cas pour relier JWT/cookies/session à la traçabilité.
