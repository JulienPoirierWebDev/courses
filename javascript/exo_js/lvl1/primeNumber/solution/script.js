/*
Vous devez créer un programme qui demande à l'utilisateur de saisir un nombre et qui lui indique si ce nombre est un nombre premier ou non.

Un nombre premier est un nombre qui n'est divisible que par 1 et par lui-même.
Il faut donc trouver un moyen de vérifier si le nombre est divisible par un autre nombre que 1 et lui-même.
*/

const number = parseInt(prompt("Entrez un nombre :"));

if (isNaN(number)) {
  alert("Vous n'avez pas entré un nombre.");
} else {
  if (primeNumberDetector(parseInt(number))) {
    alert(`${number} est un nombre premier.`);
  } else {
    alert(`${number} n'est pas un nombre premier.`);
  }
}

function primeNumberDetector(number) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
