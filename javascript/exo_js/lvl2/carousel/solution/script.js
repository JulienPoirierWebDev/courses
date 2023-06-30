/*

Vous allez réaliser un caroussel en pure JS ! 

-> Il faut sélectionner toutes les images. 
-> Puis les boutons. 

-> Il faut trouver un moyen de déplacer les images en changeant le CSS dynamiquement avec le javascript. 

Tips : sur la class carousel-container, regardez ce qu'il se passe lorsque l'on enlève le overflow : hidden. 

Bonus : Permettre un défilement automatique. 
Super Bonus : permettre un défilement automatique, sauf quand l'utilisateur a sa souris dans le composant.
Super Bonus : trouver un moyen d'avoir un défilement infini (sans effet de rembobinage)

PS : Il y a surement d'autres manières de faire un caroussel, ceci en est une assez simple. 

*/

window.onload = function () {
  carouselV2();
};

function carousel() {
  const all_img = document.querySelectorAll(".carousel-img");

  const carousel = document.querySelector(".carousel");

  const prev = document.querySelector(".previous");
  const next = document.querySelector(".next");

  prev.addEventListener("click", handleClickPrev);
  next.addEventListener("click", handleClickNext);

  let count = 0;

  function handleClickPrev(event) {
    count--;
    if (count < 0) {
      count = all_img.length - 1;
    }

    carousel.style.transform = `translateX(-${200 * count}px)`;
  }

  function handleClickNext(event) {
    count++;
    if (count > all_img.length - 1) {
      count = 0;
    }

    carousel.style.transform = `translateX(-${200 * count}px)`;
  }
}

function carouselV2() {
  const all_img = document.querySelectorAll(".carousel-img");
  const carousel = document.querySelector(".carousel");

  const last_img = all_img[all_img.length - 1];
  const first_img = all_img[0];
  let isTransition = false;

  const first_img_copy = document.createElement("img");
  first_img_copy.setAttribute("src", first_img.src);

  carousel.appendChild(first_img_copy);

  const prev = document.querySelector(".previous");
  const next = document.querySelector(".next");

  prev.addEventListener("click", handleClickPrev);
  next.addEventListener("click", handleClickNext);

  // permettre de mettre la bonne image (1e ou dernière) sans que l'user le voit
  prev.addEventListener("mouseenter", handleMousePrev);
  next.addEventListener("mouseenter", handleMouseNext);

  let count = 0;
  const imgWidth = all_img[0].clientWidth; // Largeur d'une image

  function handleClickPrev(event) {
    if (isTransition) {
      return;
    }
    count--;
    if (count <= 0) {
      carousel.ontransitionend = () => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${imgWidth * count}px)`;
        isTransition = false;
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition après le défilement
        }, 50);
      };
      isTransition = true;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;

      count = all_img.length;
    } else {
      carousel.ontransitionend = () => {
        isTransition = false;
      };
      isTransition = true;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;
    }
  }

  function handleClickNext(event) {
    if (isTransition) {
      return;
    }
    count++;

    if (count >= all_img.length) {
      carousel.ontransitionend = () => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${imgWidth * count}px)`;
        isTransition = false;
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition après le défilement
        }, 50);
      };
      isTransition = true;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;
      count = 0;
    } else {
      carousel.ontransitionend = () => {
        isTransition = false;
      };
      isTransition = true;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;
    }
  }

  function handleMousePrev(event) {
    if (count === 0) {
      carousel.style.transition = "none";
      count = all_img.length;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition après le défilement
      }, 50);
    }
  }

  function handleMouseNext(event) {
    if (count === all_img.length) {
      carousel.style.transition = "none";
      count = 0;
      carousel.style.transform = `translateX(-${imgWidth * count}px)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition après le défilement
      }, 50);
    }
  }
}
