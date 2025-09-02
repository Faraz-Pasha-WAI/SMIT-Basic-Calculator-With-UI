var display = document.getElementById("display");

var forClearScreen = false;

function appendvalue(val) {
  var lastValue = display.value.slice(-1);
  var opt = ["+", "-", "*", "/", "%", "."];
  var isOpt = false;
  var isLastOpt = false;

  for (var i = 0; i < opt.length; i++) {                                                                                     
    if (val === opt[i]) {
      isOpt = true;
    }
    if (lastValue === opt[i]) {
      isLastOpt = true;
      break;
    }
  }

  if (isOpt && isLastOpt) {
    return;
  }

  if (val === ".") {
    if (display.value === "") {
      display.value = "0.";
      return;
    }


    for (var i = display.value.length - 1; i >= 0; i--) {
      var ch = display.value[i];
      if (opt.includes(ch) && ch !== ".") break; 
      if (ch === ".") return; 
    }
  }
 
  if (forClearScreen && !isOpt) {
    display.value = "";
  }
  forClearScreen = false;

  if (display.value === "" && isOpt && val !== "-") {
    return;
  }

  display.value += val;
}

function clearvalue() {
  display.value = "";
}

function deletevalue() {
    display.value = display.value.slice(0, -1);
}

function calculation() {
  var expression = display.value;
  var opt = ["+", "-", "*", "/", "%", "."];

  var lastChar = expression.slice(-1);
  if (opt.includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  if (expression !== "") {
    display.value = eval(expression);
    forClearScreen = true; 
  }
  
}