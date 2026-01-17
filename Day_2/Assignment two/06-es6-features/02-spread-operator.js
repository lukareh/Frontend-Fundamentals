// Merge two arrays using spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread operator
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);
// [1, 2, 3, 4, 5, 6]

// Additional examples
console.log("\n--- More Spread Operator Examples ---");

// Merging with additional elements
const mergedWithExtra = [...arr1, 3.5, ...arr2, 7, 8];
console.log("With extra elements:", mergedWithExtra);

// Copying an array
const copiedArray = [...arr1];
console.log("Copied array:", copiedArray);

// Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged object:", mergedObj);

// Spreading strings
const str = "Hello";
const chars = [...str];
console.log("String to array:", chars);
