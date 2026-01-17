Promises

Concepts
- Promise
- then, catch, finally
- Event Loop
- Micro Tasks vs Macro Tasks

Assignments

1. getUserData Function
Create a function called getUserData that:
- Returns a Promise
- Resolves with user details object containing name, age, city if userId is 1
- Rejects with an error message if userId is 0
- Handles the response using .then() and .catch()

Run: node 01-getUserData.js

2. Execution Sequence
Guess the execution sequence of code involving console.log, setTimeout, and Promise.

Run: node 02-execution-sequence.js

What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable way.

Promise States:
1. Pending - Initial state, neither fulfilled nor rejected
2. Fulfilled - Operation completed successfully
3. Rejected - Operation failed

Promise Methods:
- .then() - Handles successful completion
- .catch() - Handles errors
- .finally() - Executes regardless of success or failure
