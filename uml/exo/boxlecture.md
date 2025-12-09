## 🎁 Scénario : Gestion d'une Box de Lecture Personnalisée

"Je dirige 'Le Bouquineur Curieux', un service d'abonnement mensuel de box de lecture. Notre concept est de choisir deux livres et quelques goodies pour nos abonnés en fonction de leurs goûts, et non pas d'envoyer la même chose à tout le monde.

Dès le départ, le client doit s'abonner, évidemment. Il choisit une formule (3 mois, 6 mois ou illimitée) et nous fournit ses coordonnées de facturation. La partie la plus importante, c'est de remplir un **questionnaire de goûts** très détaillé : quels sont ses genres préférés (Fantasy, Polar, Histoire, etc.), les genres qu'il déteste absolument, s'il préfère les formats poche ou grand format, et s'il a déjà lu certains classiques pour éviter les doublons. Une fois le paiement validé, on considère l'abonnement comme Actif.

Notre travail commence alors. Chaque nouvel abonné est automatiquement assigné à un **Libraire Référent**, une personne de notre équipe qui sera responsable de ses choix futurs. Le Libraire doit pouvoir accéder au profil du client et à son questionnaire de goûts. Vers le 15 de chaque mois, c'est la période de sélection : le Libraire choisit les deux livres pour le client. Cette sélection doit être enregistrée dans le système et peut être modifiée si le Libraire change d'avis avant la date limite d'envoi.

Ensuite, le système doit générer la liste de toutes les sélections pour le service logistique. Le service logistique utilise cette liste pour préparer les box. Ils ont besoin de l'adresse de livraison du client et des titres des deux livres choisis. Une fois que la box est scannée et prête à partir (autour du 25 du mois), le statut de la commande passe à 'Expédiée', et le client reçoit automatiquement un email de notification avec un numéro de suivi.

Je dois également gérer les suspensions et résiliations. Un client peut demander à **suspendre** son abonnement pour un mois s'il part en vacances. Je dois aussi pouvoir gérer la fin de l'abonnement après un cycle de 3 ou 6 mois, sauf s'il le renouvelle, bien sûr. Enfin, j'ai besoin de suivre le stock de nos livres, car si un Libraire choisit un livre, il faut que le stock soit mis à jour pour ne pas le proposer à d'autres s'il est épuisé.

Voilà, c'est l'essentiel de ce que le système devrait gérer pour nous simplifier la vie !"
