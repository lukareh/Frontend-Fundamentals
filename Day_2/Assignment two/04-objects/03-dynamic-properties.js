// Add new property mobileNumber and delete city properties dynamically

const user = {
  name: "Akshay",
  age: 25,
  city: "Pune"
};

console.log("Original User Object:");
console.log(user);

// Add mobileNumber property dynamically
user.mobileNumber = "9876543210";
console.log("\nAfter adding mobileNumber:");
console.log(user);

// Delete city property dynamically
delete user.city;
console.log("\nAfter deleting city:");
console.log(user);
