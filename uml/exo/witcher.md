
## 🐺 Gestion des Contrats de Monstre (The Witcher)

"Je suis un agent gérant les affaires administratives des Sorceleurs. Mon problème est de suivre les contrats, d'assurer le paiement et de gérer les risques.

Quand un **Contrat** est émis (par un maire, un noble, ou un simple villageois), je l'enregistre. Le contrat doit spécifier le **Type de Monstre** (Noyeur, Goule, Griffon, etc.), la **Localisation** précise (Village de X, forêt de Y), le **Niveau de Dangerosité** estimé (Faible, Modéré, Critique) et la **Récompense** offerte. Chaque contrat passe par différents **Statuts** : **Ouvert** (en attente d'un preneur), **Accepté** (un Sorceleur est dessus), **En Suspens** (Sorceler blessé ou enquête en cours) ou **Accompli**.

Je dois gérer le pool de **Sorceleurs** disponibles. Chaque Sorceleur a une fiche (Nom, École du Loup/Chat/etc., Niveau d'expérience). Quand un contrat est **Accepté**, il est **assigné** à un Sorceleur spécifique.

Quand le Sorceleur revient, il fournit une **Preuve** que le monstre est éliminé (souvent une partie de corps, un 'trophée'). Je dois valider cette preuve. Une fois la preuve validée, je change le statut du contrat à **Accompli**. Le système doit alors générer une **Demande de Paiement** au client et une **Note de Commission** pour le Sorceleur (Récompense - 10% de commission pour l'agence).

Enfin, si un Sorceleur est blessé lors d'un contrat, cela doit être enregistré. Je dois noter la nature de la blessure et l'impact sur sa capacité à accepter de nouveaux contrats (par exemple, un Sorceleur blessé ne peut pas accepter de contrats 'Critiques' pendant 2 semaines). Je dois aussi pouvoir lister rapidement tous les monstres d'un certain type dans une région donnée pour aider les Sorceleurs à préparer leurs missions."
