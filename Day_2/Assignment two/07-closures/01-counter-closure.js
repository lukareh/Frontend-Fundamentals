// Create a counter function using closure

function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment: function() {
      count++;
      console.log("Count after increment:", count);
      return count;
    },
    decrement: function() {
      count--;
      console.log("Count after decrement:", count);
      return count;
    },
    getCount: function() {
      console.log("Current count:", count);
      return count;
    },
    reset: function() {
      count = 0;
      console.log("Counter reset to:", count);
      return count;
    }
  };
}

// Create counter instance
const counter = createCounter();

console.log("=== Counter Operations ===");
counter.increment();      // 1
counter.increment();      // 2
counter.increment();      // 3
counter.decrement();      // 2
counter.getCount();       // 2
counter.reset();          // 0
counter.increment();      // 1

// Create another independent counter
console.log("\n=== Independent Counter ===");
const counter2 = createCounter();
counter2.increment();     // 1
counter2.increment();     // 2

console.log("\n--- Original counter is unchanged ---");
counter.getCount();       // 1

// Explanation
console.log("\n=== Why Closure? ===");
console.log("The 'count' variable is private and can only be accessed");
console.log("through the returned methods (increment, decrement, getCount, reset).");
console.log("Each counter instance has its own independent 'count' variable.");
