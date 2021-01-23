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

function arrayNameTest(input, name) {
  const outputArray = [];
  for (let i = 0; i <= input; i++) {
    if ([i].toString().includes("3")) {
      outputArray.push("Won't you be my neighbor, " + name + "?");
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

function lineByLineName(input, name) {
  const outputArray = [];
  for (let i = 0; i <= input; i++) {
    if ([i].toString().includes("3")) {
      outputArray.push("Won't you be my neighbor, " + name + "?<br>");
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

function reverse(input) {
  const outputArray = [];
  for (let i = input; i >= 0; i--) {
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

$(document).ready(function() {
  $("button#lineByLine").click(function() {
    const input = $("input#inputText").val();
    const name = $("input#inputName").val();
    if (name) {
      outputArray = lineByLineName(input, name);
    }
    else {
      outputArray = lineByLine(input);
    }
    $(".return").empty();
    $(".return").append(outputArray);
  });

  $("button#reverse").click(function() {
    const input = $("input#inputText").val();
    $(".return").empty();
    $(".return").append(reverse(input));
  });

  $("button#dark-mode").click(function() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  });

  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("input#inputText").val();
    const name = $("input#inputName").val();
    constOutputArray = [];
    if (name) {
      outputArray = arrayNameTest(input, name);
    }
    else {
      outputArray = arrayTest(input);
    }

    $(".return").empty();
    $(".return").append(outputArray);
  });
});