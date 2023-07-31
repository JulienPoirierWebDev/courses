console.log("products.js");

const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 1099,
    description:
      "Le dernier smartphone haut de gamme d'Apple avec une caméra améliorée, un écran OLED et une autonomie améliorée.",
    image:
      "https://cdn.pixabay.com/photo/2021/09/15/14/57/iphone-13-6626577_960_720.jpg",
    quantity: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Flip 3",
    price: 1499,
    description:
      "Un smartphone pliable compact et élégant de Samsung avec une caméra de haute qualité et un écran flexible.",
    image:
      "https://cdn.pixabay.com/photo/2021/08/23/13/28/samsung-6561467_960_720.jpg",
    quantity: 8,
  },
  {
    id: 3,
    name: "DJI Mavic 2 Pro",
    price: 1899,
    description:
      "Un drone de qualité professionnelle avec une caméra Hasselblad 20 mégapixels et une portée de vol de 8 km.",
    image:
      "https://cdn.pixabay.com/photo/2020/07/17/06/43/dji-5412124_960_720.jpg",
    quantity: 4,
  },
  {
    id: 4,
    name: "Apple MacBook Pro M1",
    price: 1499,
    description:
      "Un ordinateur portable haut de gamme d'Apple avec la nouvelle puce M1, une autonomie de 20 heures et un écran Retina.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/30/17/47/macbook-5973059_960_720.jpg",
    quantity: 6,
  },
  {
    id: 5,
    name: "LG UltraGear 27GN950-B",
    price: 1299,
    description:
      "Un écran PC gaming 4K avec une fréquence de rafraîchissement de 144 Hz et une luminosité de 600 nits.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/31/16/52/lg-ultragear-5977457_960_720.jpg",
    quantity: 3,
  },
  {
    id: 6,
    name: "Sony WH-1000XM4",
    price: 349,
    description:
      "Un casque audio sans fil haut de gamme avec une réduction de bruit active et une autonomie de 30 heures.",
    image:
      "https://cdn.pixabay.com/photo/2020/09/29/20/48/headphones-5612729_960_720.jpg",
    quantity: 12,
  },
  {
    id: 7,
    name: "Logitech G Pro X Keyboard",
    price: 149,
    description:
      "Un clavier de jeu mécanique avec des switches GX Blue, des touches programmables et un éclairage RGB personnalisable.",
    image:
      "https://cdn.pixabay.com/photo/2021/02/06/11/05/logitech-5987156_960_720.jpg",
    quantity: 7,
  },
  {
    id: 8,
    name: "ASUS ROG Strix G15",
    price: 1799,
    description:
      "Un ordinateur portable de jeu puissant avec un processeur Intel Core i7, une carte graphique NVIDIA RTX 3070 et un écran 240 Hz.",
    image:
      "https://cdn.pixabay.com/photo/2021/03/08/08/49/asus-6088583_960_720.jpg",
    quantity: 5,
  },
  {
    id: 9,
    name: "Google Nest Hub (2ème génération)",
    price: 99,
    description:
      "Un assistant vocal avec un écran tactile de 7 pouces pour contrôler votre maison intelligente et écouter de la musique.",
    image:
      "https://cdn.pixabay.com/photo/2021/03/23/20/28/google-6112669_960_720.jpg",
    quantity: 15,
  },
  {
    id: 10,
    name: "Bose QuietComfort Earbuds",
    price: 279,
    description:
      "Des écouteurs sans fil avec une réduction de bruit active, un son exceptionnel et une autonomie de 6 heures.",
    image:
      "https://cdn.pixabay.com/photo/2020/12/07/13/47/bose-5806972_960_720.jpg",
    quantity: 9,
  },
  {
    id: 11,
    name: "Sony PlayStation 5",
    price: 499,
    description:
      "La dernière console de jeu de Sony avec une puissante carte graphique et un stockage SSD ultra-rapide.",
    image:
      "https://cdn.pixabay.com/photo/2020/10/22/15/53/playstation-5-5678256_960_720.jpg",
    quantity: 2,
  },
  {
    id: 12,
    name: "Xbox Series X",
    price: 499,
    description:
      "La dernière console de jeu de Microsoft avec une carte graphique puissante et un stockage SSD ultra-rapide.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/04/21/36/xbox-5897876_960_720.jpg",
    quantity: 3,
  },
  {
    id: 13,
    name: "GoPro Hero 10 Black",
    price: 499,
    description:
      "Une caméra d'action haut de gamme avec une stabilisation d'image améliorée, un mode HyperSmooth 4.0 et une résolution 5,3K.",
    image:
      "https://cdn.pixabay.com/photo/2021/09/04/19/06/gopro-hero-10-black-6601367_960_720.jpg",
    quantity: 6,
  },
  {
    id: 14,
    name: "Amazon Echo Show 10",
    price: 249,
    description:
      "Un assistant vocal avec un écran HD de 10,1 pouces qui suit vos mouvements et vous permet de passer des appels vidéo.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/13/21/12/amazon-5918015_960_720.jpg",
    quantity: 11,
  },
  {
    id: 15,
    name: "Razer Blade 15",
    price: 1999,
    description:
      "Un ordinateur portable de jeu élégant avec un processeur Intel Core i7, une carte graphique",
    image:
      "https://cdn.pixabay.com/photo/2021/01/13/21/12/amazon-5918015_960_720.jpg",
    quantity: 11,
  },
  {
    id: 16,
    name: "Apple iPad Pro (5ème génération)",
    price: 1099,
    description:
      "La dernière tablette d'Apple avec un processeur M1, un écran Liquid Retina XDR et une caméra ultra grand angle.",
    image:
      "https://cdn.pixabay.com/photo/2021/04/19/14/59/ipad-pro-6194555_960_720.jpg",
    quantity: 8,
  },
  {
    id: 17,
    name: "Microsoft Surface Laptop 4",
    price: 1299,
    description:
      "Un ordinateur portable haut de gamme avec un processeur Intel Core i7, une carte graphique AMD Radeon et un écran tactile PixelSense.",
    image:
      "https://cdn.pixabay.com/photo/2021/03/02/20/47/microsoft-6063534_960_720.jpg",
    quantity: 7,
  },
  {
    id: 18,
    name: "Samsung Odyssey G9",
    price: 1699,
    description:
      "Un écran PC gaming ultralarge de 49 pouces avec une courbure immersive, une résolution de 5120x1440 et une fréquence de rafraîchissement de 240 Hz.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/31/17/09/samsung-odyssey-g9-5977487_960_720.jpg",
    quantity: 2,
  },
  {
    id: 19,
    name: "Logitech G Pro X Wireless",
    price: 199,
    description:
      "Un casque audio sans fil pour les joueurs professionnels avec un son DTS Headphone:X 2.0 et une autonomie de 20 heures.",
    image:
      "https://cdn.pixabay.com/photo/2021/02/07/13/12/logitech-5989473_960_720.jpg",
    quantity: 5,
  },
  {
    id: 20,
    name: "Lenovo Legion 5 Pro",
    price: 1499,
    description:
      "Un ordinateur portable de jeu avec un processeur AMD Ryzen 7, une carte graphique NVIDIA RTX 3070 et un écran 165 Hz.",
    image:
      "https://cdn.pixabay.com/photo/2021/06/24/12/07/lenovo-legion-5-pro-6361011_960_720.jpg",
    quantity: 3,
  },
  {
    id: 21,
    name: "Sony Bravia XR A90J",
    price: 2799,
    description:
      "Un téléviseur 4K OLED avec un processeur Cognitive XR, un son Spatial Sound et un design ultrafin.",
    image:
      "https://cdn.pixabay.com/photo/2021/03/28/07/12/sony-bravia-6121693_960_720.jpg",
    quantity: 1,
  },
];

