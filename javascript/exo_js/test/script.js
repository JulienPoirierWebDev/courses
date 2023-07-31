const paragraphs = document.querySelectorAll(".text-light");

console.log(paragraphs);

paragraphs.forEach((element) => {
  element.classList.toggle("text-danger");
  element.classList.toggle("text-light");
  element.style.fontSize = "200px"; //background-color
});
