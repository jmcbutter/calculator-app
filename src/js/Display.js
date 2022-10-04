const Display = (function () {
  const display = document.getElementById("display");

  function clearDisplay() {
    display.value = formatValue('0');
    display.dispatchEvent(new Event("input"));
  }

  function addValue(value) {
    display.value = display.value == formatValue('0') 
                    ? formatValue(value) 
                    : formatValue(combineValues(display.value, value));
    display.dispatchEvent(new InputEvent("input"));
    
  }

  function removeValue() {
    let newValue = removeSeparators(display.value.slice(0, -1));
    display.value = formatValue(newValue);
    if (!display.value) clearDisplay();
  }

  function combineValues(a, b) {
    return removeSeparators(a) + removeSeparators(b);
  }

  function removeSeparators(value) {
    return value.replaceAll(",", "");
  }

  function formatValue(value) {
    return (+value).toLocaleString("en-US");
  }

  function getValue() {
    return display.value;
  }

  return {
    clearDisplay,
    addValue,
    removeValue,
    removeSeparators,
    formatValue,
    getValue,
  }
})()

export default Display;