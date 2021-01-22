function createArray(input) {
  const outputArray = [];
  for (i=0; i<=input; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

function arrayTest(input) {
  return input;
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    const inputArray = createArray(input);
    $(".return").empty();
    $(".return").append(inputArray);
  });
});