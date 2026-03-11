
# 🛡️ BLOC 3 – Solutions techniques

*(Réduire les risques identifiés, limiter l’impact, appliquer le moindre privilège)*

## Idée centrale du bloc

Une bonne défense côté SLAM ne cherche pas à empêcher toute attaque.
Elle vise à :

* **réduire l’impact** d’une compromission,
* **limiter strictement les droits**,
* **préserver la capacité à comprendre et prouver ce qui s’est passé**.

👉 On part du principe que **l’attaque finira par arriver**.
La question devient : *jusqu’où peut-elle aller ?*

---

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* proposer des mesures techniques cohérentes avec un risque priorisé,
* appliquer le moindre privilège à plusieurs couches (UI, API, BDD),
* distinguer authentification et autorisation,
* justifier les contrôles côté serveur et pas seulement côté interface.

---

## Authentification et gestion des mots de passe

L’authentification est **le premier point d’entrée** de la majorité des attaques.
Elle protège directement :

* la **Confidentialité** (qui accède aux données),
* l’**Intégrité** (qui peut les modifier),
* la **Traçabilité** (qui a fait quoi).

---

### À ne pas confondre : authentification vs autorisation

* **Authentification** : vérifier *qui* agit
* **Autorisation** : vérifier *ce qu'il a le droit de faire*

Exemple SLAM :

* utilisateur authentifié (`JWT valide`)
* mais non autorisé à supprimer un compte → `403 Forbidden`

📌 Un token valide ne remplace jamais un contrôle d'autorisation.

---

### Politique de mots de passe

#### Définition

Une politique de mot de passe définit **des règles vérifiables par le code**, et non des recommandations vagues.

Une bonne politique est :

* **claire** (compréhensible par l’utilisateur),
* **mesurable** (testable automatiquement),
* **appliquée par le système**, pas laissée à l’appréciation humaine.

#### Critères attendus à l’examen

* longueur minimale,
* diversité de caractères,
* refus des mots de passe trop faibles,
* interdiction de réutilisation.

Nuance utile (pratiques modernes) :

* privilégier une longueur suffisante,
* vérifier contre des mots de passe compromis,
* éviter des règles trop rigides qui poussent à des mots de passe prévisibles.

📌 Erreur classique :

> « utiliser un mot de passe fort » ❌
> sans expliquer **comment le système l’impose**.

#### Exemple SLAM

Un formulaire d’inscription refuse automatiquement :

* `azerty123`
* `password`
* un ancien mot de passe déjà utilisé

👉 Ce n’est pas une bonne pratique,
👉 c’est une **contrainte logicielle**.

---

### Stockage sécurisé des mots de passe

#### Principe fondamental

Un mot de passe :

* **ne doit jamais être stocké en clair**,
* **ne doit jamais être chiffré de façon réversible**.

Il doit être **haché**, avec un **sel**, via une fonction adaptée.

Exemples de fonctions adaptées (selon la stack) :

* **Argon2id**
* **bcrypt**
* **scrypt**

#### Raisonnement attendu

> Le système n’a **pas besoin de connaître** le mot de passe,
> il a seulement besoin de vérifier qu’il correspond.

#### Exemple concret

Lors de la connexion :

* le mot de passe saisi est haché,
* le hash est comparé à celui stocké,
* le mot de passe réel n’est jamais récupérable.

👉 En cas de fuite de la base :

* les mots de passe ne sont pas directement exploitables.

Axes DIC(T) concernés :

* **Confidentialité**
* **Traçabilité**

---

### Protection contre les attaques automatisées

#### Objectif

Limiter les attaques de type :

* force brute,
* password spraying,
* credential stuffing,

**sans bloquer les utilisateurs légitimes**.

#### Mécanismes classiques

* limitation du nombre de tentatives,
* temporisation progressive,
* blocage temporaire,
* journalisation des échecs.

Exemple logique (pseudo-code) :

```text
si > 5 échecs en 10 minutes :
  temporiser / bloquer temporairement
  journaliser
  
  si > 20 echecs en 10 minutes
    bloquer le compte pour 24h
  fin si

fin si
```

📌 Logique importante :

> On protège la **disponibilité**
> sans transformer la sécurité en déni de service interne.

---

## Rôles, habilitations et principe du moindre privilège

👉 **C’est le pilier de toute défense SLAM.**

---

### Principe du moindre privilège

#### Définition

Chaque utilisateur ou service ne dispose que :

* des **droits strictement nécessaires**,
* pour la **durée nécessaire**,
* et rien de plus.

📌 Message clé :

> Ce n’est pas l’authentification qui limite les dégâts,
> ce sont les **droits accordés après**.

---

### Rôles ≠ utilisateurs ≠ comptes techniques

Il faut clairement distinguer :

* **l’utilisateur** : une personne (peut se tromper, être compromise),
* **le rôle applicatif** : ce que l’application autorise,
* **le compte base de données** : ce que la BDD permet réellement.

📌 Phrase clé examen :

> *Un utilisateur peut être compromis, un rôle limite l’impact.*

---

### Défense en profondeur avec les rôles

Les contrôles doivent exister **à tous les niveaux** :

* **Interface**

  * menus visibles selon le rôle
* **Code applicatif**

  * vérification systématique des droits
