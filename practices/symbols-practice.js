// Symbol Practice Exercises
// ========================

import logger from '../utils/logger.js';

logger.practice('Symbol Practice Session');

console.log('\n🎯 EXERCISE 1: Symbol Basics');
console.log('Create two symbols with the same description and compare them');
// TODO: Create sym1 and sym2 both with description 'mySymbol'
// TODO: Log both symbols and compare them with ===

console.log('\n🎯 EXERCISE 2: Object Properties');
console.log('Use symbols as object keys to avoid naming conflicts');
// TODO: Create an object with both string and symbol keys
// TODO: Add multiple properties with the same string name but different symbols
// TODO: Show how Object.keys() vs Object.getOwnPropertySymbols() behave differently

console.log('\n🎯 EXERCISE 3: Global Symbol Registry');
console.log('Work with the global symbol registry');
// TODO: Create two symbols using Symbol.for() with the same key
// TODO: Verify they are equal
// TODO: Use Symbol.keyFor() to get the key back
// TODO: Try Symbol.keyFor() with a regular symbol

console.log('\n🎯 EXERCISE 4: Well-Known Symbols');
console.log('Use Symbol.toStringTag to customize object type');
// TODO: Create an object that returns 'MyCustomType' when Object.prototype.toString is called
// TODO: Test it with Object.prototype.toString.call()

console.log('\n🎯 EXERCISE 5: Private-ish Properties');
console.log('Simulate private properties using symbols');
// TODO: Create a simple class or object that uses symbols for internal properties
// TODO: Show that these properties don't appear in normal object iteration
// TODO: But can still be accessed if you have the symbol

console.log('\n🎯 EXERCISE 6: Custom Iterator');
console.log('Create a custom iterable object using Symbol.iterator');
// TODO: Create an object that can be used in a for...of loop
// TODO: Make it iterate over a custom sequence (like even numbers, fibonacci, etc.)
// TODO: Test it with for...of and spread operator

console.log('\n🎯 EXERCISE 7: Symbol Enum Pattern');
console.log('Use symbols instead of strings for constants');
// TODO: Create a set of constants using symbols (like HTTP methods, states, etc.)
// TODO: Create a function that switches on these symbol constants
// TODO: Show that string values won't accidentally match

console.log('\n🎯 BONUS CHALLENGE: Metadata System');
console.log('Build a simple metadata system using symbols');
// TODO: Create symbols for different types of metadata
// TODO: Add metadata to objects without polluting their normal properties
// TODO: Create helper functions to get/set/check metadata

// Experiment Zone - Try your own ideas!
console.log('\n🧪 EXPERIMENT ZONE');
console.log('Try breaking things, changing values, exploring edge cases...');

// Questions to explore:
// - What happens if you JSON.stringify an object with symbol properties?
// - Can symbols be used as array indices?
// - How do symbols behave with typeof operator?
// - What happens when you try to convert symbols to strings?

logger.tip('Remember: The best way to learn is by doing! Modify this code and see what happens.');