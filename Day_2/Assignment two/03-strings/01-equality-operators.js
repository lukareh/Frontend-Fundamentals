// Write difference between == and === in JavaScript with examples

console.log("=== Difference between == and === ===\n");

// == (Loose Equality / Abstract Equality)
// - Performs type coercion before comparison
// - Converts operands to same type, then compares

console.log("--- == (Loose Equality) ---");
console.log("5 == '5':", 5 == '5');              // true (string '5' converted to number)
console.log("0 == false:", 0 == false);          // true (false converted to 0)
console.log("null == undefined:", null == undefined); // true
console.log("'' == 0:", '' == 0);                // true (empty string converted to 0)
console.log("'0' == false:", '0' == false);      // true

// === (Strict Equality)
// - No type coercion
// - Compares both value and type
// - Returns true only if both type and value are same

console.log("\n--- === (Strict Equality) ---");
console.log("5 === '5':", 5 === '5');            // false (different types)
console.log("0 === false:", 0 === false);        // false (different types)
console.log("null === undefined:", null === undefined); // false (different types)
console.log("'' === 0:", '' === 0);              // false (different types)
console.log("'0' === false:", '0' === false);    // false (different types)

// When both are same type
console.log("\n--- When types are same ---");
console.log("5 == 5:", 5 == 5);                  // true
console.log("5 === 5:", 5 === 5);                // true
console.log("'hello' == 'hello':", 'hello' == 'hello');     // true
console.log("'hello' === 'hello':", 'hello' === 'hello');   // true

// Best Practice: Always use === unless you specifically need type coercion
console.log("\nBest Practice: Use === for comparisons to avoid unexpected behavior");
