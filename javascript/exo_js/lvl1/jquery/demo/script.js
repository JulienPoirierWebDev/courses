console.log("Hello from script.js");

console.log($("#monBouton"));

$("#monBouton").on("click", function () {
  $("#monParagraphe").animate(
    {
      opacity: 0,
    },
    1000,
    function () {
      window.location.href =
        "http://127.0.0.1:5500/javascript/exo_js/exo_js/jquery/demo/contact.html";
    }
  );
});
