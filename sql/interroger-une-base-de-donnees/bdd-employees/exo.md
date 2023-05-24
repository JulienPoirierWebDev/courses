
## Exercice sur les selections avec conditions.

# Niveau 1 : selection

- Afficher le nom et le prénom de tous les employés.

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello".

- Afficher le nom et le prénom de tous les employés dont le nom de famille est "Facello" ou "Simmel".


# Niveau 2 : agrégation

- Afficher le nombre d'employés.

- Afficher le nombre d'employés qui ont été embauchés en 1986.

- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987.

> Celui là est plus dur, attention ! (Ne pas y arriver est normal !)
- Afficher le nombre d'employés qui ont été embauchés en 1986 ou 1987 et qui ont un salaire supérieur à 60 000.

# Niveau 3 : Moyennes par groupes

- Afficher le salaire moyen de tous les employés actuellement en poste.

- Affiche le salaire moyen de tous les employés en 1994. 


# Niveau 4 : filtrage par modèle

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E".

- Afficher le nom et le prénom de tous les employés dont le nom de famille se termine par la lettre "a".

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e".

- Afficher le nom et le prénom de tous les employés dont le nom de famille contient la lettre "e" et qui ont été embauchés en 1986.

- Afficher le nom et le prénom de tous les employés dont le prénom commence par la lettre "c" et se termine par la lettre "a".


# Niveau 5 : trier les résultats

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986.

# Niveau 6 : résultat unique.

- Afficher le nom de famille de tous les employés.

- Afficher le nom de famille de tous les employés sans doublons.

- Afficher le nom de famille de tous les employés sans doublons et triés par ordre alphabétique.

# Niveau 7 : pagination

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 premiers résultats.

- Afficher le nom et le prénom de tous les employés dont le nom de famille commence par la lettre "E" triés par ordre alphabétique inversé et qui ont été embauchés en 1986. Afficher les 10 résultats suivants.


# Niveau 8 : grouper les résultats

- Afficher le nombre d'employés par année d'embauche.

- Afficher le nombre de salariés ayant le même nom de famille.

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom.

- Afficher le nombre de salariés ayant le même nom de famille et le même prénom et le même prénom, quand il y en a au moins 2.


# Niveau 9 : jointures

- Afficher le nom et le prénom de tous les employés et leur département.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire et leur titre.

- Afficher le nom et le prénom de tous les employés et leur département et leur salaire et leur titre et leur manager.



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