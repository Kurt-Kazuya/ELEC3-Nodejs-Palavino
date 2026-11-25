// Name: YOUR FULL NAME
// Section: IV-BSIT X
// Activity: N2 - Modular Calculator
// Date: November 24, 2026

const symbols = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

function formatResult(operation, numbers, result) {
  const answer = Number(result.toFixed(2));

  if (operation === 'average') {
    return `Average of ${numbers.join(', ')} = ${answer}`;
  }
  return `${numbers[0]} ${symbols[operation]} ${numbers[1]} = ${answer}`;
}

module.exports = { formatResult };
