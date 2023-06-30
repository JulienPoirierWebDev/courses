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
  carousel();
};