* **API**

  * contrôle sur chaque endpoint
* **Base de données**

  * droits SQL limités
  * vues, triggers

⚠️ Erreur classique :

> cacher un bouton sans contrôler côté serveur.

👉 Cacher ≠ sécuriser.

---

## Sécurité par la base de données

*(dernière ligne de défense)*

Même avec un code parfaitement écrit,
la base de données doit **empêcher les abus critiques**.

---

### Comptes techniques dédiés

#### Principe

L’application ne doit **jamais** se connecter à la base avec :

* un compte administrateur,
* ou un compte trop permissif.

#### Exemple

* compte applicatif :

  * lecture / écriture limitées
* pas de `DROP`, pas de `ALTER`, pas de `GRANT`

Axes concernés :

* **Confidentialité**
* **Intégrité**

---

### Contraintes structurelles

Les contraintes protègent les données **avant même le code** :

* unicité,
* types,
* clés étrangères,
* règles de domaine.

👉 Même en cas de bug applicatif,
la base **refuse les incohérences**.

---

### Triggers et règles non contournables

Les règles critiques peuvent être garanties par la base :

* historisation,
* refus de certaines opérations,
* contrôle métier sensible.

📌 Message clé :

> Ce qui est critique doit être garanti **au plus bas niveau**.

---

### Transactions

Les transactions assurent :

* cohérence globale,
* annulation automatique en cas d’erreur,
* état stable des données.

Axes DIC(T) :

* **Intégrité**
* **Traçabilité**

---

## Sécurité des API et des échanges

Une API est **toujours exposée**, même sans interface graphique.
Elle doit donc être **autonome en sécurité**.

---

### HTTPS : prérequis absolu

* chiffrement des échanges,
* protection contre l’interception,
* confidentialité des tokens.

📌 HTTPS n’est pas une option,
c’est le **socle minimum**.

Complément utile :

* en présence d'un reverse proxy, il faut garder une configuration cohérente,
* **HSTS** renforce la protection contre certains retours involontaires en HTTP.

---

### Authentification par jeton (JWT)

#### Principe attendu

* `access token` :

  * durée de vie courte
* `refresh token` :

  * renouvellement contrôlé

📌 Point clé :

> Un token valide **n’est pas une autorisation**.

---

### Contrôle systématique des droits

Chaque route doit vérifier :

* l’identité,
* le rôle,
* l’action demandée.

⚠️ Erreur classique :

> « le token est valide donc l’accès est autorisé » ❌

Exemple (Express, conceptuel) :

```js
app.delete("/api/users/:id", requireAuth, requireRole("ADMIN"), deleteUserController);
```

📌 Le contrôle doit être fait côté serveur, même si le bouton est masqué dans l'interface.

---

## Sécurité applicative Web

---

### XSS : filtrer et échapper correctement

* filtrage à l’entrée,
* échappement à la sortie,
* respect du contexte (HTML, JS).

Axes concernés :

* Confidentialité
* Intégrité
* Traçabilité

---

### CSRF : comprendre le mécanisme

Le CSRF exploite :

* une session valide,
* la confiance du serveur dans le navigateur.

Protection :

* jeton CSRF,
* vérification serveur.

📌 Important :

> Le CSRF concerne les applications Web avec session,
> pas les API REST stateless.

Nuance utile :

* le point clé est surtout le **mode d'authentification**,
* si l'API utilise des **cookies** envoyés automatiquement par le navigateur, la protection CSRF redevient pertinente.

---

## Transition vers le bloc suivant

À ce stade :

* les accès sont contrôlés,
* les droits sont limités,
* les abus sont freinés.

Il reste une question essentielle :

> **Comment prouver ce qui s’est réellement passé ?**

👉 C’est l’objet du **BLOC 4 – Journalisation, traçabilité et preuve numérique**.

---

## 🧠 À retenir (examen)

* La sécurité repose sur la **réduction des droits**
* Les rôles protègent plus que les interfaces
* La base de données est la dernière barrière
* Une API ne fait confiance à personne

---

## Références externes (bonnes pratiques techniques)

* OWASP Authentication Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html>
* OWASP Password Storage Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html>
* OWASP Session Management Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html>
* Express – Security Best Practices : <https://expressjs.com/en/advanced/best-practice-security.html>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — Okta : accès non autorisé au système de support (root cause)

**Source** : Okta Security, *Unauthorized Access to Okta's Support Case Management System: Root Cause and Remediation* (**3 novembre 2023**)  
<https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause/>

Intérêt pédagogique :

* montre qu'un système de support peut devenir un **point d'entrée** critique,
* illustre la nécessité de contrôles techniques + hygiène opérationnelle,
* très utile pour parler de **défense en profondeur** et gestion des sessions.

### Encadré 2 — ICO : amende LastPass UK (2025)

**Source** : ICO, *Password manager provider fined £1.2m by ICO for data breach* (**11 décembre 2025**)  
<https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/12/password-manager-provider-fined/>

Intérêt pédagogique :

* montre qu'un acteur "sécurité" peut lui aussi être sanctionné pour des mesures insuffisantes,
* permet de discuter des mesures techniques et organisationnelles attendues,
* intéressant pour nuancer : certaines données sont restées protégées grâce au modèle de chiffrement.
