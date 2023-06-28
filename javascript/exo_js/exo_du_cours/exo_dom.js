// Une balise main :
// -> contenant : h1

// -> contenant :

// => 3 articles : contenant h2 + 3 paragraphes.

// Footer :

// -> Liste a puce avec 5 items.

// Main a une couleur de fond.

// Paragraphes : une font différente.
/*
function changeStyle(element, styleElement, newValue) {
  element.style[styleElement] = newValue;
}

function createElement(parent, tagElement, childs) {

  let element = document.createElement(tagElement);
  if(childs) {
    for(let child of childs) {
      let childElement = document.createElement(child.tag);
      childElement.textContent = child.textContent;
      element.appendChild(childElement)
    }
  }

  parent.appendChild(element)
}

function createPage() {

  let body = document.querySelector("body");

  let main = createMain();

  let footer = createFooter();

  body.appendChild(main);
  body.appendChild(footer);

}

function createFooter() {
  let footer = document.createElement("footer");

  createElement(footer, 'ul', [{tag:'li', textContent:'First li'}, {tag:'li', textContent:'Second li'}, {tag:'li', textContent:'Third li'}])

  return footer;
}

function createMain() {
  let main = document.createElement("main");

  createElement(main, "article", [{tag:"h2", textContent:"Hi"}, {tag:"p", textContent:"Super chose"}, {tag:"p", textContent:"Pas ouf"}])
  createElement(main, "article", [{tag:"h2", textContent:"Hi"}, {tag:"p", textContent:"Super article"}, {tag:"p", textContent:"Pas ouf"}])
  createElement(main, "article", [{tag:"h2", textContent:"Hi"}, {tag:"p", textContent:"Super article"}, {tag:"p", textContent:"Pas ouf"}])

  return main;
}

function updatePage() {
  let main = document.querySelector('main')
  let paragraphs = document.querySelectorAll('p')

  changeStyle(main, 'backgroundColor', 'lightBlue');
  for(let paragraph of paragraphs) {
    changeStyle(paragraph, 'fontFamily', "'Courier New', Courier, monospace")
  }
}

createPage();
updatePage();

let paragraphs = document.querySelectorAll('p')
*/
  
const main = document.createElement('main');
main.style.backgroundColor = '#F5F5F5';

function createHeader() {
  const header = document.createElement('h1');
  header.textContent = 'Salut Christian tu apprend vite';
  return header;
}

function createArticle() {
  const article = document.createElement('article');
  const header = document.createElement('h2');
  header.textContent = 'article';
  article.appendChild(header);
  for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    p.style.backgroundColor = '#D9D9D9';
    p.textContent = 'Paragraphe ' + i;
    article.appendChild(p);
  }
  return article;
}

function createFooter() {
  const footer = document.createElement('footer');
  const ul = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = 'Item ' + i;
    ul.appendChild(li);
  }
  footer.appendChild(ul);
  return footer;
}

main.appendChild(createHeader());
for (let i = 1; i <= 3; i++) {
  main.appendChild(createArticle());
}

main.appendChild(createFooter());
document.body.appendChild(main);
