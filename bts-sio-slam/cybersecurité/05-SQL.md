# 🗄️ BLOC 3 bis – SQL et cybersécurité appliquée (SLAM)

*(Protéger les données, limiter les droits, garantir l'intégrité et produire des preuves exploitables)*

## Idée centrale du bloc

En SLAM, SQL n'est pas seulement un outil pour "faire des requêtes".

La base de données est :

* une **surface d'attaque** (injection SQL, abus de droits, requêtes destructrices),
* une **ligne de défense** (rôles, contraintes, transactions, vues, triggers),
* un **outil de preuve et d'analyse** (journalisation, audit, requêtes de détection).

👉 Une application peut avoir une bonne interface et un bon code, mais rester dangereuse si la base de données est mal configurée.

---

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* identifier les principaux risques SQL en contexte SLAM,
* justifier des mesures SQL (droits, contraintes, transactions, vues, triggers),
* relier ces mesures à DIC(T) et au RGPD,
* expliquer ce que la base de données peut garantir (et ce qu'elle ne remplace pas).

---

## Pourquoi ce bloc est important en BTS SIO SLAM

Le jury n'attend pas que vous deveniez DBA.
Il attend que vous sachiez :

* identifier un **risque SQL**,
* proposer une **mesure réaliste côté base**,
* justifier cette mesure avec la grille **DIC(T)**,
* expliquer pourquoi **le front seul ne suffit pas**.

📌 Message clé :

> Une règle de sécurité critique doit être garantie aussi bas que possible, donc souvent côté serveur et parfois côté base de données.

---

## Ce que l'on protège côté SQL (les actifs)

Avant de parler de syntaxe, il faut identifier les actifs exposés côté base :

* données métier (commandes, réservations, paiements, stocks),
* données personnelles (clients, employés),
* données sensibles (selon le contexte métier),
* accès administrateurs / comptes techniques,
* preuves (consentements, historique des actions),
* journaux d'audit,
* disponibilité de la base.

### Lien avec DIC(T)

* **Confidentialité** : qui peut lire les données ?
* **Intégrité** : qui peut modifier / supprimer ?
* **Disponibilité** : la base reste-t-elle utilisable ?
* **Traçabilité / Preuve** : peut-on reconstituer une action ?

---

## Menaces principales liées à SQL

Les risques SQL les plus fréquents en contexte SLAM sont :

* **injection SQL** (requête manipulée),
* **compte BDD trop permissif** (ex : compte admin utilisé par l'application),
* **absence de contraintes** (données incohérentes ou frauduleuses),
* **absence de transaction** (états partiels incohérents),
* **absence de contrôle d'accès SQL** (lecture globale non justifiée),
* **journalisation insuffisante** (pas de preuve),
* **journalisation excessive** (risque RGPD),
* **requêtes lourdes / non filtrées** (impact disponibilité),
* **exports / sauvegardes non protégés** (fuite massive de données).

📌 Synthèse examen :

> Une faille applicative + un compte SQL trop puissant = incident majeur.

---

## Rôles SQL, comptes techniques et moindre privilège (prioritaire)

### Principe fondamental

L'application ne doit **jamais** se connecter à la base avec un compte administrateur.

Chaque compte technique doit avoir :

* uniquement les droits nécessaires,
* sur les objets nécessaires,
* pendant la durée nécessaire.

👉 C'est le **principe du moindre privilège** appliqué à SQL.

---

### Ce qu'il faut bien distinguer

Il faut distinguer trois niveaux :

* **utilisateur métier** : personne réelle (client, employé, admin),
* **rôle applicatif** : ce que l'application autorise (CLIENT, ADMIN, SUPPORT),
* **compte technique SQL** : ce que la base autorise réellement.

📌 Une erreur fréquente est de croire qu'un "rôle admin dans l'application" justifie un compte SQL admin.

Ce n'est pas le cas : le compte SQL doit rester limité.

---

### Stratégie simple de comptes (exemple SLAM)

Exemples de séparation utile :

* `app_read` : lecture seule sur certaines tables / vues
* `app_rw` : lecture + écriture sur tables applicatives
* `app_batch` : imports / traitements planifiés
* `dba_admin` : maintenance, migrations, administration (hors exécution normale de l'application)

📌 Le compte de production utilisé par l'application ne doit pas pouvoir :

* `DROP TABLE`
* `ALTER TABLE`
* `GRANT`
* `REVOKE`

---

### Permissions minimales : logique attendue

Donner uniquement les droits nécessaires :

* `SELECT`
* `INSERT`
* `UPDATE`
* `DELETE`

Et seulement sur les objets utiles :

* table précise,
* vue précise,
* éventuellement procédure stockée.

📌 "Donner tous les droits pour être tranquille" est un mauvais raisonnement de sécurité.

---

### `GRANT` / `REVOKE` (à connaître conceptuellement)

Même si la syntaxe varie selon le SGBD, la logique est universelle :

* **`GRANT`** : accorder un droit
* **`REVOKE`** : retirer un droit

Exemple conceptuel :

```sql
GRANT SELECT, INSERT, UPDATE ON reservations TO app_rw;
REVOKE DELETE ON reservations FROM app_rw;
```

📌 À l'examen, on peut expliquer la logique sans réciter la variante exacte d'un SGBD.

### Variantes SGBD (important pour ne pas se bloquer)

La **logique** reste la même, mais la syntaxe peut varier selon :

* PostgreSQL
* MySQL / MariaDB
* SQL Server
* SQLite (plus limité sur la gestion fine des rôles)

📌 À l'examen, mieux vaut expliquer correctement le principe de moindre privilège que réciter une syntaxe approximative.

---

### Démonstration pratique (recommandée)

**Objectif** : montrer qu'un compte applicatif limité réduit l'impact d'une compromission.

Démo possible :

1. Connexion avec un compte applicatif
2. `SELECT` autorisé
3. `INSERT` autorisé
4. `DROP TABLE users` refusé

👉 Message à faire passer :

> Même si l'attaquant passe par l'application, la base de données peut encore limiter les dégâts.

---

## Injection SQL : comprendre, prévenir, limiter l'impact

### Définition

Une injection SQL survient quand une entrée utilisateur est intégrée dans une requête SQL de façon non maîtrisée.

Le problème n'est pas "SQL" en soi :
le problème est le **mélange entre code SQL et données utilisateur**.

---

### Exemple vulnérable (concaténation)

```sql
SELECT * FROM users WHERE login = '$login' AND password = '$password';
```

Entrée attaquante possible :

```text
password = ' OR '1'='1
```

La condition peut devenir toujours vraie.

📌 Le but pédagogique ici est de comprendre le mécanisme, pas de mémoriser une "recette d'attaque".

---

### Protection principale : requêtes préparées / paramétrées

La protection prioritaire est de séparer :

* la **structure** de la requête,
* les **valeurs** fournies par l'utilisateur.

👉 L'application envoie une requête paramétrée ; le SGBD traite les valeurs comme des données, pas comme du SQL.

📌 Phrase examen :

> Nous utilisons des requêtes préparées (paramétrées) afin d'empêcher l'interprétation d'une entrée utilisateur comme du code SQL.

### Exemples de paramétrage selon la stack (repères utiles)

Node.js :

```js
db.prepare("SELECT * FROM users WHERE email = ?").get(email);
```

PHP PDO :

```php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute([":email" => $email]);
```

Python (`sqlite3`) :

```python
cur.execute("SELECT * FROM users WHERE email = ?", (email,))
```

📌 Le marqueur varie (`?`, `:email`, `$1`...), mais le principe reste identique : séparer **requête** et **valeurs**.

---

### Validation d'entrée : utile, mais insuffisante seule

Il faut aussi valider les entrées :

* type attendu,
* longueur,
* format,
* valeurs autorisées (liste blanche).

Mais :

> la validation ne remplace **pas** les requêtes paramétrées.

---

### Réduction d'impact côté base (défense en profondeur)

Même en cas de bug applicatif, la base peut réduire l'impact si :

* le compte SQL est limité,
* l'accès se fait via des **vues** plutôt que des tables complètes,
* les tables sensibles sont séparées,
* certaines opérations sont interdites au compte applicatif.

👉 On évite qu'une injection se transforme immédiatement en catastrophe globale.


## Contraintes SQL : protéger l'intégrité des données

### Pourquoi c'est de la cybersécurité

Les contraintes empêchent :

* les incohérences accidentelles,
* certaines fraudes simples,
* les effets d'un bug applicatif,
* l'insertion de données absurdes.

👉 Elles protègent directement l'**Intégrité**.

---

### Contraintes essentielles à connaître

#### `PRIMARY KEY`

Identifie de façon unique une ligne.

👉 Évite les ambiguïtés et facilite la traçabilité.

#### `FOREIGN KEY`

Garantit la cohérence entre tables liées.

👉 Empêche par exemple une réservation rattachée à un utilisateur inexistant.

#### `UNIQUE`

Empêche les doublons sur une valeur devant être unique.

Exemples :

* email utilisateur
* référence de commande

#### `NOT NULL`

Empêche les valeurs absentes sur un champ obligatoire.

#### `CHECK`

Vérifie une règle métier simple.

Exemples :

* prix `>= 0`
* quantité `> 0`
* statut dans une liste autorisée

#### `DEFAULT`

Fournit une valeur par défaut contrôlée.

Exemple :

* statut initial = `PENDING`

---

### Exemple conceptuel

```sql
CREATE TABLE reservations (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  montant DECIMAL(10,2) NOT NULL CHECK (montant >= 0),
  statut VARCHAR(20) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT fk_res_user FOREIGN KEY (user_id) REFERENCES users(id)
);
```

📌 Même si l'application envoie une mauvaise valeur, la base peut la refuser.

## Transactions : garantir la cohérence des opérations critiques (prioritaire)

### Principe

Une transaction permet d'exécuter plusieurs opérations SQL comme un **bloc unique** :

* soit tout réussit → **`COMMIT`**
* soit une étape échoue → **`ROLLBACK`**

👉 C'est le principe du **tout ou rien**.

---

### Pourquoi c'est central en cybersécurité

Sans transaction, une opération sensible peut laisser un état incohérent :

* débit effectué mais réservation non créée,
* mot de passe modifié mais journal d'audit absent,
* commande créée mais stock non décrémenté.

Cela impacte :

* **Intégrité** (état faux)
* **Traçabilité** (preuve incomplète)
* parfois **Disponibilité** (blocages / reprises manuelles)

---

### Cas SLAM typiques à traiter en transaction

* réservation + paiement
* création de compte + attribution de rôle + log d'inscription
* changement d'email + log d'audit
* reset de mot de passe + invalidation de sessions + journalisation

📌 Règle simple :

> Si une action métier critique comporte plusieurs étapes dépendantes, il faut envisager une transaction.

---

### Exemple concret (transaction réservation + stock + audit)

```sql
BEGIN;

-- 1) Vérifier et verrouiller le stock de la session ciblée
SELECT places_disponibles
FROM sessions
WHERE id = 42
FOR UPDATE;

-- 2) Créer la réservation
INSERT INTO reservations (user_id, session_id, statut, created_at)
VALUES (7, 42, 'CONFIRMED', CURRENT_TIMESTAMP);

-- 3) Décrémenter le stock uniquement si une place reste disponible
UPDATE sessions
SET places_disponibles = places_disponibles - 1
WHERE id = 42
  AND places_disponibles > 0;

-- Si aucune ligne n'est mise à jour => plus de stock => annuler
-- (à gérer côté code applicatif avec test du nombre de lignes modifiées)

-- 4) Journaliser l'action
INSERT INTO audit_log (event_type, actor_user_id, target_type, target_id, created_at)
VALUES ('RESERVATION_CREATED', 7, 'session', 42, CURRENT_TIMESTAMP);

COMMIT;
```

Si l'étape `3` (stock) ou `4` (audit) échoue, l'application doit exécuter :

```sql
ROLLBACK;
```

👉 Résultat : aucune réservation partielle n'est conservée en base.

### Exemple backend Node.js (rollback explicite)

```js
// Exemple avec un driver SQL en mode async/await
// (API exacte à adapter selon mysql2 / pg / knex / sequelize...)
async function reserverPlace(db, userId, sessionId) {
  await db.query("BEGIN");

  try {
    const stock = await db.query(
      `SELECT places_disponibles FROM sessions WHERE id = ? FOR UPDATE`,
      [sessionId]
    );

    if (!stock[0] || stock[0].places_disponibles <= 0) {
      throw new Error("Plus de stock");
    }

    await db.query(
      `INSERT INTO reservations (user_id, session_id, statut, created_at)
       VALUES (?, ?, 'CONFIRMED', CURRENT_TIMESTAMP)`,
      [userId, sessionId]
    );

    const result = await db.query(
      `UPDATE sessions
       SET places_disponibles = places_disponibles - 1
       WHERE id = ? AND places_disponibles > 0`,
      [sessionId]
    );

    if (result.affectedRows !== 1) {
      throw new Error("Stock non décrémenté");
    }

    await db.query(
      `INSERT INTO audit_log (event_type, actor_user_id, target_type, target_id, created_at)
       VALUES ('RESERVATION_CREATED', ?, 'session', ?, CURRENT_TIMESTAMP)`,
      [userId, sessionId]
    );

    await db.query("COMMIT");
    return { ok: true };
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  }
}
```

### Exemple backend PHP (PDO + rollback explicite)

```php
<?php
function reserverPlace(PDO $pdo, int $userId, int $sessionId): void {
    $pdo->beginTransaction();

    try {
        $stmt = $pdo->prepare(
            "SELECT places_disponibles FROM sessions WHERE id = :sid FOR UPDATE"
        );
        $stmt->execute([':sid' => $sessionId]);
        $stock = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$stock || (int)$stock['places_disponibles'] <= 0) {
            throw new RuntimeException("Plus de stock");
        }

        $stmt = $pdo->prepare(
            "INSERT INTO reservations (user_id, session_id, statut, created_at)
             VALUES (:uid, :sid, 'CONFIRMED', CURRENT_TIMESTAMP)"
        );
        $stmt->execute([':uid' => $userId, ':sid' => $sessionId]);

        $stmt = $pdo->prepare(
            "UPDATE sessions
             SET places_disponibles = places_disponibles - 1
             WHERE id = :sid AND places_disponibles > 0"
        );
        $stmt->execute([':sid' => $sessionId]);

        if ($stmt->rowCount() !== 1) {
            throw new RuntimeException("Stock non décrémenté");
        }

        $stmt = $pdo->prepare(
            "INSERT INTO audit_log (event_type, actor_user_id, target_type, target_id, created_at)
             VALUES ('RESERVATION_CREATED', :uid, 'session', :sid, CURRENT_TIMESTAMP)"
        );
        $stmt->execute([':uid' => $userId, ':sid' => $sessionId]);

        $pdo->commit();
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $e;
    }
}
```

---

### Gestion d'erreurs (raisonnement attendu)

Une bonne réponse ne dit pas seulement "utiliser une transaction".
Elle explique aussi :

* **quand** on annule,
* **pourquoi** on annule,
* **ce que cela protège**.

Exemple de justification :

> En cas d'échec d'une étape, un rollback évite un état partiel incohérent et préserve l'intégrité des données.

---

### Concurrence et isolation (niveau utile BTS)

Sans entrer dans le détail des niveaux d'isolation, il faut comprendre qu'en usage réel :

* plusieurs utilisateurs agissent en même temps,
* deux opérations peuvent se gêner,
* une lecture ou une mise à jour peut devenir incohérente.

👉 Les transactions servent aussi à **encadrer la concurrence** et à préserver la cohérence.

📌 À l'examen, il suffit souvent de montrer que vous avez compris le risque d'accès simultanés.

#### Exemple parlant : double réservation

Deux utilisateurs essaient de réserver la **dernière place** au même moment :

* sans transaction / contrôle atomique : les deux opérations peuvent passer
* avec transaction + vérification cohérente : une seule réservation est validée

📌 Exemple très efficace pour montrer que la cybersécurité concerne aussi la **cohérence des états**.

---

### Démonstration pratique (recommandée)

Démo "réservation/paiement" :

1. transaction démarrée
2. insertion réservation
3. erreur volontaire sur la mise à jour de stock
4. `ROLLBACK`
5. vérifier qu'aucune réservation partielle n'est restée

---

## Triggers : automatiser des garanties critiques (prioritaire, mais cadré)

### Définition

Un **trigger** est un mécanisme déclenché automatiquement par la base lors d'un événement :

* `INSERT`
* `UPDATE`
* `DELETE`

Selon le SGBD, il peut s'exécuter avant ou après l'opération (`BEFORE` / `AFTER`).

---

### Pourquoi c'est utile en cybersécurité

Un trigger permet de garantir une règle **au plus bas niveau** :

* historiser une modification sensible,
* tracer une suppression,
* mettre à jour automatiquement un horodatage,
* refuser certaines opérations critiques,
* produire un audit minimal même si l'application oublie de le faire.

👉 Très utile pour l'axe **Traçabilité / Preuve** et souvent pour l'**Intégrité**.

---

### Exemple de cas pertinents en SLAM

* table `users` : trace des changements de rôle
* table `tarifs` : journal des modifications de prix
* table `consentements` : historisation des changements d'état
* table `reservations` : mise à jour automatique de `updated_at`

---

### Exemple conceptuel : trigger d'audit

```sql
CREATE TRIGGER trg_tarifs_audit
AFTER UPDATE ON tarifs
FOR EACH ROW
BEGIN
  INSERT INTO audit_tarifs (
    tarif_id,
    old_prix,
    new_prix,
    changed_at
  )
  VALUES (
    OLD.id,
    OLD.prix,
    NEW.prix,
    CURRENT_TIMESTAMP
  );
END;
```

📌 La syntaxe exacte dépend du SGBD (MySQL, PostgreSQL, SQL Server...), mais le raisonnement reste le même.

---

### Limites et précautions (important)

Les triggers sont puissants, mais ils ont des limites :

* logique "cachée" (difficile à voir dans le code applicatif),
* maintenance plus complexe,
* risque de performance,
* effets de bord si mal conçus.

📌 Bon usage pédagogique :

> utiliser les triggers pour des garanties transverses et critiques, pas pour remplacer toute la logique métier.

---

### Démonstration pratique (recommandée)

* modification d'un prix dans `tarifs`
* le trigger écrit automatiquement dans `audit_tarifs`
* montrer la preuve produite

👉 Message clé :

> Même si l'application oublie un log, la base peut garantir une trace minimale.

---

## Vues SQL : réduire l'exposition des données

### Principe

Une **vue** permet d'exposer seulement une partie des données :

* certaines colonnes,
* certaines lignes,
* un format adapté à un besoin donné.

👉 C'est un outil simple pour appliquer la **minimisation d'accès**.

---

### Exemples utiles

* vue support client sans données sensibles
* vue de reporting (agrégée)
* vue lecture seule pour tableaux de bord
* vue d'audit pour consultation contrôlée

---

### Intérêt cybersécurité / RGPD

Les vues permettent de :

* limiter la **Confidentialité** exposée,
* éviter l'accès direct à des tables sensibles,
* réduire la surface de fuite,
* donner un accès métier sans donner "toute la table".

---

### Exemple conceptuel

```sql
CREATE VIEW v_support_clients AS
SELECT id, nom, prenom, email
FROM clients;
```

Puis on accorde les droits au support sur la vue, pas sur la table complète.

Exemple conceptuel :

```sql
GRANT SELECT ON v_support_clients TO app_support;
```

📌 Logique attendue : donner un accès **métier ciblé** via la vue, pas un accès global à la table source.

### Exemple d'utilisation d'une vue côté backend (Node.js / PHP)

Objectif : l'application lit les données support via la vue `v_support_clients`, sans accès direct à la table `clients`.

Node.js (SQLite) :

```js
// Lecture ciblée via la vue + requête paramétrée
const q = `
  SELECT id, nom, prenom, email
  FROM v_support_clients
  WHERE email LIKE ?
  ORDER BY nom
  LIMIT 20
`;

db.all(q, [`%${search}%`], (err, rows) => {
  if (err) return next(err);
  res.json(rows);
});
```

PHP (PDO) :

```php
$stmt = $pdo->prepare(
    "SELECT id, nom, prenom, email
     FROM v_support_clients
     WHERE email LIKE :search
     ORDER BY nom
     LIMIT 20"
);

$stmt->execute([':search' => '%' . $search . '%']);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

📌 Bonne pratique : le compte SQL utilisé par ce module ne reçoit que `SELECT` sur la vue.

---

## Journalisation et audit en SQL (lien direct avec le bloc 4)

### Les logs vus côté base : à quoi servent-ils ?

Ils servent à :

* tracer des actions sensibles,
* reconstituer un incident,
* détecter des comportements anormaux,
* produire une preuve exploitable.

📌 Les logs ne doivent pas être "beaux".
Ils doivent être **utiles et interprétables**.

---

### Structure minimale d'une table d'audit (exemple)

Une table d'audit exploitable peut contenir :

* identifiant d'événement
* horodatage (`event_time`)
* acteur (id utilisateur ou compte technique)
* rôle applicatif (si disponible)
* action (`LOGIN_FAIL`, `UPDATE_PRICE`, `DELETE_USER`, etc.)
* ressource concernée (type + id)
* résultat (`SUCCESS`, `FAIL`, `DENY`)
* contexte minimal (IP, endpoint, source)

📌 Il faut journaliser ce qui permet de prouver, pas recopier toute la donnée métier.

#### Exemple de table d'audit (DDL conceptuel)

```sql
CREATE TABLE audit_events (
  id BIGINT PRIMARY KEY,
  event_time TIMESTAMP NOT NULL,
  actor_id VARCHAR(100),
  actor_role VARCHAR(50),
  action VARCHAR(50) NOT NULL,
  resource_type VARCHAR(50),
  resource_id VARCHAR(100),
  result VARCHAR(20) NOT NULL,
  source_ip VARCHAR(64),
  endpoint VARCHAR(255)
);
```

---

### Ce qu'il ne faut pas stocker dans les logs SQL

* mots de passe,
* secrets,
* tokens complets,
* données sensibles en clair sans finalité,
* copies inutiles de données métier complètes.

Lien RGPD :

* minimisation,
* confidentialité,
* durée de conservation.

---

### Exploiter les logs avec SQL (compétence SLAM valorisée)

Exemples d'analyses utiles :

* compter les échecs de connexion,
* détecter un volume anormal d'actions,
* repérer des actions hors horaire,
* identifier des refus répétés sur une ressource sensible.

Exemples de requêtes :

```sql
SELECT actor_id, COUNT(*) AS nb_echecs
FROM audit_events
WHERE action = 'LOGIN_FAIL'
  AND event_time >= CURRENT_TIMESTAMP - INTERVAL '1 hour'
GROUP BY actor_id
ORDER BY nb_echecs DESC;
```

📌 Cette syntaxe d'intervalle est typique de **PostgreSQL**.

Variante SQLite (même logique) :

```sql
SELECT actor_id, COUNT(*) AS nb_echecs
FROM audit_events
WHERE action = 'LOGIN_FAIL'
  AND event_time >= datetime('now', '-1 hour')
GROUP BY actor_id
ORDER BY nb_echecs DESC;
```

```sql
SELECT action, COUNT(*) AS total
FROM audit_events
WHERE event_time >= CURRENT_DATE
GROUP BY action;
```

📌 Le jury valorise surtout la capacité à **interpréter** le résultat :

> erreur utilisateur isolée ou attaque automatisée probable ?


## SQL et RGPD : points essentiels à relier

### Minimisation

Côté base, minimiser signifie :

* créer seulement les colonnes nécessaires,
* éviter les duplications inutiles,
* éviter les accès trop larges.

---

### Durée de conservation

La conformité ne concerne pas seulement les données métier, mais aussi :

* les logs,
* les tables d'audit,
* les exports,
* les sauvegardes.

👉 Il faut prévoir :

* purge,
* archivage,
* durée de conservation définie.

---

### Pseudonymisation / anonymisation (nuance importante)

* **Pseudonymisation** : on réduit le lien direct avec la personne, mais une ré-identification reste possible selon le contexte.
* **Anonymisation** : la ré-identification n'est plus raisonnablement possible.

📌 Un hash seul ne garantit pas automatiquement une anonymisation.

---

### Traçabilité proportionnée

Il faut trouver l'équilibre :

* suffisamment de logs pour prouver,
* pas de sur-collecte de données dans les journaux.

Phrase type examen :

> Les accès et actions sensibles sont tracés de manière proportionnée afin de conserver une preuve exploitable tout en respectant la minimisation des données.

---

## Disponibilité : SQL peut aussi devenir un risque

### Pourquoi c'est un sujet de cybersécurité

Une base saturée ou bloquée rend l'application indisponible.

Or la disponibilité fait partie de DIC(T).

---

### Causes fréquentes (niveau SLAM)

* requêtes non filtrées sur de gros volumes,
* absence d'index sur des recherches fréquentes,
* requêtes d'audit trop lourdes,
* opérations massives lancées sans précaution,
* verrous / concurrence mal gérés.

📌 Une requête "fonctionnelle" peut être mauvaise du point de vue sécurité si elle dégrade la disponibilité.

---

### Réponses attendues (niveau examen)

* filtrer par période,
* paginer les résultats,
* indexer les colonnes de recherche fréquente,
* séparer les usages (transactionnel vs reporting) selon le contexte.

### Exemple concret : index et disponibilité

Cas classique :

* recherche fréquente par `email` sur une table volumineuse,
* pas d'index → requêtes lentes → impact disponibilité.

Mesure cohérente :

```sql
CREATE INDEX idx_users_email ON users(email);
```

📌 Une mesure de performance peut être une mesure de **cybersécurité** si elle protège la disponibilité.

---

## Sauvegardes et restauration (à ne pas oublier)

### Pourquoi c'est lié à la cybersécurité

Les sauvegardes protègent surtout la **Disponibilité** et participent à la reprise après incident (erreur humaine, panne, ransomware).

---

### Points essentiels

* sauvegardes régulières,
* test de restauration,
* accès restreint aux fichiers de sauvegarde,
* protection des dumps (très sensibles),
* traçabilité des opérations de restauration.

📌 Piège classique :

> "On a des sauvegardes" n'a pas de valeur si la restauration n'a jamais été testée.

---

## Étude de cas fil rouge (exemple SLAM : billetterie / réservation)

### Situation

Une application permet :

* la création de comptes clients,
* la réservation de billets,
* la modification des tarifs par un administrateur,
* la consultation d'un historique,
* la journalisation des actions sensibles.

---

### Risques principaux

* injection SQL sur le formulaire de connexion,
* modification non autorisée des tarifs,
* incohérence réservation/paiement,
* absence de preuve sur un changement de prix,
* fuite de données via compte SQL trop permissif.

---

### Mesures SQL cohérentes (attendues)

* compte applicatif limité (pas d'administration de schéma),
* requêtes paramétrées côté application,
* contraintes sur montants / statuts / clés étrangères,
* transactions sur opérations multi-étapes,
* trigger d'audit sur modifications de tarifs,
* vues pour accès support limités,
* table d'audit exploitable.

📌 C'est exactement le type de raisonnement que le jury attend : **actif → risque → impact → mesure justifiée**.

---

## Ce que le jury attend vraiment (version SQL)

Le jury n'attend pas un catalogue de commandes SQL.
Il attend que vous sachiez :

* identifier le **risque principal**,
* proposer la **mesure SQL prioritaire**,
* expliquer ce que cette mesure protège (DIC(T)),
* montrer que la sécurité est pensée en **défense en profondeur**.

### Ce que la base de données ne remplace pas (limites à connaître)

La BDD est une ligne de défense forte, mais elle ne remplace pas :

* l'authentification applicative,
* les contrôles d'autorisation côté serveur,
* la validation métier complexe côté application,
* la protection des échanges (HTTPS),
* la supervision et l'alerting.

📌 Réponse mature : combiner **application + API + BDD + journalisation**.

### Formulations adaptées à l'examen

* *Le compte SQL utilisé par l'application est limité au strict nécessaire afin de réduire l'impact d'une compromission.*
* *Les contraintes de base de données garantissent l'intégrité des données même en cas de bug applicatif.*
* *Les transactions évitent les états partiels incohérents lors des opérations critiques.*
* *Un trigger d'audit permet de conserver une trace des modifications sensibles.*
* *Les vues réduisent l'exposition des données et appliquent la minimisation d'accès.*

---

## Pièges classiques (très sanctionnés)

* application connectée avec un compte admin,
* requêtes concaténées avec des entrées utilisateur,
* validation "uniquement côté front",
* absence de transaction sur des opérations multi-étapes,
* trigger utilisé sans documentation / compréhension,
* logs contenant secrets ou données sensibles inutiles,
* sauvegardes non testées.

---

## Démonstrations pratiques recommandées (cours / TP)

### 1) Injection SQL puis correction

* requête vulnérable
* contournement
* passage aux requêtes préparées

Objectif :

* comprendre le mécanisme
* justifier la correction

---

### 2) Rôles SQL et moindre privilège

* compte lecture seule
* compte lecture/écriture
* tentative d'opération interdite

Objectif :

* montrer la réduction d'impact

---

### 3) Contraintes d'intégrité

* insertion invalide (prix négatif, référence inexistante)
* refus par la base

Objectif :

* montrer que la BDD protège même en cas de bug applicatif

---

### 4) Transaction avec `ROLLBACK`

* opération en plusieurs étapes
* erreur volontaire
* annulation complète

Objectif :

* visualiser le "tout ou rien"

---

### 5) Trigger d'audit

* modification de tarif
* insertion automatique dans la table d'audit

Objectif :

* relier SQL, traçabilité et preuve

---

### 6) Analyse de logs via SQL

* `COUNT`, `GROUP BY`, filtrage temporel
* détection d'échecs répétés

Objectif :

* passer de la requête à l'interprétation sécurité

---

## 🧠 À retenir (examen)

* SQL est à la fois une **surface d'attaque** et une **ligne de défense**
* Le **moindre privilège** côté base est essentiel
* Les **contraintes** et **transactions** protègent l'intégrité
* Les **triggers** et tables d'audit renforcent la traçabilité
* Une bonne réponse SQL relie toujours :

  * actif
  * risque
  * impact
  * mesure SQL justifiée

---

## ✅ Correction type (exercice SQL + Node.js/Express)

### Sujet corrigé : API de bibliothèque

Cette correction propose une version simple et exploitable en TP :

* **BDD SQLite** (facile à lancer en local)
* **API Node.js + Express**
* **requêtes paramétrées**
* **transaction** sur emprunt / retour

📌 Le même raisonnement reste valable avec MySQL/PostgreSQL.
---

## 1) Correction SQL

### `schema.sql`

```sql
PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  year INTEGER NOT NULL CHECK (year >= 0),
  author_id INTEGER NOT NULL,
  available INTEGER NOT NULL DEFAULT 1 CHECK (available IN (0, 1)),
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE RESTRICT
);

CREATE TABLE loans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER NOT NULL,
  borrower_name TEXT NOT NULL,
  loan_date TEXT NOT NULL DEFAULT (DATE('now')),
  return_date TEXT NULL,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE RESTRICT
);
```

### `seed.sql`

```sql
INSERT INTO authors (name, country) VALUES
('Victor Hugo', 'France'),
('Jules Verne', 'France'),
('George Orwell', 'Royaume-Uni');

INSERT INTO books (title, year, author_id, available) VALUES
('Les Miserables', 1862, 1, 1),
('Notre-Dame de Paris', 1831, 1, 1),
('Vingt mille lieues sous les mers', 1870, 2, 1),
('1984', 1949, 3, 1);
```

### Requêtes SQL attendues (exemples)

#### Liste des livres avec auteur (`JOIN`)

```sql
SELECT
  b.id,
  b.title,
  b.year,
  b.available,
  a.name AS author_name
FROM books b
JOIN authors a ON a.id = b.author_id
ORDER BY b.title ASC;
```

#### Statistiques : nombre de livres par auteur (`GROUP BY`)

```sql
SELECT
  a.id,
  a.name,
  COUNT(b.id) AS books_count
FROM authors a
LEFT JOIN books b ON b.author_id = a.id
GROUP BY a.id, a.name
ORDER BY books_count DESC, a.name ASC;
```

---

## 2) Correction Node.js / Express (référence)

### Arborescence minimale

```text
bibliotheque-api/
  package.json
  app.js
  library.db
  schema.sql
  seed.sql
```

### Dépendances

```bash
npm init -y
npm install express better-sqlite3
```

### `app.js` (correction compacte)

```js
const fs = require("fs");
const path = require("path");
const express = require("express");
const Database = require("better-sqlite3");

const app = express();
app.use(express.json());

const DB_PATH = path.join(__dirname, "library.db");
const db = new Database(DB_PATH);
db.pragma("foreign_keys = ON");

// Initialisation simple pour le TP (si base vide)
const schemaPath = path.join(__dirname, "schema.sql");
const seedPath = path.join(__dirname, "seed.sql");
if (!fs.existsSync(DB_PATH) || db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='authors'").get() == null) {
  const schema = fs.readFileSync(schemaPath, "utf8");
  const seed = fs.readFileSync(seedPath, "utf8");
  db.exec(schema);
  db.exec(seed);
}

function toBook(row) {
  if (!row) return row;
  return { ...row, available: Boolean(row.available) };
}

function badRequest(res, message) {
  return res.status(400).json({ error: message });
}

// Healthcheck simple
app.get("/", (_req, res) => {
  res.json({ ok: true, service: "bibliotheque-api" });
});

// AUTHORS
app.get("/authors", (_req, res) => {
  const rows = db.prepare("SELECT id, name, country FROM authors ORDER BY name ASC").all();
  res.json(rows);
});

app.post("/authors", (req, res) => {
  const { name, country } = req.body;
  if (!name || !country) return badRequest(res, "name et country sont obligatoires");

  const stmt = db.prepare("INSERT INTO authors (name, country) VALUES (?, ?)");
  const result = stmt.run(name.trim(), country.trim());
  const author = db.prepare("SELECT id, name, country FROM authors WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(author);
});

// BOOKS
app.get("/books", (req, res) => {
  const q = (req.query.q || "").toString().trim();
  const baseSql = `
    SELECT
      b.id, b.title, b.year, b.available, b.author_id,
      a.name AS author_name
    FROM books b
    JOIN authors a ON a.id = b.author_id
  `;

  let rows;
  if (q) {
    rows = db
      .prepare(`${baseSql} WHERE b.title LIKE ? ORDER BY b.title ASC`)
      .all(`%${q}%`)
      .map(toBook);
  } else {
    rows = db.prepare(`${baseSql} ORDER BY b.title ASC`).all().map(toBook);
  }

  res.json(rows);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const row = db.prepare(`
    SELECT
      b.id, b.title, b.year, b.available, b.author_id,
      a.name AS author_name
    FROM books b
    JOIN authors a ON a.id = b.author_id
    WHERE b.id = ?
  `).get(id);

  if (!row) return res.status(404).json({ error: "Livre introuvable" });
  res.json(toBook(row));
});

app.post("/books", (req, res) => {
  const { title, year, author_id } = req.body;
  if (!title || year == null || author_id == null) {
    return badRequest(res, "title, year et author_id sont obligatoires");
  }

  const author = db.prepare("SELECT id FROM authors WHERE id = ?").get(author_id);
  if (!author) return res.status(404).json({ error: "Auteur introuvable" });

  const result = db
    .prepare("INSERT INTO books (title, year, author_id, available) VALUES (?, ?, ?, 1)")
    .run(title.trim(), Number(year), Number(author_id));

  const created = db.prepare("SELECT id, title, year, author_id, available FROM books WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(toBook(created));
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, year, author_id, available } = req.body;
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const existing = db.prepare("SELECT id FROM books WHERE id = ?").get(id);
  if (!existing) return res.status(404).json({ error: "Livre introuvable" });

  if (author_id != null) {
    const author = db.prepare("SELECT id FROM authors WHERE id = ?").get(Number(author_id));
    if (!author) return res.status(404).json({ error: "Auteur introuvable" });
  }

  const current = db.prepare("SELECT * FROM books WHERE id = ?").get(id);
  const next = {
    title: title != null ? String(title).trim() : current.title,
    year: year != null ? Number(year) : current.year,
    author_id: author_id != null ? Number(author_id) : current.author_id,
    available: available != null ? (available ? 1 : 0) : current.available,
  };

  db.prepare(`
    UPDATE books
    SET title = ?, year = ?, author_id = ?, available = ?
    WHERE id = ?
  `).run(next.title, next.year, next.author_id, next.available, id);

  const updated = db.prepare("SELECT id, title, year, author_id, available FROM books WHERE id = ?").get(id);
  res.json(toBook(updated));
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const activeLoan = db.prepare(`
    SELECT id
    FROM loans
    WHERE book_id = ? AND return_date IS NULL
  `).get(id);
  if (activeLoan) {
    return res.status(409).json({ error: "Suppression impossible : livre emprunte" });
  }

  const result = db.prepare("DELETE FROM books WHERE id = ?").run(id);
  if (result.changes === 0) return res.status(404).json({ error: "Livre introuvable" });

  res.status(204).send();
});

// LOANS
app.post("/loans", (req, res) => {
  const { book_id, borrower_name } = req.body;
  if (book_id == null || !borrower_name) {
    return badRequest(res, "book_id et borrower_name sont obligatoires");
  }

  const loanBook = db.transaction(({ bookId, borrower }) => {
    const book = db.prepare("SELECT id, available FROM books WHERE id = ?").get(bookId);
    if (!book) {
      const err = new Error("Livre introuvable");
      err.status = 404;
      throw err;
    }
    if (!book.available) {
      const err = new Error("Livre deja emprunte");
      err.status = 409;
      throw err;
    }

    const insert = db
      .prepare("INSERT INTO loans (book_id, borrower_name, loan_date, return_date) VALUES (?, ?, DATE('now'), NULL)")
      .run(bookId, borrower.trim());

    db.prepare("UPDATE books SET available = 0 WHERE id = ?").run(bookId);

    return db.prepare("SELECT id, book_id, borrower_name, loan_date, return_date FROM loans WHERE id = ?").get(insert.lastInsertRowid);
  });

  try {
    const created = loanBook({ bookId: Number(book_id), borrower: borrower_name });
    res.status(201).json(created);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Erreur interne" });
  }
});

app.put("/loans/:id/return", (req, res) => {
  const loanId = Number(req.params.id);
  if (Number.isNaN(loanId)) return badRequest(res, "id invalide");

  const closeLoan = db.transaction((id) => {
    const loan = db.prepare("SELECT id, book_id, return_date FROM loans WHERE id = ?").get(id);
    if (!loan) {
      const err = new Error("Emprunt introuvable");
      err.status = 404;
      throw err;
    }
    if (loan.return_date) {
      const err = new Error("Livre deja retourne");
      err.status = 409;
      throw err;
    }

    db.prepare("UPDATE loans SET return_date = DATE('now') WHERE id = ?").run(id);
    db.prepare("UPDATE books SET available = 1 WHERE id = ?").run(loan.book_id);

    return db.prepare("SELECT id, book_id, borrower_name, loan_date, return_date FROM loans WHERE id = ?").get(id);
  });

  try {
    const updated = closeLoan(loanId);
    res.json(updated);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Erreur interne" });
  }
});

// STATS
app.get("/stats/books-by-author", (_req, res) => {
  const rows = db.prepare(`
    SELECT
      a.id,
      a.name,
      COUNT(b.id) AS books_count
    FROM authors a
    LEFT JOIN books b ON b.author_id = a.id
    GROUP BY a.id, a.name
    ORDER BY books_count DESC, a.name ASC
  `).all();

  res.json(rows);
});

// Gestion centralisee des erreurs SQLite (contraintes, FK, etc.)
app.use((err, _req, res, _next) => {
  if (err && err.code && String(err.code).startsWith("SQLITE_")) {
    return res.status(400).json({ error: "Erreur SQL", detail: err.message });
  }
  console.error(err);
  res.status(500).json({ error: "Erreur interne" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API demarree sur http://localhost:${PORT}`);
});
```

---

## 3) Tests manuels (extraits de correction)

### Ajouter un auteur

```http
POST /authors
Content-Type: application/json

{
  "name": "Isaac Asimov",
  "country": "Etats-Unis"
}
```

### Lister les livres (avec `JOIN`)

```http
GET /books
```

### Emprunter un livre (transaction)

```http
POST /loans
Content-Type: application/json

{
  "book_id": 1,
  "borrower_name": "Alice Martin"
}
```

### Retourner un livre (transaction)

```http
PUT /loans/1/return
```

### Statistiques (`GROUP BY`)

```http
GET /stats/books-by-author
```

---

## 4) Points à faire verbaliser par l'étudiant (correction pédagogique)

* Les requêtes utilisent des **paramètres** (`?`) pour limiter l'injection SQL.
* Les opérations d'emprunt / retour sont protégées par une **transaction** pour éviter les états incohérents.
* Les **clés étrangères** empêchent des références invalides.
* Le `CHECK` sur `available` force une valeur cohérente (0/1).
* Le code renvoie des **codes HTTP adaptés** : `201`, `404`, `409`, `400`.

📌 Ce que l'on valide réellement :

* SQL (JOIN, GROUP BY, contraintes, intégrité)
* API REST (routes, statuts, JSON)
* cybersécurité appliquée (paramétrage, intégrité, gestion d'erreurs)

---

## Références externes (SQL / AppSec / audit)

* OWASP SQL Injection Prevention Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html>
* OWASP Logging Cheat Sheet : <https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html>
* OWASP Cheat Sheet Series : <https://cheatsheetseries.owasp.org/>
* CNIL – Guide RGPD du développeur : <https://www.cnil.fr/fr/guide-rgpd-du-developpeur>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — TalkTalk : cas historique d'injection SQL (ICO)

**Source** : ICO, *TalkTalk cyber attack – how the ICO’s investigation unfolded* (article de synthèse sur l'enquête)  
<https://ico.org.uk/about-the-ico/media-centre/talktalk-cyber-attack-how-the-ico-investigation-unfolded/>

Intérêt pédagogique :

* cas concret pour relier **SQL injection → fuite de données → sanction**,
* permet de rappeler que des failles connues restent exploitées si les bases ne sont pas correctement protégées,
* bon support pour justifier requêtes paramétrées + moindre privilège + journalisation.

### Encadré 2 — CISA/FBI : alerte "Secure by Design" sur les SQLi (2024)

**Source** : CISA, *Secure by Design Alert: Eliminating SQL Injection Vulnerabilities in Software* (**25 mars 2024**)  
<https://www.cisa.gov/resources-tools/resources/secure-design-alert-eliminating-sql-injection-vulnerabilities-software>

Intérêt pédagogique :

* confirme que la SQLi reste une classe de défaut **toujours actuelle**,
* renforce le message "défaut évitable" (paramétrage, revues de code, pratiques de dev),
* excellent appui pour le discours "sécurité par conception".
