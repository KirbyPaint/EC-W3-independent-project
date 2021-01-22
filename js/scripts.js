$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    console.log(input);
    alert(input);
    $(".return").append(input);

  });
});