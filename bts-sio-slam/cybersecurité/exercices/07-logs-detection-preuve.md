# Exercice – Logs, détection et preuve (niveau SLAM)

## Objectif

S'entraîner à :

* distinguer erreur utilisateur et attaque probable,
* proposer des règles de journalisation utiles,
* interpréter des événements avec la grille DIC(T),
* formuler une réponse "preuve" exploitable.

---

## Contexte

Une API de gestion de billetterie journalise les événements suivants (extrait simplifié).

```text
2026-02-26T09:00:01Z req_001 user=42 role=USER action=LOGIN result=FAIL ip=198.51.100.10
2026-02-26T09:00:12Z req_002 user=42 role=USER action=LOGIN result=SUCCESS ip=198.51.100.10
2026-02-26T09:12:01Z req_101 user=? role=? action=LOGIN result=FAIL ip=203.0.113.50
2026-02-26T09:12:02Z req_102 user=? role=? action=LOGIN result=FAIL ip=203.0.113.50
2026-02-26T09:12:03Z req_103 user=? role=? action=LOGIN result=FAIL ip=203.0.113.50
2026-02-26T09:12:04Z req_104 user=? role=? action=LOGIN result=FAIL ip=203.0.113.50
2026-02-26T09:12:05Z req_105 user=? role=? action=LOGIN result=FAIL ip=203.0.113.50
2026-02-26T09:20:44Z req_210 user=7 role=ADMIN action=UPDATE_PRICE resource=tarif:12 result=SUCCESS ip=192.0.2.20
2026-02-26T09:21:12Z req_211 user=7 role=ADMIN action=DELETE_USER resource=user:88 result=DENY ip=192.0.2.20
2026-02-26T09:21:20Z req_212 user=7 role=ADMIN action=UPDATE_PRICE resource=tarif:12 result=SUCCESS ip=192.0.2.20
```

---

## Travail demandé

### 1) Analyse rapide des événements

Classez les séquences ci-dessous :

* erreur utilisateur probable
* comportement suspect
* action sensible légitime
* refus de sécurité (contrôle efficace)

Justifiez à chaque fois en 1 à 2 lignes.

### 2) DIC(T)

Pour les événements `UPDATE_PRICE` et `DELETE_USER (DENY)`, indiquez :

* axe DIC(T) principal
* axes secondaires
* pourquoi la journalisation est utile

### 3) Compléter la journalisation

Quels champs manquent pour renforcer la preuve ?

Exemples possibles :

* `endpoint`
* `user_agent`
* `trace_id`
* ancien / nouveau tarif (ou référence à une table d'audit)

⚠️ Sans sur-journaliser des données sensibles inutiles.

### 4) Règles d'alerte simples

Proposez 3 règles de détection (seuil + fenêtre temporelle), par exemple :

* X échecs de login en Y minutes depuis la même IP
* X refus d'accès admin sur Y minutes
* modifications de tarifs en dehors des heures habituelles

### 5) Réponse d'examen (5 lignes max)

Rédigez une réponse structurée :

* actif
* risque
* impact
* mesure de journalisation / détection
* preuve attendue

