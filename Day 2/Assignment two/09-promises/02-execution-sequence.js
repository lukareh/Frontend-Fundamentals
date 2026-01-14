// Guess the execution sequence of the code

console.log("1: Start");

setTimeout(() => {
  console.log("2: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

console.log("4: End");

// Output: 1: Start, 4: End, 3: Promise, 2: setTimeout
// Microtasks (Promises) execute before macrotasks (setTimeout)

console.log("\nSee above for execution order");
