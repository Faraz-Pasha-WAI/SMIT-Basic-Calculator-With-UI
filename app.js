let display = document.getElementById("display");

let forClearScreen = false;

function appendvalue(val) {
  let lastValue = display.value.slice(-1);
  let opt = ["+", "-", "*", "/", "%", "."];

  let isOpt = false;
  let isLastOpt = false;

  for (let i = 0; i < opt.length; i++) {
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

 
  if (justCalculated === true && isOpt === false) {
    display.value = "";
  }
  justCalculated = false;


  display.value += val;
}



function clearvalue() {
  display.value = "";
}

function deletevalue() {
    display.value = display.value.slice(0, -1);
}

function calculation() {
    display.value = eval(display.value);
}