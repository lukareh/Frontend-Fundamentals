// Explain how inner functions access outer variables

function outerFunction() {
  const outerVariable = "I am from outer function";
  let outerCounter = 0;
  
  function innerFunction() {
    // Inner function can access outer function's variables
    const innerVariable = "I am from inner function";
    outerCounter++;
    
    console.log(innerVariable);           // Accesses own variable
    console.log(outerVariable);           // Accesses outer variable
    console.log("Counter:", outerCounter); // Accesses and modifies outer variable
  }
  
  return innerFunction;
}

console.log("=== Lexical Scope Example ===\n");

const myFunction = outerFunction();
myFunction();
myFunction();
myFunction();

// More detailed example
console.log("\n=== Nested Functions Example ===\n");

function level1() {
  const var1 = "Level 1";
  
  function level2() {
    const var2 = "Level 2";
    
    function level3() {
      const var3 = "Level 3";
      
      // Level 3 can access all outer variables
      console.log("From Level 3:");
      console.log("  ", var3);  // Own variable
      console.log("  ", var2);  // Parent's variable
      console.log("  ", var1);  // Grandparent's variable
    }
    
    level3();
  }
  
  level2();
}

level1();

// Explanation
console.log("\n=== Key Points ===");
console.log("1. Inner functions can access variables from outer functions");
console.log("2. This is called 'lexical scope' or 'static scope'");
console.log("3. The scope is determined by where functions are defined, not where they're called");
console.log("4. Inner functions form a 'closure' over outer function's variables");
console.log("5. This allows inner functions to 'remember' outer variables even after outer function has returned");
