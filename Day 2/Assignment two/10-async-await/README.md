Async / Await

Concepts
- async functions
- await keyword
- Error handling with try-catch
- Asynchronous programming

Assignments

Convert Promise to Async/Await
Convert the getUserData function from Assignment 9 to use async/await with try-catch block.

Run: node async-await-example.js

What is Async/Await?

Async/await is a modern syntax for handling asynchronous operations in JavaScript, built on top of Promises.

Key Points:

1. async keyword - Makes a function return a Promise
2. await keyword - Pauses execution until Promise resolves
3. try-catch - Handles errors cleanly
4. Cleaner syntax - More readable than .then().catch() chains

Rules:
- await can only be used inside async functions
- async functions always return a Promise
- Multiple await statements execute sequentially
- Use Promise.all() with await for parallel operations
