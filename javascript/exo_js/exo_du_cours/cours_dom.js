/* 

<!-- create a simple webpage with article and paragraphs-->
    <article>
        
        <h1 class="header" id="main-header" style="background-color: blue;">Titre</h1>
        <p class="yellow">Paragraphe 1</p>
        <p class="green">Paragraphe 2</p>
        <p class="purple">Paragraphe 3</p>
        <p class="yellow">Paragraphe 4</p>
        <p class="green">Paragraphe 5</p>
        <p class="purple">Paragraphe 6</p>
        <p class="yellow">Paragraphe 7</p>
        <p class="green">Paragraphe 8</p>
        <p class="purple">Paragraphe 9</p>
    </article>

*/


// Première étape dans le DOM, c'est la selection des éléments. 


//let header = document.querySelector('h1');

//let header = document.querySelector('.header');

//let header = document.querySelector('#main-header');

let header = document.getElementById("main-header")

let article = document.getElementsByTagName('article')[0];

let tagsWithYellowClass = document.getElementsByClassName('yellow')

// cibler par rapport a un élement en question : cibler ses enfants, cibler son parent, cibler ses frères / soeurs. 
// Le premier enfant d'un élément HTML, c'est son texte content.
let firstParagraph = article.firstChild;

let parentOfArtcile = article.parentElement;

// la deuxième étape, c'est de modifier les élements sélectionnés. 

// modifier le style. 
header.style.backgroundColor = "red";

// Dans une boucle, sur un tableau d'élements. 
for(tag of tagsWithYellowClass) {
  tag.style.color = 'yellow';
  tag.style.backgroundColor = "black";
  tag.style.marginTop = "50px";
  tag.style.transform = "rotate(5deg)";
}

tagsWithYellowClass[0].setAttribute("data-info", "first")
tagsWithYellowClass[0].textContent = "Hi !"

tagsWithYellowClass[1].innerHTML = `<ul><li>Item1</li><li>Item2</li></ul>` 

// Etape 3 : créer des élements a partir de rien !

// Créer un tag : ici un paragraphe
let newParagraph = document.createElement('p');

// Je donne cet élement comment enfant a un autre élement.
article.appendChild(newParagraph)


newParagraph.textContent = "Hello world !"



// Le premier enfant d'un élément HTML, c'est son texte content.
let firstElementOfArticle = article.firstElementChild;

console.log(firstElementOfArticle)

// Supprimer un élement. 
article.removeChild(firstElementOfArticle)