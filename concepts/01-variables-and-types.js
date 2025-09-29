// Concept: Variables and Data Types
// Understanding how to declare and use different types of data

import logger from '../utils/logger.js';

logger.practice('Variables and Data Types');

// Variable declarations
logger.section('Variable Declarations');

// let - block-scoped, can be reassigned
let userName = 'Alice';
console.log(`let userName: ${userName}`);
userName = 'Bob'; // Can reassign
console.log(`Reassigned: ${userName}`);

// const - block-scoped, cannot be reassigned
const pi = 3.14159;
console.log(`const pi: ${pi}`);

// var - function-scoped (avoid in modern JS)
var legacyVar = 'old style';
console.log(`var legacyVar: ${legacyVar}`);

// Data Types
logger.section('Primitive Data Types');

// Number
const age = 25;
const price = 99.99;
console.log(`Number: ${age}, ${price}`);

// String
const firstName = 'John';
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`; // Template literal
console.log(`String: ${fullName}`);

// Boolean
const isStudent = true;
const hasGraduated = false;
console.log(`Boolean: ${isStudent}, ${hasGraduated}`);

// Undefined
let undefinedVar;
console.log(`Undefined: ${undefinedVar}`);

// Null
const emptyValue = null;
console.log(`Null: ${emptyValue}`);

// Symbol (unique identifier)
const uniqueId = Symbol('id');
console.log(`Symbol: ${uniqueId.toString()}`);

// BigInt (for large integers)
const bigNumber = 123456789012345678901234567890n;
console.log(`BigInt: ${bigNumber}`);

// Type checking
logger.section('Type Checking');
console.log(`typeof age: ${typeof age}`);
console.log(`typeof fullName: ${typeof fullName}`);
console.log(`typeof isStudent: ${typeof isStudent}`);
console.log(`typeof undefinedVar: ${typeof undefinedVar}`);
console.log(`typeof emptyValue: ${typeof emptyValue}`); // Note: returns 'object'
console.log(`typeof uniqueId: ${typeof uniqueId}`);
console.log(`typeof bigNumber: ${typeof bigNumber}`);

// Complex data types
logger.section('Complex Data Types');

// Array
const fruits = ['apple', 'banana', 'orange'];
console.log(`Array: ${fruits}`);
console.log(`typeof fruits: ${typeof fruits}`); // Returns 'object'
console.log(`Array.isArray(fruits): ${Array.isArray(fruits)}`);

// Object
const person = {
  name: 'Jane',
  age: 30,
  city: 'New York'
};
console.log(`Object:`, person);
console.log(`typeof person: ${typeof person}`);

// Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(`Function: ${greet('World')}`);
console.log(`typeof greet: ${typeof greet}`);

logger.success('Variables and types exploration complete!');

// Practice exercises:
// 1. Create variables of each primitive type
// 2. Practice type checking with typeof
// 3. Experiment with template literals
// 4. Try variable reassignment with let vs const