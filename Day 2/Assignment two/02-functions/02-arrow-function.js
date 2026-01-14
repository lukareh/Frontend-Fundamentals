// Convert the above function into an arrow function

const addNumbers = (num1, num2) => {
  return num1 + num2;
};

// Or even more concise (implicit return)
const addNumbersConcise = (num1, num2) => num1 + num2;

// Test the function
console.log("Arrow Function - Add Two Numbers");
console.log("addNumbers(5, 3):", addNumbers(5, 3));                      // 8
console.log("addNumbers(10, 20):", addNumbers(10, 20));                  // 30
console.log("addNumbersConcise(-5, 15):", addNumbersConcise(-5, 15));   // 10
console.log("addNumbersConcise(0, 0):", addNumbersConcise(0, 0));       // 0
