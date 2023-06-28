

let fruitsArray = ["pomme", "banane", "cerise", "orange", "mangue", "poire"];

let users = ["Bob", "John", "Sarah"];
// 0    1    2 

// Push pour ajouter a la fin d'un tableau
users.push("Emma")

console.log(users)

// Pop pour supprimer le dernier élement d'un tableau
users.pop()

console.log(users);

// Unshift pour ajouter au début
// ["Bob", "John", "Sarah"];
users.unshift("Mike")
console.log(users);



// Shift pour enlever au début
users.shift()
console.log(users);

console.log(fruitsArray)

// Pour trouver un élement
let index = fruitsArray.indexOf("cerise");
let deletedElement = fruitsArray.splice(index,1);
console.log(fruitsArray);


