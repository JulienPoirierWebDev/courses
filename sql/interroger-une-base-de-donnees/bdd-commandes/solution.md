Exercice 1 : 
```sql
SELECT nom, date_naissance FROM clients;
```

Exercice 2 : 
```sql
SELECT produits.Nom AS "Produits commandés par Jean", produits.Prix
FROM produits
INNER JOIN commandes_produits ON produits.ID = commandes_produits.Produit_ID
INNER JOIN commandes ON commandes.ID = commandes_produits.Commande_ID
INNER JOIN clients ON clients.ID = commandes.Client_ID
WHERE clients.nom = "Jean";
```

Exercice 3 : 
```sql
SELECT commandes.ID AS "Commande", produits.Nom AS "Produits commandés par Jean", produits.Prix
FROM produits
INNER JOIN commandes_produits ON produits.ID = commandes_produits.Produit_ID
INNER JOIN commandes ON commandes.ID = commandes_produits.Commande_ID
INNER JOIN clients ON clients.ID = commandes.Client_ID
WHERE clients.nom = "Jean";
```


Exercice 4 : 
```sql
SELECT clients.nom AS "Clients qui ont commandé le produit 1"
FROM clients
INNER JOIN commandes ON clients.ID = commandes.Client_ID
INNER JOIN commandes_produits ON commandes.ID = commandes_produits.Commande_ID
INNER JOIN produits ON produits.ID = commandes_produits.Produit_ID
WHERE produits.ID = 1;
```

Exercice 5 : 
```sql
SELECT clients.nom AS "Clients qui n'ont pas encore passé de commande"
FROM clients
LEFT JOIN commandes ON clients.ID = commandes.Client_ID
WHERE commandes.ID IS NULL;
```

Exercice 6 : 
```sql
SELECT produits.Nom AS "Produits commandés", COUNT(commandes_produits.Produit_ID) AS "Nombre de fois commandé"
FROM produits
INNER JOIN commandes_produits ON produits.ID = commandes_produits.Produit_ID
GROUP BY produits.Nom;
```

Exercice 7 : 
```sql
SELECT clients.nom AS "Clients habitant à Paris"
FROM clients
INNER JOIN adresses ON clients.ID = adresses.Client_ID
WHERE adresses.Ville = "Paris";
```

Exercice 8 : 
```sql
SELECT commandes.ID AS "Commandes sans produits"
FROM commandes
LEFT JOIN commandes_produits ON commandes.ID = commandes_produits.Commande_ID
WHERE commandes_produits.Commande_ID IS NULL;
```




