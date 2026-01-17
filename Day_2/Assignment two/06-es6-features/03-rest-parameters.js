// Create a function accepting 5 numbers using rest parameters and display sum

function sumNumbers(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`Sum of [${numbers.join(', ')}] = ${sum}`);
  return sum;
}

// Test with 5 numbers
sumNumbers(10, 20, 30, 40, 50);

// Rest parameters can accept any number of arguments
console.log("\n--- More Examples ---");
sumNumbers(5, 15, 25);
sumNumbers(100, 200, 300, 400, 500, 600);
sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Rest parameters vs spread operator
console.log("\n--- Rest vs Spread ---");
console.log("Rest: Collects multiple arguments into an array (in function parameters)");
console.log("Spread: Expands an array into individual elements");

// Example showing both
const nums = [1, 2, 3, 4, 5];
console.log("\nUsing spread to pass array to rest parameter function:");
const result = sumNumbers(...nums);  // spread: expands array
console.log("Result:", result);
