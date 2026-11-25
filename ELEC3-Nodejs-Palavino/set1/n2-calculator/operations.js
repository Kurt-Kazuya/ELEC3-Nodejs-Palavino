// Name: YOUR FULL NAME
// Section: IV-BSIT X
// Activity: N2 - Modular Calculator
// Date: November 24, 2026

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}

function average(numbers) {
  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}

module.exports = { add, subtract, multiply, divide, average };
