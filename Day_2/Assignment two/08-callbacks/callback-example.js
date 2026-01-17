// Create a function that accepts a callback and executes it after 10 seconds

function executeAfterDelay(callback) {
  console.log("Starting timer... Will execute callback after 10 seconds");
  console.log("Time started:", new Date().toLocaleTimeString());
  
  setTimeout(() => {
    console.log("\n10 seconds have passed!");
    console.log("Time now:", new Date().toLocaleTimeString());
    callback();
  }, 10000); // 10000 milliseconds = 10 seconds
}

// Define a callback function
function myCallback() {
  console.log("Callback function executed successfully!");
  console.log("This message appears after 10 seconds delay.");
}

// Execute the function with callback
executeAfterDelay(myCallback);

// You can also use an anonymous function as callback
console.log("\n--- Example with anonymous callback ---");

executeAfterDelay(function() {
  console.log("Anonymous callback executed!");
});

// Or with arrow function
console.log("\n--- Example with arrow function callback ---");

executeAfterDelay(() => {
  console.log("Arrow function callback executed!");
  console.log("Callbacks are powerful for async operations!");
});

console.log("\nWaiting for callbacks to execute...");
console.log("Note: This code is non-blocking. You can continue other operations while waiting.");
