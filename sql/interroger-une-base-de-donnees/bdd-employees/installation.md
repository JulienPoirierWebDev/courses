# Installation de la BDD "Employees".

Vous pouvez télécharger la base de données sur ce [repository GitHub](https://github.com/datacharmer/test_db).

Il faut cliquer sur le bouton vert "Code" puis sur "Download ZIP".

Une fois le fichier téléchargé, il faut le décompresser.

Nous allons installer la base de données avec phpMyAdmin.

Pour cela, a l'acceuil de phpMyAdmin, cliquez SQL et copiez-collez le contenu du fichier "employees.sql" dans la fenêtre de requête.

Vous verrez qu'une erreur sera affichée, c'est normal, il faut modifier ce que vous avez copié-collé : 
il faut supprimer les lignes après la ligne 110 : 
``` sql
flush /*!50503 binary */ logs;

SELECT 'LOADING departments' as 'INFO';
source load_departments.dump ;
SELECT 'LOADING employees' as 'INFO';
source load_employees.dump ;
SELECT 'LOADING dept_emp' as 'INFO';
source load_dept_emp.dump ;
SELECT 'LOADING dept_manager' as 'INFO';
source load_dept_manager.dump ;
SELECT 'LOADING titles' as 'INFO';
source load_titles.dump ;
SELECT 'LOADING salaries' as 'INFO';
source load_salaries1.dump ;
source load_salaries2.dump ;
source load_salaries3.dump ;

source show_elapsed.sql ;
```

En effet, ces lignes ne sont pas des requêtes SQL compatibles avec phpMyAdmin.

Une fois les lignes supprimées, cliquez sur "Continuer".

La base de données est maintenant installée.

MAIS ! Elle est vide, il faut la remplir avec des données ! 

Nous allons maintenant utiliser les fichiers avec l'extension ".dump" pour remplir la base de données.

Pour cela, il faut sélectionner la base de données 'Employees' dans le menu de gauche, puis cliquer sur "Importer".

Cliquez sur "Choisir un fichier" et sélectionnez le fichier "load_departments.dump" puis cliquez sur "Exécuter".

Répétez l'opération pour les autres fichiers ".dump", dans cet ordre :

- load_employees.dump
- load_departments.dump
- load_dept_emp.dump
- load_dept_manager.dump
- load_titles.dump
- load_salaries1.dump
- load_salaries2.dump
- load_salaries3.dump

La base de données est maintenant installée et remplie avec des données.

Vous pouvez maintenant commencer à interroger la base de données.
