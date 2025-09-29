// JavaScript Symbols - The Unique Primitive Type
// ================================================

import logger from '../utils/logger.js';

logger.concept('JavaScript Symbols');

// What is a Symbol?
// A Symbol is a primitive data type that represents a unique identifier
// Every Symbol is completely unique, even if they have the same description

console.log('\n=== Symbol Basics ===');

// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('description');
const sym4 = Symbol('description');

console.log('sym1:', sym1);
console.log('sym2:', sym2);
console.log('sym1 === sym2:', sym1 === sym2); // false - always unique!
console.log('sym3:', sym3);
console.log('sym4:', sym4);
console.log('sym3 === sym4:', sym3 === sym4); // false - even with same description!

// Symbol descriptions are just for debugging
console.log('sym3.description:', sym3.description);

console.log('\n=== Why Use Symbols? ===');

// 1. Unique object keys (no collisions)
const myObj = {};
const key1 = Symbol('key');
const key2 = Symbol('key');

myObj[key1] = 'First value';
myObj[key2] = 'Second value';
myObj.normalKey = 'Normal value';

console.log('Object with symbol keys:', myObj);
console.log('Value with key1:', myObj[key1]);
console.log('Value with key2:', myObj[key2]);

// Symbol keys don't appear in regular object iteration
console.log('Object.keys():', Object.keys(myObj));
console.log('for...in loop:');
for (let key in myObj) {
    console.log(`  ${key}: ${myObj[key]}`);
}

// But you can get them specifically
console.log('Symbol keys:', Object.getOwnPropertySymbols(myObj));

console.log('\n=== Global Symbol Registry ===');

// Symbol.for() creates/retrieves symbols from global registry
const globalSym1 = Symbol.for('shared');
const globalSym2 = Symbol.for('shared');

console.log('Global symbols are equal:', globalSym1 === globalSym2); // true!
console.log('Key for global symbol:', Symbol.keyFor(globalSym1));

// Regular symbols are not in global registry
const regularSym = Symbol('not global');
console.log('Key for regular symbol:', Symbol.keyFor(regularSym)); // undefined

console.log('\n=== Well-Known Symbols ===');

// JavaScript has built-in symbols for special behaviors
console.log('Symbol.iterator:', Symbol.iterator);
console.log('Symbol.toStringTag:', Symbol.toStringTag);
console.log('Symbol.hasInstance:', Symbol.hasInstance);

// Example: Custom toString behavior
const customObj = {
    [Symbol.toStringTag]: 'CustomObject',
    value: 42
};

console.log('Custom toString:', Object.prototype.toString.call(customObj));

console.log('\n=== Practical Example: Private Properties ===');

// Using symbols for "private" properties
const _name = Symbol('name');
const _age = Symbol('age');

class Person {
    constructor(name, age) {
        this[_name] = name;
        this[_age] = age;
        this.id = Math.random(); // public property
    }

    getName() {
        return this[_name];
    }

    getAge() {
        return this[_age];
    }

    toString() {
        return `Person(${this[_name]}, ${this[_age]})`;
    }
}

const person = new Person('Alice', 30);
console.log('Person:', person.toString());
console.log('Public property id:', person.id);
console.log('Direct access to name:', person.name); // undefined
console.log('Access via method:', person.getName());

// The "private" properties don't show in normal iteration
console.log('Visible keys:', Object.keys(person));
console.log('All properties:', Object.getOwnPropertyNames(person));
console.log('Symbol properties:', Object.getOwnPropertySymbols(person));

console.log('\n=== Iterator Example ===');

// Custom iterator using Symbol.iterator
const range = {
    start: 1,
    end: 5,

    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;

        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log('Custom iterable:');
for (const num of range) {
    console.log('  Number:', num);
}

// Can also use with spread operator
console.log('Spread range:', [...range]);

console.log('\n=== Symbol as Enum Alternative ===');

// Better than string constants - no accidental matches
const Colors = {
    RED: Symbol('red'),
    GREEN: Symbol('green'),
    BLUE: Symbol('blue')
};

function processColor(color) {
    switch (color) {
        case Colors.RED:
            return 'Processing red';
        case Colors.GREEN:
            return 'Processing green';
        case Colors.BLUE:
            return 'Processing blue';
        default:
            return 'Unknown color';
    }
}

console.log(processColor(Colors.RED));
console.log(processColor(Symbol('red'))); // Won't match - different symbol!

logger.practice('Try experimenting with symbols in practices/current.js!');