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
- load_dept_emp.dump
- load_dept_manager.dump
- load_titles.dump
- load_salaries1.dump
- load_salaries2.dump
- load_salaries3.dump

La base de données est maintenant installée et remplie avec des données.

Vous pouvez maintenant commencer à interroger la base de données.

## Exercice sur les selections avec conditions.

# Niveau 1

- Afficher le nom et le prénom de tous les employés.

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel".

# Niveau 1 - Correction

- Afficher le nom et le prénom de tous les employés.

``` sql
SELECT first_name, last_name FROM employees;
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello".

``` sql
SELECT first_name, last_name FROM employees WHERE last_name = 'Facello';
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel".

``` sql
SELECT first_name, last_name FROM employees WHERE last_name = 'Facello' OR last_name = 'Simmel';
```


# Niveau 2 : agrégation

- Afficher le nombre d'employés.

- Afficher le nombre d'employés qui ont été embauchés en 1986.

- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987.

> Celui là est plus dur, attention ! (Ne pas y arriver est normal !)
- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000.

# Niveau 2 - Correction

- Afficher le nombre d'employés.

``` sql
SELECT COUNT(*) FROM employees;
```

- Afficher le nombre d'employés qui ont été embauchés en 1986.

``` sql
SELECT COUNT(*) FROM employees WHERE emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986);
```

- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987.

``` sql
SELECT COUNT(*) FROM employees WHERE emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987);
```

- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000.

``` sql
SELECT COUNT(*) FROM employees WHERE emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987) AND emp_no IN (SELECT emp_no FROM salaries WHERE salary > 60000);
```

# Niveau 3 : Moyennes par groupes

- Afficher le salaire moyen de tous les employés actuellement en poste.

- Affiche le salaire moyen de tous les employés en 1994. 


# Niveau 3 - Correction

- Afficher le salaire moyen de tous les employés actuellement en poste.

``` sql
SELECT AVG(salary) FROM salaries WHERE to_date = '9999-01-01';
```

- Affiche le salaire moyen de tous les employés en 1994. 

``` sql
SELECT AVG(salary) FROM salaries WHERE YEAR(from_date) = 1994;
``` 

# Niveau 4 : filtrage par modèle

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E".

- Afficher le nom et le prénom de tous les employés dont le nom de famille se termine par la lettre "a".

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e".

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e" et qui ont été embauchés en 1986.

- Afficher le nom et le prénom de tous les employés dont le prénom commence par la lettre "c" et se termine par la lettre "a".

# Niveau 4 - Correction

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E".

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%';
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille se termine par la lettre "a".

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE '%a';
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e".

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE '%e%';
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e" et qui ont été embauchés en 1986.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE '%e%' AND YEAR(hire_date) = 1986;
```

- Afficher le nom et le prénom de tous les employés dont le prénom commence par la lettre "c" et se termine par la lettre "a".

``` sql
SELECT first_name, last_name FROM employees WHERE first_name LIKE 'c%a';
```

# Niveau 5 : trier les résultats

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986.

# Niveau 5 - Correction

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' ORDER BY last_name ASC;
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' ORDER BY last_name DESC;
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' AND YEAR(hire_date) = 1986 ORDER BY last_name DESC;
```

# Niveau 6 : résultat unique.

- Afficher le nom de famille de tous les employés.

- Afficher le nom de famille de tous les employés sans doublons.

- Afficher le nom de famille de tous les employés sans doublons et triés par ordre alphabétique.

# Niveau 6 - Correction

- Afficher le nom de famille de tous les employés.

``` sql
SELECT last_name FROM employees;
```

- Afficher le nom de famille de tous les employés sans doublons.

``` sql
SELECT DISTINCT last_name FROM employees;
```

- Afficher le nom de famille de tous les employés sans doublons et triés par ordre alphabétique.

``` sql
SELECT DISTINCT last_name FROM employees ORDER BY last_name ASC;
```

# Niveau 7 : pagination

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 premiers résultats.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 résultats suivants.

