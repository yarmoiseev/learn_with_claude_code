// Symbol Tests - Validate Your Understanding
// ==========================================

// Test 1: Symbol Uniqueness
function testSymbolUniqueness() {
    console.log('\n🧪 Test 1: Symbol Uniqueness');

    const sym1 = Symbol();
    const sym2 = Symbol();
    const sym3 = Symbol('test');
    const sym4 = Symbol('test');

    console.assert(sym1 !== sym2, '❌ Different symbols should not be equal');
    console.assert(sym3 !== sym4, '❌ Symbols with same description should not be equal');
    console.assert(typeof sym1 === 'symbol', '❌ Symbol should have type "symbol"');

    console.log('✅ Symbol uniqueness tests passed');
}

// Test 2: Global Symbol Registry
function testGlobalSymbolRegistry() {
    console.log('\n🧪 Test 2: Global Symbol Registry');

    const global1 = Symbol.for('test');
    const global2 = Symbol.for('test');
    const regular = Symbol('test');

    console.assert(global1 === global2, '❌ Global symbols with same key should be equal');
    console.assert(global1 !== regular, '❌ Global and regular symbols should not be equal');
    console.assert(Symbol.keyFor(global1) === 'test', '❌ keyFor should return the key');
    console.assert(Symbol.keyFor(regular) === undefined, '❌ keyFor should return undefined for regular symbols');

    console.log('✅ Global symbol registry tests passed');
}

// Test 3: Symbol as Object Keys
function testSymbolAsObjectKeys() {
    console.log('\n🧪 Test 3: Symbol as Object Keys');

    const sym1 = Symbol('prop1');
    const sym2 = Symbol('prop2');

    const obj = {
        [sym1]: 'symbol value 1',
        [sym2]: 'symbol value 2',
        normalProp: 'string value'
    };

    console.assert(obj[sym1] === 'symbol value 1', '❌ Should access symbol property');
    console.assert(Object.keys(obj).length === 1, '❌ Object.keys should not include symbol keys');
    console.assert(Object.keys(obj)[0] === 'normalProp', '❌ Object.keys should only include string keys');
    console.assert(Object.getOwnPropertySymbols(obj).length === 2, '❌ Should have 2 symbol properties');

    console.log('✅ Symbol as object keys tests passed');
}

// Test 4: Well-Known Symbols
function testWellKnownSymbols() {
    console.log('\n🧪 Test 4: Well-Known Symbols');

    const customObj = {
        [Symbol.toStringTag]: 'CustomType'
    };

    const toStringResult = Object.prototype.toString.call(customObj);
    console.assert(toStringResult === '[object CustomType]', '❌ Custom toString tag should work');

    console.log('✅ Well-known symbols tests passed');
}

// Test 5: Custom Iterator
function testCustomIterator() {
    console.log('\n🧪 Test 5: Custom Iterator');

    const iterable = {
        data: [1, 2, 3],
        [Symbol.iterator]() {
            let index = 0;
            const data = this.data;
            return {
                next() {
                    if (index < data.length) {
                        return { value: data[index++], done: false };
                    }
                    return { done: true };
                }
            };
        }
    };

    const result = [];
    for (const value of iterable) {
        result.push(value);
    }

    console.assert(result.length === 3, '❌ Should iterate over 3 items');
    console.assert(result[0] === 1 && result[1] === 2 && result[2] === 3, '❌ Should iterate in correct order');

    const spreadResult = [...iterable];
    console.assert(spreadResult.length === 3, '❌ Spread operator should work with custom iterator');

    console.log('✅ Custom iterator tests passed');
}

// Test 6: Symbol Properties Behavior
function testSymbolPropertiesBehavior() {
    console.log('\n🧪 Test 6: Symbol Properties Behavior');

    const sym = Symbol('test');
    const obj = { [sym]: 'hidden', visible: 'public' };

    // Should not appear in normal enumeration
    let foundInForIn = false;
    for (let key in obj) {
        if (key === sym) foundInForIn = true;
    }
    console.assert(!foundInForIn, '❌ Symbol properties should not appear in for...in');

    // Should not be in JSON
    const jsonString = JSON.stringify(obj);
    const parsed = JSON.parse(jsonString);
    console.assert(!parsed.hasOwnProperty(sym), '❌ Symbol properties should not survive JSON serialization');
    console.assert(parsed.visible === 'public', '❌ String properties should survive JSON serialization');

    console.log('✅ Symbol properties behavior tests passed');
}

// Run all tests
export function runSymbolTests() {
    console.log('🧪 Running Symbol Tests...\n');

    try {
        testSymbolUniqueness();
        testGlobalSymbolRegistry();
        testSymbolAsObjectKeys();
        testWellKnownSymbols();
        testCustomIterator();
        testSymbolPropertiesBehavior();

        console.log('\n🎉 All Symbol tests passed! You understand symbols well.');
        return true;
    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        return false;
    }
}

// Self-executing test when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runSymbolTests();
}