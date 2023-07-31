/*

Nous allons créer un jeu qui demande à l'utilisateur de trouver un nombre génére aléatoirement entre 1 et 100.

Pour cela, nous allons utiliser une boucle while qui va s'exécuter tant que le nombre n'a pas été trouvé.

Bonus : afficher le nombre de coups qu'il a fallu à l'utilisateur pour trouver le nombre.
Bonus : afficher un message d'erreur si l'utilisateur saisit un nombre qui n'est pas compris entre 1 et 100.

Tips: Vous pouvez fixer le nombre a trouver pour tester votre code. Seulement lorsque vous êtes sûr que votre code fonctionne, vous pouvez générer un nombre aléatoire.
*/

window.onload = function () {
  guessNumberV2(1, 100);
};

function guessNumber() {
  let isNumberFound = false;
  const numberToGuess = Math.floor(Math.random() * 100) + 1;
  let userNumber = 0;
  let message = "Veuillez saisir un nombre entre 1 et 100";
  let counter = 0;

  while (!isNumberFound) {
    userNumber = parseInt(prompt(message));

    if (userNumber < 1 || userNumber > 100) {
      message = "Veuillez saisir un nombre entre 1 et 100";
    }

    counter++;
    if (userNumber > numberToGuess) {
      message = "C'est moins";
    } else if (userNumber < numberToGuess) {
      message = "C'est plus";
    } else {
      message = "C'est gagné en " + counter + " coups";
      isNumberFound = true;
    }
  }
  alert(message);
}

function guessNumberV2(min, max) {
  let isNumberFound = false;
  let isContinue = true;

  let numberToGuess = Math.floor(Math.random() * max) + 1;
  let userNumber = 0;
  let message = `Veuillez saisir un nombre entre ${min} et ${max}`;
  let counter = 0;

  while (!isNumberFound && isContinue) {
    userNumber = askNumber(message, min, max);
    counter++;
    if (isContinue === false) {
      log("quitting");
      return;
    }

    if (userNumber > numberToGuess) {
      message = "C'est moins";
    } else if (userNumber < numberToGuess) {
      message = "C'est plus";
    } else if (!isNaN(userNumber)) {
      message = "C'est gagné en " + counter + " coups";
      isNumberFound = true;
    } else {
      message = "Vous avez quitté le jeu";
      isContinue = false;
    }
  }

  if (!isContinue) {
    alert(message);
  } else if (isNumberFound && isContinue) {
    alert(message);
  }
}

function askNumber(message, min, max) {
  console.log(min, max);
  if (!min || !max) {
    throw new Error("Pas de min ou de max");
  }
  let userNumber = parseInt(prompt(message));

  if (userNumber < min || userNumber > max) {
    message = `Le nombre n'est pas acceptable. Veuillez saisir un nombre entre ${min} et ${max}`;
    return askNumber(message, min, max);
  }

  if (isNaN(userNumber)) {
    isWantToPlay = confirm("Voulez-vous continuer a jouer ?");
    if (!isWantToPlay) {
      return;
    } else {
      return askNumber(message, min, max);
    }
  }

  return userNumber;
}
