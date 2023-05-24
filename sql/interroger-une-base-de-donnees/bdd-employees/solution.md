
# Niveau 1 : selection - Correction

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

--- 

# Niveau 2 : agrégation - Correction

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


# Niveau 3 : Moyennes par groupe - Correction

- Afficher le salaire moyen de tous les employés actuellement en poste.

``` sql
SELECT AVG(salary) FROM salaries WHERE to_date = '9999-01-01';
```

- Affiche le salaire moyen de tous les employés en 1994. 

``` sql
SELECT AVG(salary) FROM salaries WHERE YEAR(from_date) = 1994;
``` 



# Niveau 4 : filtrage par modèle - Correction

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

# Niveau 5 : trier les résultats - Correction

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

# Niveau 6 : résultat unique - Correction

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

# Niveau 7 : pagination - Correction

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 premiers résultats.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' AND YEAR(hire_date) = 1986 ORDER BY last_name DESC LIMIT 10;
```

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 résultats suivants.

``` sql
SELECT first_name, last_name FROM employees WHERE last_name LIKE 'E%' AND YEAR(hire_date) = 1986 ORDER BY last_name DESC LIMIT 10 OFFSET 10;
```


# Niveau 8 : grouper les résultats - Correction

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


# Niveau 9 : jointures - Correction