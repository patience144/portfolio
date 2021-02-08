$(document).ready();

$("button").on("click", (event) => {
  $(event.currentTarget).parent().find("p").toggleClass("hidden");
});
