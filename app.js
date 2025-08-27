let display = document.getElementById("display");

function appendvalue(val) {
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