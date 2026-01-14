// Explain the difference between null and undefined with code

// undefined: Variable declared but not assigned a value
let undefinedVar;
console.log("undefinedVar:", undefinedVar);        // undefined
console.log("Type:", typeof undefinedVar);          // undefined

// null: Explicitly assigned to represent "no value" or "empty"
let nullVar = null;
console.log("nullVar:", nullVar);                   // null
console.log("Type:", typeof nullVar);               // object (JavaScript quirk)

// Key Differences:
console.log("\n--- Key Differences ---");

// 1. undefined is automatically assigned by JavaScript
let a;
console.log("1. Uninitialized variable:", a);       // undefined

// 2. null must be explicitly assigned by programmer
let b = null;
console.log("2. Explicitly null variable:", b);     // null

// 3. Comparison
console.log("\n--- Comparison ---");
console.log("null == undefined:", null == undefined);    // true (loose equality)
console.log("null === undefined:", null === undefined);  // false (strict equality)

// 4. Type check
console.log("\n--- Type Check ---");
console.log("typeof undefined:", typeof undefined);      // undefined
console.log("typeof null:", typeof null);                // object

// 5. Usage scenarios
function getUser(id) {
  if (id === 0) {
    return null;  // User doesn't exist - intentionally empty
  }
  // User object not found yet - undefined by default
}

console.log("\n--- Usage Example ---");
console.log("getUser(0):", getUser(0));                  // null
console.log("getUser(1):", getUser(1));                  // undefined
