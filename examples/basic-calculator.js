// Example: Basic Calculator
// Demonstrates functions, objects, and user interaction

import logger from '../utils/logger.js';

logger.practice('Basic Calculator');

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  calculate(operation, a, b) {
    switch(operation) {
      case '+': return this.add(a, b);
      case '-': return this.subtract(a, b);
      case '*': return this.multiply(a, b);
      case '/': return this.divide(a, b);
      default: throw new Error(`Unknown operation: ${operation}`);
    }
  }
}

// Demo usage
const calc = new Calculator();

logger.section('Basic Operations');
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
console.log(`15 / 3 = ${calc.divide(15, 3)}`);

logger.section('Using calculate method');
console.log(`8 + 2 = ${calc.calculate('+', 8, 2)}`);
console.log(`12 - 5 = ${calc.calculate('-', 12, 5)}`);

logger.section('Error handling');
try {
  calc.divide(10, 0);
} catch (error) {
  logger.error(`Error caught: ${error.message}`);
}

logger.success('Calculator example complete!');