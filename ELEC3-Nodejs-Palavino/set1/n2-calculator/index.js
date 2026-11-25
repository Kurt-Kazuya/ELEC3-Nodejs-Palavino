// Name: YOUR FULL NAME
// Section: IV-BSIT X
// Activity: N2 - Modular Calculator
// Date: November 24, 2026

const os = require('os');
const path = require('path');
const operations = require('./operations');
const { formatResult } = require('./formatter');

const operation = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

console.log(`Calculator running on ${os.platform()} by ${os.userInfo().username}`);
console.log(`File: ${path.basename(__filename)}`);
console.log('-----------------------------------');

if (!operation) {
  console.log('Usage: node index.js <add|subtract|multiply|divide|average> <numbers>');
} else if (!Object.keys(operations).includes(operation)) {
  console.log(`Error: Unknown operation "${operation}".`);
  console.log('Available operations: add, subtract, multiply, divide, average');
} else if (numbers.length === 0 || numbers.some(isNaN)) {
  console.log('Error: Please enter valid numbers.');
} else if (operation !== 'average' && numbers.length !== 2) {
  console.log(`Error: "${operation}" needs exactly two numbers.`);
} else {
  try {
    let result;
    if (operation === 'average') {
      result = operations.average(numbers);
    } else {
      result = operations[operation](numbers[0], numbers[1]);
    }
    console.log(formatResult(operation, numbers, result));
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
