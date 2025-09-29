// Current Practice Session - JavaScript Symbols
// =============================================

import logger from '../utils/logger.js';

logger.practice('JavaScript Symbols - Let\'s Practice!');

console.log('🏃‍♂️ Ready to explore Symbols!');
console.log('');

// Quick Symbol Starter - Feel free to modify and experiment!
console.log('=== Symbol Basics ===');

// Create your first symbols
const mySymbol = Symbol('my first symbol');
const anotherSymbol = Symbol('my first symbol'); // Same description, different symbol!

console.log('mySymbol:', mySymbol);
console.log('anotherSymbol:', anotherSymbol);
console.log('Are they equal?', mySymbol === anotherSymbol); // What do you think this will be?

// Practice area - modify below this line
// ====================================

// Try these exercises:
// 1. Create an object with symbol properties
// 2. Use Symbol.for() to create global symbols
// 3. Make a custom iterator with Symbol.iterator
// 4. Experiment with well-known symbols like Symbol.toStringTag

console.log('\n🎯 Your experiments go here...');


// ====================================
// End practice area

console.log('');
logger.tip('Run `npm run practice:watch` to see changes in real-time!');
logger.tip('Check out concepts/symbols.js for detailed examples');
logger.tip('Try the exercises in practices/symbols-practice.js');
logger.tip('Test your knowledge with `node tests/symbols.test.js`');
console.log('✅ Symbol practice session ready!');