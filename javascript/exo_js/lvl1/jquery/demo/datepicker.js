$(document).ready(function () {
  $("#my_date_picker1, #my_date_picker2").datepicker({
    altField: "#datepicker",
    closeText: "Fermer",
    prevText: "Précédent",
    nextText: "Suivant",
    currentText: "Aujourd'hui",
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
    weekHeader: "Sem.",
    dateFormat: "dd-mm-yy",
  });
  $(function () {
    $("#my_date_picker1").datepicker({});
  });

  $(function () {
    $("#my_date_picker2").datepicker({});
  });

  $("#my_date_picker1").change(function () {
    startDate = $(this).datepicker("getDate");
    $("#my_date_picker2").datepicker("option", "minDate", startDate);
  });

  $("#my_date_picker2").change(function () {
    endDate = $(this).datepicker("getDate");
    $("#my_date_picker1").datepicker("option", "maxDate", endDate);
  });
});