// Création d'un objet pour stocker les produits du panier
let cart = {};

// Récupération du panier dans le localStorage
const cartInLocalStorage = localStorage.getItem("cart");

// Si le panier existe dans le localStorage
if (cartInLocalStorage) {
  // Conversion de la chaîne de caractères en objet JavaScript
  cart = JSON.parse(cartInLocalStorage);
  // Affichage du nombre d'articles dans le panier
  displayCartLength();
}

// injecter les produits dans la page HTML
function displayProducts() {
  // Sélection de la balise <main>
  let productsList = document.getElementById("products-list");
  console.log(productsList);
  // Parcourir le tableau products
  for (let product of products) {
    // Création d'une balise <article>
    const article = document.createElement("article");
    // Ajout d'une classe "product" à l'article
    article.classList.add("product");
    // Ajout d'un attribut "data-id" à l'article
    article.setAttribute("data-id", product.id);
    // Ajout du HTML de l'article

    article.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">${product.price} €</p>
            <p>${product.description}</p>
            <div>
                <button class="add-to-cart">Ajouter au panier</button>
                <button class="add-one-to-cart hidden">+</button>
                <button class="remove-one-from-cart hidden">-</button>
                <p class="quantity hidden">Quantité : <span class="quantity-number">0</span></p>
            </div>
        `;
    // Ajout de l'article
    productsList.appendChild(article);
  }
}

// Affichage des produits
displayProducts();

// Sélection de tous les boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log("addToCartButtons", addToCartButtons);
// Parcourir tous les boutons "Ajouter au panier"
for (let addToCartButton of addToCartButtons) {
  // Vérifier si le produit est déjà dans le panier
  const productId =
    addToCartButton.parentElement.parentElement.getAttribute("data-id");
  if (cart !== {} && typeof cart[productId] !== "undefined") {
    console.log("here");
    // si oui, vérifier la quantité
    let product = products.find((product) => product.id == productId);
    if (cart[productId].quantity >= product.quantity) {
      // si la quantité est supérieure ou égale à la quantité disponible, désactiver le bouton
      addToCartButton.disabled = true;
    }
    // si la quantité est inférieure à la quantité disponible, afficher les boutons "+", "-" et "Quantité"
    else {
      console.log("here");
      // Sélection des boutons "+", "-" et "Quantité"
      const addOneToCartButton = addToCartButton.nextElementSibling;
      const removeOneFromCartButton = addOneToCartButton.nextElementSibling;
      const quantity = removeOneFromCartButton.nextElementSibling;
      console.log(addOneToCartButton);
      // Affichage des boutons "+", "-" et "Quantité"
      addOneToCartButton.classList.remove("hidden");
      removeOneFromCartButton.classList.remove("hidden");
      quantity.classList.remove("hidden");
      // Affichage de la quantité
      quantity.querySelector(".quantity-number").textContent =
        cart[productId].quantity;
    }
  }
  // Ajout d'un écouteur d'événement "click" sur chaque bouton
  addToCartButton.addEventListener("click", function () {
    // Récupération de l'ID du produit
    const productId = this.parentElement.parentElement.getAttribute("data-id");
    // Si le produit n'est pas déjà dans le panier
    if (cart[productId] === undefined) {
      // Ajout du produit dans le panier
      cart[productId] = {
        quantity: 1,
      };
    } else {
      // Sinon, incrémentation de la quantité
      cart[productId].quantity++;
    }
    // Conversion de l'objet en chaîne de caractères
    const cartInString = JSON.stringify(cart);
    // Enregistrement du panier dans le localStorage
    localStorage.setItem("cart", cartInString);
    // Affichage du nombre d'articles dans le panier
    displayCartLength();
    // Affichage des articles dans le panier
    displayCartItems();
  });
}

// Affichage du nombre d'articles dans le panier
function displayCartLength() {
  // Sélection de la balise <span> qui contient le nombre d'articles
  const cartLength = document.querySelector("#cart-length");
  // Calcul du nombre d'articles dans le panier
  let length = 0;
  for (let productId in cart) {
    length += cart[productId].quantity;
  }
  // Affichage du nombre d'articles dans le panier
  cartLength.textContent = length;
}

function displayCartItems() {
  // Sélection de la balise <table>
  const cartTable = document.querySelector("#cart-list");
  // Suppression du contenu de la balise <table>
  cartTable.innerHTML = "";

  // Parcourir le panier
  for (let productId in cart) {
    // Récupération du produit
    const product = products.find((product) => product.id == productId);
    // Création d'une ligne de tableau
    const tr = document.createElement("tr");
    // Ajout de la ligne de tableau
    cartTable.appendChild(tr);
    // Ajout du HTML de la ligne de tableau
    tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price} €</td>
            <td>${cart[productId].quantity}</td>
            <td>${product.price * cart[productId].quantity} €</td>
        `;
  }
}
