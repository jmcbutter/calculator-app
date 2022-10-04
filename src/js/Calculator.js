let Calculator = (function () {
  function sum(a, b) {
    return a + b;
  }

  function product(a, b) {
    return a * b;
  }

  function difference(a, b) {
    return a - b;
  }

  function quotient(a, b) {
    return a / b;
  }

  return {
    sum,
    product,
    difference,
    quotient,
  }
})();

export default Calculator;