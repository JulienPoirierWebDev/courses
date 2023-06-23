### 

### Exo tableau :

```js
let notes_de_bob = [];

// Ajouter les notes de l'élève : 
// 10,8,6,14,19,20,0,5

let addNote = true;

while(addNote) {

    let note = prompt("Ajouter une note :")

    // Faire quelque chose
    alert(note)

    let question = prompt("Souhaitez-vous arreter d'ajouter des notes ? Tapez 'oui' en minuscule ")

    if(question === "oui") {
        addNote=false;
    } 
}

alert(notes_de_bob) // [10,8,6,14,19,20,0,5]
```

### Exercice 1 : Afficher les éléments d'un tableau

Créez un tableau qui contient plusieurs chaînes de caractères. Parcourez le tableau et affichez chaque élément dans la console.

```js
const fruits = ['pomme', 'banane', 'orange', 'raisin'];

for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i]);
}
```

### Exercice 2 : Inverser un tableau

Écrivez une fonction qui inverse l'ordre des éléments d'un tableau. Ne pas utiliser la méthode `reverse()`.

```js
function inverserTableau(tableau) {
 const nouveauTableau = [];
 for (let i = tableau.length - 1; i >= 0; i--) {
 nouveauTableau.push(tableau[i]);
 }
 return nouveauTableau;
}

const chiffres = [1, 2, 3, 4, 5];
console.log(inverserTableau(chiffres)); // [5, 4, 3, 2, 1]
```

### Exercice 3 : Trouver le maximum et le minimum dans un tableau

Écrivez une fonction qui trouve et retourne le maximum et le minimum d'un tableau de nombres.

```js
function maxEtMin(tableau) {

for (let i = 1; i < tableau.length; i++) {
 if (tableau[i] > max) {
 max = tableau[i];
 } else if (tableau[i] < min) {
 min = tableau[i];
 }
 }
 return { max, min };
}

const nombres = [4, 7, 2, 9, 12, -3, 6];
console.log(maxEtMin(nombres)); // { max: 12, min: -3 }
```

### Exercice 4 : Compter les occurrences d'un élément dans un tableau

Écrivez une fonction qui compte combien de fois un élément donné apparaît dans un tableau.

```js
function compterOccurrences(tableau, element) {
 let count = 0;

for (let i = 0; i < tableau.length; i++) {
 if (tableau[i] === element) {
 count++;
 }
 }
 return count;
}

const tableauExemple = ['a', 'b', 'a', 'c', 'd', 'a', 'b', 'c'];
console.log(compterOccurrences(tableauExemple, 'a')); // 3
```
