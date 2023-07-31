const allFeatures = document.querySelectorAll(".feature");

console.log(allFeatures);

allFeatures.forEach((feature) => {
  feature.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("J'ai cliqué sur une feature (enfant) ", event.target);
  });
});

const featuresContainer = document.querySelector(".features");

featuresContainer.addEventListener("click", (event) => {
  console.log("J'ai cliqué sur le parent", event.target);
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email, name, message;
  // methode 1
  /*
  for (key in form.elements) {
    const element = form.elements[key];
    if (element.value) {
      if (element.name === "name") {
        name = element.value;
      } else if (element.name === "message") {
        message = element.value;
      } else if (element.name === "email") {
        email = element.value;
      }
    }
  }
  */

  // Methode 2
  /*
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const nameInput = document.querySelector("#name");

  name = nameInput.value;
  message = messageInput.value;
  email = emailInput.value;
  */

  // Méthode 3

  const formData = new FormData(event.target);
  name = formData.get("name");
  email = formData.get("email");
  message = formData.get("message");
  formeData.set();

  console.log(name, message, email);
});
