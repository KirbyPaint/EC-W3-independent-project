$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    $(".return").empty();
    $(".return").append(input);
  });
});