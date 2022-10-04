import Display from "./js/Display";
const VALID_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ".", "Backspace", "Delete", "ArrowLeft", "ArrowRight"]

let buttons = document.querySelectorAll("[data-key]");
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("data-key"));
  })
})

const display = document.getElementById("display");

display.addEventListener("keydown", (e) => {
  let key = e.key;
  if (!VALID_KEYS.includes(key)) e.preventDefault();
  if (key == "." && display.value.includes(".")) e.preventDefault();
})

display.addEventListener("focus", (e) => {
  display.value = Display.removeSeparators(display.value);
  if (display.value == 0) display.value = "";
})

display.addEventListener("blur", () => {
  display.value = Display.formatValue(display.value);
})