function calculator() {
  let result = 0;

  function add(value) {
    result += value;
    return this;
  }

  function subtract(value) {
    result -= value;
    return this;
  }

  function multiply(value) {
    result *= value;
    return this;
  }

  function divide(value) {
    result /= value;
    return this;
  }

  function getResult() {
    return result;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    getResult,
  };
}

// Example usage:
const calc = calculator();

const finalResult = calc.add(5).getResult();

console.log(finalResult);
