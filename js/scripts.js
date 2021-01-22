$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    console.log(input);
    alert(input);
    $(".return").append(input);

  });
});