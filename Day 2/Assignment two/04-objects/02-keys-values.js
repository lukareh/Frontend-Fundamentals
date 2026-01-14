// Print all keys and values using Object.keys, Object.values and forEach loop

const user = {
  name: "Akshay",
  age: 25,
  city: "Pune"
};

console.log("=== Using Object.keys() ===");
const keys = Object.keys(user);
console.log("Keys:", keys);
keys.forEach(key => {
  console.log(`Key: ${key}`);
});

console.log("\n=== Using Object.values() ===");
const values = Object.values(user);
console.log("Values:", values);
values.forEach(value => {
  console.log(`Value: ${value}`);
});

console.log("\n=== Using forEach to print both keys and values ===");
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
