function arrayTest(input) {
  const outputArray = [];
  for (let i = 0; i <= input; i++) {
    if ([i].toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?");
    }
    else if ([i].toString().includes("2")) {
      outputArray.push("Boop");
    }
    else if ([i].toString().includes("1")) {
      outputArray.push("Beep");
    }
    else {
      outputArray.push(i);
    }
  }
  const formatArray = outputArray.join(", ");
  return formatArray;
}

function lineByLine(input) {
  const outputArray = [];
  for (let i = 0; i <= input; i++) {
    if ([i].toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?<br>");
    }
    else if ([i].toString().includes("2")) {
      outputArray.push("Boop<br>");
    }
    else if ([i].toString().includes("1")) {
      outputArray.push("Beep<br>");
    }
    else {
      outputArray.push(i + "<br>");
    }
  }
  return outputArray;
}

$(document).ready(function() {
  $("button#lineByLine").click(function() {
    const input = $("input#inputText").val();
    //const outputArray = lineByLine(input);
    $(".return").empty();
    $(".return").append(lineByLine(input));
  });

  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    const outputArray = arrayTest(input);
    $(".return").empty();
    $(".return").append(outputArray);
  });
});