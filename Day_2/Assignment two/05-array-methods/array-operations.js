// Array Methods: map, filter, reduce

const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

console.log("Original Array:", numbers);

// 1. Use map to multiply each array element by 2
console.log("\n=== 1. Map: Multiply each element by 2 ===");
const multipliedBy2 = numbers.map(num => num * 2);
console.log("Result:", multipliedBy2);

// 2. Use filter to find numbers greater than 10
console.log("\n=== 2. Filter: Numbers greater than 10 ===");
const greaterThan10 = numbers.filter(num => num > 10);
console.log("Result:", greaterThan10);

// 3. Use reduce to find the sum of array elements
console.log("\n=== 3. Reduce: Sum of all elements ===");
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

// 4. Reverse an array
console.log("\n=== 4. Reverse Array ===");
// Method 1: Using reverse() - modifies original array
const numbersCopy = [...numbers];  // Create a copy
const reversed = numbersCopy.reverse();
console.log("Reversed:", reversed);

// Method 2: Without modifying original (using slice)
const reversedNonMutating = numbers.slice().reverse();
console.log("Reversed (non-mutating):", reversedNonMutating);

// Original array remains unchanged
console.log("\nOriginal Array (unchanged):", numbers);
