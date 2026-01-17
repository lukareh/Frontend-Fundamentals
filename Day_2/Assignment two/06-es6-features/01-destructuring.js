// Destructure an object and console name and age from it

const user = {
  name: "Akshay",
  age: 25,
  city: "Pune"
};

// Object destructuring
const { name, age } = user;

console.log(name); // Akshay
console.log(age);  // 25

// Additional examples
console.log("\n--- More Destructuring Examples ---");

// Destructuring with different variable names
const { name: userName, age: userAge } = user;
console.log("userName:", userName);
console.log("userAge:", userAge);

// Destructuring with default values
const { name: n, age: a, country = "India" } = user;
console.log("country (default):", country);

// Nested destructuring
const userWithAddress = {
  name: "Rahul",
  age: 30,
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};

const { name: n2, address: { city, pincode } } = userWithAddress;
console.log("city:", city);
console.log("pincode:", pincode);
