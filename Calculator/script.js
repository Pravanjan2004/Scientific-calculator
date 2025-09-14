const display = document.getElementById("display");

// Append numbers/operators
function appendValue(value) {
  display.value += value;
}

// Append scientific function
function appendFunc(func) {
  display.value += func;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Factorial function
function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Evaluate result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression");
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9+\-*/().]/)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
