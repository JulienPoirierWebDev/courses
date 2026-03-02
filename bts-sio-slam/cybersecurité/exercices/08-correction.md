## Q1 — Doc A (auth)

**Ce qu’un attaquant peut fabriquer :** n’importe quel `payload` JSON (ex : `{ "id": 1, "role": "admin" }`, ou `{ "id": 14, "role": "user" }`, etc.).

**Pourquoi le serveur l’accepte :**

* le code **ne vérifie pas la signature** du token (aucun `jwt.verify`, aucune clé, aucune validation).
* il décode seulement le 2ᵉ segment base64 (`token.split(".")[1]`) puis fait `JSON.parse(...)`.
* ensuite `req.user = payload` et `next()` : donc l’identité et le rôle viennent **du client**.

✅ **Conclusion attendue :** l’authentification est falsifiable : le serveur “fait confiance” à un token que n’importe qui peut fabriquer.

---

## Q2 — Docs A + B (export)

**Démonstration :**

* Doc A : `req.user = payload;` sans vérification → un utilisateur peut se donner un rôle quelconque.
* Doc B : la route `/admin/export-users` ne contient **aucun contrôle de rôle** (`if req.user.role !== 'admin' ...`) : seule la présence d’un token “décodable” suffit.
* Donc un simple utilisateur authentifié (ou un attaquant forgeant un token) peut appeler `/admin/export-users` et obtenir `SELECT * FROM users`.

✅ **Conclusion attendue :** export accessible sans autorisation (contrôle d’accès absent).

---

## Q3 — Doc F (preuve)

La ligne critique :
`2026-03-01 GET /admin/export-users 200 user=14 role=user`

**Pourquoi c’est une alerte :**

* un endpoint “admin” a répondu **200 OK** pour un utilisateur dont le rôle est `user`.
* ça prouve qu’il n’y a pas de restriction (ou qu’elle est contournable), et que l’accès aux données est réel, pas théorique.

✅ **Conclusion attendue :** preuve d’une fuite de données potentielle (export accessible à non-admin).

---

## Q4 — Docs C + E (newsletter)

**Pourquoi le cron envoie à des gens qui ont refusé :**

* Doc C : requête `SELECT email FROM users` → elle prend **tout le monde**.
* Doc E : les préférences sont dans `marketing_preferences.newsletter` mais **Doc C ne joint jamais** cette table et ne filtre pas.

**Requête SQL corrigée (exemple attendu) :**

```sql
SELECT u.email
FROM users u
JOIN marketing_preferences mp ON mp.user_id = u.id
WHERE mp.newsletter = 1;
```

Variante acceptable si on veut traiter les utilisateurs sans ligne de préférence :

```sql
SELECT u.email
FROM users u
LEFT JOIN marketing_preferences mp ON mp.user_id = u.id
WHERE mp.newsletter = 1;
```

✅ **Conclusion attendue :** le code ignore totalement les préférences → envoi illégal/à risque.

---

## Q5 — Doc D (preuve de consentement)

Le code stocke seulement :

* `newsletter` (oui/non)
* `newsletter_at` (date/heure)

**Ce qui manque pour prouver “ce qui a été accepté” (2 éléments attendus) :**

1. **Version du texte** (ex : `newsletter_text_version` ou `policy_version`)
2. **Contenu/empreinte du texte accepté** : soit le texte exact archivé, soit un **hash** du texte affiché (ou de l’écran de consentement) pour prouver l’intégrité

(Autres éléments acceptables en bonus : origine du consentement (web/app), preuve d’action (case cochée + event), IP/UA si justifié, identifiant de formulaire/CMP.)

✅ **Conclusion attendue :** la date seule ne prouve pas les conditions exactes du consentement.

---

## Q6 — Docs D + E (cohérence)

**Problème :** `UPDATE marketing_preferences ... WHERE user_id=?` suppose qu’il existe déjà une ligne dans `marketing_preferences` pour cet utilisateur.

**Scénario :**

* nouvel utilisateur créé dans `users`
* aucune insertion correspondante dans `marketing_preferences`
* il appelle `/preferences/newsletter`
* l’UPDATE ne touche **aucune ligne** (0 row updated)
* résultat : le système pense que c’est “ok” (`res.json({ ok:true })`) mais rien n’est enregistré → le cron (Doc C) enverra quand même à tout le monde.

✅ **Réponse attendue :** il faut un `INSERT ... ON DUPLICATE KEY UPDATE` ou créer une ligne par défaut à la création du compte.

Exemple correctif SQL attendu :

```sql
INSERT INTO marketing_preferences (user_id, newsletter, newsletter_at)
VALUES (?, ?, NOW())
ON DUPLICATE KEY UPDATE newsletter=VALUES(newsletter), newsletter_at=VALUES(newsletter_at);
```

---

## Q7 — Doc E (view_history)

Même sans données sensibles explicites, l’historique peut permettre un **profilage** et des déductions.

Exemples concrets :

* films “militants politiques” → opinions politiques probables
* films “religieux/communautaires” → religion supposée
* films “thématiques LGBT” → orientation sexuelle supposée

✅ **Conclusion attendue :** `view_history` est une donnée potentiellement très intrusive, car elle révèle des préférences intimes → nécessite minimisation, base légale, durée limitée, sécurité renforcée.

---

## Q8 — Docs A + E (impact)

Si token forgé `{ "id": 1, "role": "admin" }` :

* Doc A : le serveur accepte ce `req.user`.
* Doc B : permet d’extraire `SELECT * FROM users` → donc fuite de `email`, `birthdate`, `phone`, `password_hash`, `role` (Doc E).
* Doc D : permet de modifier les préférences newsletter du user_id présent dans le token (ici user 1), donc modification arbitraire des préférences (même si la route ne permet pas de modifier les autres directement, l’usurpation d’id le permet).

✅ **Réponse attendue :**

* Table exposée : `users` (export complet)
* Table modifiable : `marketing_preferences` (via usurpation d’identité)
* Indirect : exploitation des rôles, et atteinte aux données personnelles + sécurité compte.

---

## Q9 — Docs A + F (traçabilité)

Pourquoi les logs ne suffisent pas :

* ils ne montrent pas **l’IP** ou l’origine de la requête
* ils ne montrent pas **l’identifiant de ressource accédée** ni le volume (combien d’enregistrements exportés)
* ils ne tracent pas les **échecs d’auth** (“no log for failed auth”)
* ils ne relient pas à un identifiant de requête/corrélation, ni user-agent

✅ 2 infos manquantes attendues (au moins) :

* IP + user-agent
* statut d’échec auth + raison / tentative
* ID cible (ex: export complet, ressource consultée)
* volume/empreinte export (nb de lignes, hash du fichier exporté)

