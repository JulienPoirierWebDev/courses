// On récupère tous les élements ayant la classe "key" dans un array
let keys_array = document.querySelectorAll('.key');

// On récupère tous élements ayant la classe "audio" dans un array
let sounds = document.querySelectorAll('audio');

// ---------- GESTION DES CLICKS

// On parcourt chaque élement de key_array et on le nomme key
for(let key of keys_array) {

    // pour chaque élement key, on lui ajoute un écouteur d'évènement au click
    key.addEventListener("click", function(event) {

        let dataKey;
        let element;

        // Je vérifie si l'élement qui a déclenché l'évènement (celui sur lequel on a cliqué)
        // Possède un attribut "data-key"

        // Si ce n'est pas le cas, c'est que c'est le parent qui le possède. 
        if(!event.target.dataset.key) {
            element = event.target.parentNode
            dataKey = element.dataset.key;
        } else {
            // Autrement, event.target est le bon élement. 
            element = event.target

            dataKey = element.dataset.key
        }

        // On lance la fonction qui permet de rechercher le son a lire et de le lire.
        // A partir de la dataKey 
        searchAndPlaySound(sounds, dataKey)
        addAndRemoveClassOnElement(element);

    })
}


// ------------- GESTION DES TOUCHES

// On sélection le body pour que peu importe où l'on soit dans la page, 
// L'appui des touches soit écouté. 
let body = document.querySelector("body");

// On lui ajoute l'écouteur d'évenement lorsqu'on appui sur une touche
body.addEventListener('keydown', function(event) {
    // On récupère le code de la touche appuyé. 
    let dataKey = event.code
    

    // On lance la fonction qui permet de rechercher le son a lire et de le lire.
    // A partir de la dataKey 
    searchAndPlaySound(sounds, dataKey);
    
    // je parcours tous les élements ayant la classe "key"
    // pour identifier celui associé a la touche appuyé. 
    keys_array.forEach(key => {
        // Si c'est l'élement qui a en attribut "data-key" la valeur de la touche appuyé
        if(key.dataset.key === dataKey) {
            addAndRemoveClassOnElement(key);
        }
    });

    
})

// La fonction modulaire pour lire le son : 
function searchAndPlaySound(sounds, key) {
    // On parcourt chaque son
    sounds.forEach(sound => {
        // Si l'élement HTML sound a l'attribut "data-key" correspondant a la touche concerné 
        if(sound.dataset.key === key) {
            // On joue le son
            sound.play()
        }
    });
}

function addAndRemoveClassOnElement(element) {
            // On ajoute la classe "playing" a l'élement pour que l'interfance visuelle change. 
            element.classList.toggle("playing")

            // On utilise setTimeout pour lancer une fonction dans 200 ms qui enlevera la classe "playing" a l'élement, 
            // Pour que l'interface revienne a sa situation initiale. 
            setTimeout(() => {
                element.classList.toggle("playing")
            },200)
}