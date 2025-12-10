
# #️⃣ Fiche : Manipuler des fichiers JSON en PHP

## 🎯 Objectifs

* Lire un fichier JSON avec PHP
* Ajouter des données
* Modifier des données
* Réécrire correctement un fichier JSON
* Comprendre les fonctions essentielles : `file_get_contents`, `json_encode`, `json_decode`, `file_put_contents`

---

# 📌 1. Qu’est-ce qu’un fichier JSON ?

Le **JSON** (*JavaScript Object Notation*) est un format texte utilisé pour stocker des données structurées.

Exemple :

```json
[
  {
    "id": 1,
    "titre": "Quiz Histoire",
  }
]
```

En PHP, on manipule ce JSON comme **un tableau associatif**.

---

# 📌 2. Lire un fichier JSON

```php
$json = file_get_contents("data/quizzes.json"); // Lire le fichier
$data = json_decode($json, true);              // Convertir en tableau PHP
```

* `file_get_contents()` → lit le fichier
* `json_decode(..., true)` → convertit le JSON en **tableau associatif**

### ❗ Vérifier si le JSON est vide ou invalide

```php
if (!is_array($data)) {
    $data = [];
}
```

---

# 📌 3. Ajouter une donnée dans un JSON

Exemple : ajouter un quiz dans la liste.

```php
$newQuiz = [
    "id" => count($data) + 1,
    "titre" => "Nouveau quiz"
];

$data[] = $newQuiz;
```

On ajoute simplement au tableau existant.

---

# 📌 4. Modifier une donnée dans un JSON

Exemple : changer le titre du quiz avec l’ID 1.

```php
foreach ($data as &$quiz) {
    if ($quiz["id"] === 1) {
        $quiz["titre"] = "Titre modifié";
    }
}
```

> **Important** : utiliser `&` dans `foreach` pour modifier l’élément directement.

---

# 📌 5. Supprimer une donnée

Exemple : retirer le quiz n°2.

```php
foreach ($data as $index => $quiz) {
    if ($quiz["id"] === 2) {
        unset($data[$index]);
    }
}
```

---

# 📌 6. Réécrire le JSON dans le fichier

```php
file_put_contents(
    "data/quizzes.json",
    json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
);
```

Options utiles :

* **JSON_PRETTY_PRINT** → format lisible
* **JSON_UNESCAPED_UNICODE** → pas d’accents en Unicode bizarre


---

# 📌 8. Bonnes pratiques

* Toujours vérifier que le fichier existe :

```php
if (!file_exists("data/quizzes.json")) {
    file_put_contents("data/quizzes.json", "[]");
}
```

* Toujours faire `json_decode` avec `true`
* Ne jamais ouvrir un fichier JSON en écriture directe → on **réécrit tout**
* Faire des sauvegardes régulières en cours de projet
