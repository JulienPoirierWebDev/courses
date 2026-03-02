
# 🔐 BLOC 1 – RGPD : finalité et cadre juridique de la cybersécurité

règlement général sur la protection des données

> **Idée centrale du bloc**
> La cybersécurité n’est pas une fin en soi :
> 👉 elle sert à **respecter le RGPD** et à **pouvoir le prouver**.

---

## Ce que vous saurez faire à la fin de ce bloc

À la fin de ce bloc, vous devrez être capable de :

* distinguer donnée personnelle et donnée sensible,
* relier un principe RGPD à une conséquence technique (code / BDD / logs),
* expliquer ce qu'est une preuve de conformité exploitable,
* justifier une mesure de cybersécurité par une finalité RGPD.

---

## 1.1 Pourquoi le RGPD concerne directement les développeurs

Le RGPD n’est pas un texte réservé aux juristes. D'ailleurs, sur le site de la CNIL, vous trouverez plusieurs documents que je vous conseille de lire plusieurs fois pour préparer l'examen. Ici, nous ferons une synthèse des élements centraux mais en tant que développeur, vous devez avoir une connaissance minimale, si ce n'est approfondie selon vos objectifs professionnels, des attentes en terme de RGPD. 

[Voici le guide RGPD du développeur](https://www.cnil.fr/fr/guide-rgpd-du-developpeur)
[Et la version github](https://github.com/LINCnil/Guide-RGPD-du-developpeur)

En pratique, ce sont les **choix techniques** qui déterminent si une organisation respecte (ou viole) le RGPD.

Le développeur agit directement sur :

* la **collecte** des données,
* leur **stockage**,
* leur **accès**,
* leur **conservation**,
* leur **traçabilité**.

📌 À l’examen, le jury évalue si le candidat comprend que :

> *le non-respect du RGPD est souvent la conséquence d’un mauvais choix technique.*

---

## 1.2 Données personnelles vs données sensibles

### Donnée personnelle

> Toute information permettant d’identifier **directement ou indirectement** une personne.

Exemples :

* nom, prénom, pseudonyme, date de naissance;
* photos, enregistrements sonores de voix;
* numéro de téléphone fixe ou portable, adresse postale, adresse email;
* adresse IP, identifiant de connexion informatique ou identifiant de cookie;
* empreinte digitale, réseau veineux ou palmaire de la main, empreinte rétinienne;
* numéro de plaque d'immatriculation, numéro de sécurité sociale, numéro d'une pièce d'identité;
* données d'usage d'une application, des commentaires, etc...

L'identification des personnes physiques peut être directe (: nom prénom) ou bien croisée (adresse, participation a une association, etc.). Donc même une donnée personnelle qui ne semble pas permettre l'identification peut servir, au final, a identifier la personne. 
📌 Erreur fréquente :
penser qu’une donnée « technique » n’est pas personnelle → **faux**.

Attention : le développeur doit savoir qu'il doit sauvegarder que le strict nécessaire, utile pour l'application et surtout pour l'utilisateur. Son email, OK. Son adresse : pourquoi, est-ce qu'on a des factures a remplir, des colis a envoyer ? Si c'est juste un "jeu en ligne", peut être que l'adresse n'est pas nécessaire. 

Stocker le moins possible, c'est réduire la surface a proteger. 

---

### Donnée sensible

> Donnée personnelle dont la divulgation ou l’altération est **particulièrement grave**.

Exemples attendus à l’examen :

* les données relatives à la santé des individus ;
* les données concernant la vie sexuelle ou l'orientation sexuelle ;
* les données qui révèlent une prétendue origine raciale ou ethnique ;
* les opinions politiques, les convictions religieuses, philosophiques ou l'appartenance syndicale ;
* les données génétiques et biométriques utilisées aux fins d'identifier une personne de manière unique.

📌 Point important (souvent noté) :
➡️ **Savoir dire quand il n’y a PAS de donnée sensible**, et le justifier.

---

## 1.3 Les principes RGPD appliqués au développement

Le RGPD repose sur des principes **concrets**, qui doivent se traduire dans le code.

### Tableau de lecture rapide : principe RGPD → conséquence technique

| Principe RGPD | Conséquence côté développement |
| --- | --- |
| Minimisation | Collecter moins de champs, limiter les colonnes exposées |
| Finalité | Documenter l'usage de la donnée, éviter les réutilisations non prévues |
| Durée de conservation | Prévoir purge / anonymisation / archivage |
| Accès restreint | Rôles, contrôles d'accès, moindre privilège |
| Privacy by Design | Intégrer sécurité et traçabilité dès la conception |

📌 Ce tableau est utile pour passer rapidement du **juridique** au **technique**.

### 1️⃣ Minimisation

> Ne collecter **que** les données nécessaires.

Exemples :

* ne pas demander une date de naissance si l'année suffit.
* ne pas stocker une adresse complète si une ville suffit.

Lien DIC(T) :

* réduit les risques de **confidentialité**
* réduit l’impact en cas de fuite

---

### 2️⃣ Finalité

> Une donnée doit avoir un **objectif clair et légitime**.

Exemples :

* email pour confirmation de compte ✔
* email réutilisé pour du marketing sans consentement ❌

📌 À l’examen, toujours se demander :

> *Pourquoi cette donnée existe-t-elle ?*

---

### 3️⃣ Durée de conservation

> Une donnée ne doit pas être conservée indéfiniment.

Exemples :

* suppression automatique
* archivage
* anonymisation après une durée définie

Lien DIC(T) :

* moins de données = moins de risques
* meilleure conformité juridique

[Ici, vous trouverez des recommandations de la CNIL](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees)

---

### 4️⃣ Accès restreint

> Seules les personnes autorisées doivent accéder aux données.

Exemples :

* rôles utilisateurs
* droits différenciés
* comptes techniques limités

Lien DIC(T) :

* Confidentialité
* Intégrité

---

### 5️⃣ Sécurité par conception (Privacy by Design)

> La protection des données doit être pensée **dès la conception**, pas ajoutée après.

Exemples :

* hash des mots de passe dès le départ
* rôles intégrés au modèle
* journalisation prévue dès l’architecture

📌 Phrase-clé examen :

> *La sécurité est intégrée dès la conception de l’application.*

---

### Anonymisation et pseudonymisation des données personnelles. 

On peut anonymiser (: impossible de refaire un lien avec une personne physique) ou pseudonymiser (: rendre difficile de lien). 

On pseudonymise en hashant des données personnelles et permettre tout de même l'exploitation des données (analyse par origine géographique, profil client, etc.). C'est fortement recommandé car cela réduit les risques pour les personnes et contribue a la mise en conformité du réglement. 

⚠️ Nuance importante :

* un **hash seul** ne suffit pas toujours à anonymiser (risque de ré-identification selon le contexte),
* la **pseudonymisation** réduit le risque, mais la donnée reste souvent personnelle juridiquement.

---

## 1.3 bis Bases légales : ne pas tout ramener au consentement

Le consentement est important, mais **ce n'est pas la seule base légale** prévue par le RGPD.

Exemples de raisonnement utiles en SLAM :

* **Consentement** : newsletter marketing
* **Exécution d'un contrat** : livraison d'une commande
* **Obligation légale** : conservation de certaines données comptables
* **Intérêt légitime** (à justifier) : sécurité, détection d'abus, journalisation proportionnée

📌 À l'examen, dire "on demande le consentement pour tout" peut être juridiquement faux.

## 1.4 Consentement : collecte licite des données

### Consentement valide = 4 conditions

Le consentement doit être :

* **libre**
* **éclairé**
* **spécifique**
* **explicite**

Exemples :

* case à cocher non pré-cochée
* information claire sur l’usage

❌ Ce qui invalide le consentement :

* case obligatoire sans alternative
* absence d’information
* impossibilité de refuser

---

## 1.5 Droits des personnes (à connaître et à appliquer)

Les personnes concernées disposent notamment de :

* droit d’accès
* droit de rectification
* droit à l’effacement
* droit d’opposition

📌 En SLAM, cela implique :

* des routes dédiées
* des contrôles d’identité
* des logs de demande

[On peut lire ici des infos supplémentaires sur le droit des personnes](https://www.cnil.fr/fr/passer-laction/les-droits-des-personnes-sur-leurs-donnees)

### Exemple de workflow SLAM (droit d'accès / effacement)

Exemple de chaîne technique attendue :

1. réception de la demande (formulaire / support)
2. vérification d'identité
3. journalisation de la demande (date, type, statut)
4. extraction / rectification / suppression selon le droit exercé
5. journalisation du traitement et de la réponse

📌 Cela relie directement **RGPD + sécurité + preuve**.

---

## 1.6 Preuve RGPD : pouvoir démontrer la conformité

🟥 **POINT MAJEUR BTS**

Respecter le RGPD **ne suffit pas**.
Il faut pouvoir **le prouver**.

### Exemples de preuves attendues

* formulaire de consentement conservé
* date et heure du consentement
* version du texte accepté
* **empreinte cryptographique (hash)** du consentement

En gros, on met sous forme de string toutes les données relatives au consentement, on les hash et on sauvegarde le hash. Cela permet de prouver que l'on n'a pas modifié rétroactivement les données et que le consentement a bien été pris. 

### Exemple "preuve suffisante" vs "preuve insuffisante"

**Insuffisant**

* "L'utilisateur a accepté" (sans date, sans version, sans trace)

**Plus solide**

* date/heure du consentement
* identifiant de l'utilisateur
* version du texte affiché
* finalité concernée (ex: newsletter)
* trace technique (hash / journal d'événement)

Voir ce que la CNIL peut faire : 

[Les contrôles de la CNIL](https://www.cnil.fr/fr/comprendre-le-rgpd/le-controle-de-la-cnil)
[Les modalités d'un contrôle](https://www.cnil.fr/fr/comment-se-passe-un-controle-de-la-cnil)

📌 Le jury valorise les réponses qui expliquent **comment** la preuve est conservée.

Lien DIC(T) :

* **Traçabilité / Preuve** = axe central

📌 À l’examen :

> *“Nous stockons la preuve du consentement”*
> est insuffisant sans expliquer **comment**.

---

## 1.7 RGPD et journalisation

Les logs jouent un rôle clé dans la conformité RGPD :

* prouver un accès
* prouver une action
* détecter une violation

Mais :

* on ne journalise **pas tout**
* on ne duplique pas les données métier
* on respecte la minimisation

[Plus d'infos ici](https://www.cnil.fr/fr/la-cnil-publie-une-recommandation-relative-aux-mesures-de-journalisation)

📌 Cette logique sera approfondie au **bloc 4**.

---

## 1.8 Lien avec la suite du cours

À ce stade, on sait :

* **pourquoi** on protège (RGPD)
* **quoi** on protège (données, accès, preuves)

Dans le **bloc 2**, on utilisera la grille **DIC(T)** pour :

* modéliser les menaces,
* comprendre les attaques,
* prioriser les protections.

Transition :

> Le RGPD nous dit pourquoi protéger et pourquoi tracer. Le bloc suivant montre comment prioriser les menaces pour proposer des mesures pertinentes, au lieu d'empiler des solutions.

---

### 🧠 À retenir (examen)

* Le RGPD est une **finalité**, pas un décor
* La cybersécurité est un **outil de conformité**
* La preuve est aussi importante que la protection
* Toute réponse doit relier :

  * donnée
  * risque
  * impact
  * mesure

---

## Références externes (officielles / utiles)

* CNIL – Guide RGPD du développeur : <https://www.cnil.fr/fr/guide-rgpd-du-developpeur>
* CNIL (GitHub) – Guide RGPD du développeur : <https://github.com/LINCnil/Guide-RGPD-du-developpeur>
* EUR-Lex – RGPD (Règlement UE 2016/679) : <https://eur-lex.europa.eu/eli/reg/2016/679/oj>

---

## Cas réels / rapports (2 encarts rapides)

### Encadré 1 — CNIL : sanction FREE / FREE MOBILE (2026)

**Source** : CNIL, *Violation de données : sanction de 42 millions d'euros...* (**14 janvier 2026**)  
<https://www.cnil.fr/fr/sanction-free-2026>

Intérêt pédagogique :

* illustre le lien direct entre **mesures de sécurité insuffisantes** et sanction RGPD,
* permet de faire verbaliser **Article 32 (sécurité)** + notification des personnes + conservation,
* montre qu'un défaut technique devient un sujet **juridique** et **preuve**.

### Encadré 2 — CNIL : sanction FRANCE TRAVAIL (2026)

**Source** : CNIL, *Data breach: FRANCE TRAVAIL fined €5 million* (**29 janvier 2026**)  
<https://www.cnil.fr/en/data-breach-5million-fine-france-travail>

Intérêt pédagogique :

* met en évidence l'impact du **social engineering** sur la protection des données,
* montre qu'identifier des mesures dans une analyse de risque ne suffit pas : il faut les **implémenter**,
* relie RGPD, cybersécurité et responsabilité du responsable de traitement.
