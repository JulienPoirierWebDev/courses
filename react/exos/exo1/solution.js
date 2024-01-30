// Solution 1 - 4

const div = document.createElement("div");
div.textContent = "Je m'appelle Bob";

const onClick = () => alert("Bonjour Bob !");

div.addEventListener("click", onClick);
document.getElementById("root").appendChild(div);

// Solution 5

const Counter = (initialValue = 0) => {
  const button = document.createElement("button");
  button.textContent = initialValue;

  const onClick = () => {
    button.textContent = parseInt(button.textContent) + 1;
  };

  button.addEventListener("click", onClick);
  document.getElementById("root").appendChild(button);
};

Counter();
Counter(100);

//Solution 6
const fruits = ["Pomme", "Poire", "Banane", "Fraise", "Orange"];

const List = (array) => {
  const ul = document.createElement("ul");

  const fruitsLi = array.map((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    return li;
  });

  ul.append(...fruitsLi);

  document.getElementById("root").appendChild(ul);
};

List(fruits);
