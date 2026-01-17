// BUG 1: Type mismatch - string "18" compared with number 18
let age = "18";
if (Number(age) === 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// BUG 2: Array index out of bounds - should use < instead of <=
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// BUG 3: Async timing - console.log runs before setTimeout completes
let data;
setTimeout(() => {
  data = "Loaded";
  console.log(data);
}, 1000);

// BUG 4: Missing return statement
function add(a, b) {
  return a + b;
}
const result = add(2, 3);
console.log(result);

// BUG 5: Event listener - should pass function reference, not call it
// See bug-7-fixed.html

// BUG 6: Missing return in fetch promise chain
fetch("https://api.example.com/data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// BUG 7: Variable name mismatch - 'No' vs 'n'
const nums = [1, 2, 3, 4];
const result2 = nums.map(n => {
  if (n % 2 === 0) {
    return n * 2;
  }
});
console.log(result2);

// BUG 8: Arrow function doesn't bind 'this' - use regular function
const person = {
  name: "Amar",
  greet: function() {
    console.log("Hello " + this.name);
  },
};
person.greet();
