function createArray(input) {
  const outputArray = [];
  for (i=0; i<=input; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

function arrayTest(input) {
  const length = input.length;
  for (i=0; i<=length; i++) {
    if (input[i].includes("1")) {
      if (input[i].includes("2")) {
        if (input[i].includes("3")) {
          console.log(3);
          input[i] = "Won't you be my neighbor?";
        }
      }
      else {
        console.log(2);
        input[i] = "Boop";
      }
    }
    else {
      console.log(1);
      input[i] = "Beep";
    }
  }
  return input;
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    const inputArray = createArray(input);
    const outputArray = arrayTest(inputArray);
    $(".return").empty();
    $(".return").append(outputArray);
  });
});