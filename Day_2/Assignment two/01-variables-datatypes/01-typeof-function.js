// Write a function that accepts different data types and prints their type using typeof

function printDataType(value) {
  console.log(`Value: ${value}, Type: ${typeof value}`);
}

// Test with different data types
printDataType(42);                    // number
printDataType("Hello");               // string
printDataType(true);                  // boolean
printDataType(undefined);             // undefined
printDataType(null);                  // object (this is a known JavaScript quirk)
printDataType({ name: "John" });      // object
printDataType([1, 2, 3]);             // object
printDataType(function() {});         // function
printDataType(Symbol("id"));          // symbol
printDataType(10n);                   // bigint
