Questions


1. Variables & Data Types
Concepts: var, let, const, primitive types

Assignments
Write a function that accepts different data types and prints their type using typeof.

Explain the difference between null and undefined with code.

2. Functions
Concepts: normal functions, arrow functions

Assignments
Write a normal function to add two numbers.

Convert a above function into an arrow function.

3. Strings
Concepts: string methods

Write difference between == and === in java script with examples.

"hello world" convert to title case.

4. Objects
Concepts: object creation, access, iteration

Assignments
Create a user object with properties name, age, and city.

Print all keys and values using methods Object.keys, Object.values and forEach loop

Add new property mobileNumber and delete city properties dynamically.

Convert below array of object group by role

const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" },
];

Output:
{
  admin: [
    { name: "Pratik", role: "admin" },
    { name: "Neha", role: "admin" }
  ],
  user: [
    { name: "Amit", role: "user" },
    { name: "Ravi", role: "user" }
  ]
}

5. Array Methods (Important)
Concepts: map, filter, reduce

[20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50]

Assignments
Use map to multiply each array element by 2.

Use filter to find numbers greater than 10.

Use reduce to find the sum of array elements.

Reverse an array.

6. ES6+ Features
Concepts: destructuring, spread, rest

Assignments
Destructure an object and console name and age from it.
const user = {
  name: "Akshay",
  age: 25,
  city: "Pune"
};

output:
console.log(name); // Akshay
console.log(age); // 25

Merge two arrays using spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

Output:
console.log(mergedArray);
// [1, 2, 3, 4, 5, 6]

Create a function accepting 5 numbers using rest parameters and display sum of all numbers from function.

7. Closures
Concepts: closures, lexical scope

Assignments
Create a counter function using closure.

Explain how inner functions access outer variables.

8. Callbacks
Concepts: callback functions

Assignments
Create a function that accepts a callback and executes it after 10 seconds.

9. Promises
Concepts: Promise, then, catch

Assignments
Create a function called getUserData that:

Returns a Promise

Resolves with user details object contains name, age, city if userId is 1

Rejects with an error message if userId is 0

Handles the response using .then() and .catch()

Guess the execution sequence of below code

console.log("1: Start");

setTimeout(() => {
  console.log("2: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

console.log("4: End");

10. Async / Await
Concepts: async functions, error handling

Assignments
Convert the question 1 from assignment 9, to async/await with try, catch block.

11. DOM Manipulation
Concepts: DOM selection, events

Assignments
Take one div with some text and change text of an element on button click.
<div id="message">Hello World</div>
<button id="changeBtn">Change Text</button>

Add a new list item dynamically.
<ul id="list"><li>Item 1</li></ul>
<button id="addItem">Add Item</button>

Remove an element from the DOM.
<p id="removeMe">Remove this text</p>
<button id="removeBtn">Remove</button>

Display input value on screen while typing.
<input type="text" id="inputBox" />
<p id="output"></p>

12. Timers
Concepts: setInterval

Assignments
Create a countdown timer using setInterval.
