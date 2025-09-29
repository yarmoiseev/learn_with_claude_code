import { test } from 'node:test';
import assert from 'node:assert';

// Example test file - demonstrates testing concepts
test('basic JavaScript operations', () => {
  // Test basic arithmetic
  assert.strictEqual(2 + 2, 4);

  // Test string operations
  const greeting = 'Hello' + ' ' + 'World';
  assert.strictEqual(greeting, 'Hello World');

  // Test array operations
  const numbers = [1, 2, 3];
  assert.strictEqual(numbers.length, 3);
  assert.strictEqual(numbers[0], 1);
});

test('array methods', () => {
  const numbers = [1, 2, 3, 4, 5];

  // Test filter
  const evens = numbers.filter(n => n % 2 === 0);
  assert.deepStrictEqual(evens, [2, 4]);

  // Test map
  const doubled = numbers.map(n => n * 2);
  assert.deepStrictEqual(doubled, [2, 4, 6, 8, 10]);
});

console.log('📝 Run tests with: npm test');