# Niveau 7 - Correction

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 premiers résultats.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' AND YEAR(hire_date) = 1986 ORDER BY last_name DESC LIMIT 10;
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 résultats suivants.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' AND YEAR(hire_date) = 1986 ORDER BY last_name DESC LIMIT 10 OFFSET 10;
```

# Niveau 8 : grouper les résultats

- Afficher le nombre d'employés par année d'embauche.

- Afficher le nombre de salariés ayant le même nom de famille.

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom.

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom et le même prénom, quand il y en a au moins 2.

# Niveau 8 - Correction

- Afficher le nombre d'employés par année d'embauche.

``` sql
SELECT COUNT(*), YEAR(hire_date) FROM employees GROUP BY YEAR(hire_date);
```

- Afficher le nombre de salariés ayant le même nom de famille.

``` sql
SELECT COUNT(*), last_name FROM employees GROUP BY last_name;
```

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom.

``` sql
SELECT COUNT(*), last_name, first_name FROM employees GROUP BY last_name, first_name;
```

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom et le même prénom, quand il y en a au moins 2.

``` sql
SELECT COUNT(*), last_name, first_name FROM employees GROUP BY last_name, first_name HAVING COUNT(*) > 1;
```

# Niveau 9 : jointures

- Afficher le nom et le prénom de tous les employés et leur département.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire et leur titre.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire et leur titre et leur manager.

# Niveau 9 - Correction

- Afficher le nom et le prénom de tous les employés et leur département.

``` sql
SELECT employees.first_name, employees.last_name, departments.dept_name 
FROM employees 
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no;
```

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire.

``` sql
SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name, salaries.salary
FROM employees 
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no 
INNER JOIN salaries ON employees.emp_no = salaries.emp_no 
WHERE salaries.to_date = "9999-01-01"
ORDER BY employees.hire_date;
```

- Afficher le nom et le prénom de tous les employés, leur département, leur salaire actuel et leur titre.

``` sql
SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name, salaries.salary, titles.title
FROM employees 
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no 
INNER JOIN salaries ON employees.emp_no = salaries.emp_no 
INNER JOIN titles ON employees.emp_no = titles.emp_no
WHERE salaries.to_date = "999-01-01"
ORDER BY employees.hire_date;
```





// A voir 


- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986.

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987.

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000.

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E" ou "A".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E" ou "A" et qui ont un prénom qui se termine par la lettre "a".


> Attention, ces exercices sont plus difficiles !


- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009".

``` sql
SELECT first_name, last_name FROM employees WHERE (last_name = 'Facello' OR last_name = 'Simmel') AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009');
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005".

``` sql
SELECT first_name, last_name FROM employees WHERE (last_name = 'Facello' OR last_name = 'Simmel') AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005');
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986.

``` sql
SELECT first_name, last_name 
FROM employees 
WHERE (last_name = 'Facello' OR last_name = 'Simmel') 
AND emp_no IN 
    (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') 
AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986);
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987.

``` sql
SELECT first_name, last_name FROM employees WHERE (last_name = 'Facello' OR last_name = 'Simmel') AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987);
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000.

``` sql
SELECT first_name, last_name FROM employees 
WHERE (last_name = 'Facello' OR last_name = 'Simmel') 
    AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987) 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE salary > 60000);
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E".

``` sql
SELECT first_name, last_name FROM employees 
WHERE (last_name = 'Facello' OR last_name = 'Simmel') 
    AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987) 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE salary > 60000) 
    AND first_name LIKE 'E%';
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E" ou "A".

``` sql
SELECT first_name, last_name FROM employees 
WHERE (last_name = 'Facello' OR last_name = 'Simmel') 
    AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987) 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE salary > 60000) 
    AND (first_name LIKE 'E%' OR first_name LIKE 'A%');
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel" et qui travaillent dans le département "d009" ou "d005" et qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000 et qui ont un prénom qui commence par la lettre "E" ou "A" et qui ont un prénom qui se termine par la lettre "a".

``` sql
SELECT first_name, last_name FROM employees 
WHERE (last_name = 'Facello' OR last_name = 'Simmel') 
    AND emp_no IN (SELECT emp_no FROM dept_emp WHERE dept_no = 'd009' OR dept_no = 'd005') 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE YEAR(from_date) = 1986 OR YEAR(from_date) = 1987) 
    AND emp_no IN (SELECT emp_no FROM salaries WHERE salary > 60000) 
    AND (first_name LIKE 'E%' OR first_name LIKE 'A%') 
    AND first_name LIKE '%a';
```