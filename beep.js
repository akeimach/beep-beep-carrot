
$(document).ready(function() {
  $("#click-me").on("click", function(event) {
    var beep = $("<img>");
    beep.attr("src", "roadrunner.png");
    $("#beep-container").append(beep);
  });
});