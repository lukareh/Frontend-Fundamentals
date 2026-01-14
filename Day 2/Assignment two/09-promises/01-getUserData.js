// Create a function called getUserData that returns a Promise

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate async operation with setTimeout
    setTimeout(() => {
      if (userId === 1) {
        // Resolve with user details if userId is 1
        const userDetails = {
          name: "Akshay Kumar",
          age: 28,
          city: "Mumbai"
        };
        resolve(userDetails);
      } else if (userId === 0) {
        // Reject with error message if userId is 0
        reject("Error: Invalid user ID. User ID cannot be 0.");
      } else {
        // Handle other cases
        reject(`Error: User with ID ${userId} not found.`);
      }
    }, 1000); // 1 second delay to simulate API call
  });
}

// Test Case 1: userId = 1 (Success)
console.log("=== Test Case 1: userId = 1 ===");
getUserData(1)
  .then(user => {
    console.log("Success! User data received:");
    console.log(user);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Test Case 2: userId = 0 (Failure)
console.log("\n=== Test Case 2: userId = 0 ===");
getUserData(0)
  .then(user => {
    console.log("Success! User data received:");
    console.log(user);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Test Case 3: userId = 5 (Not Found)
console.log("\n=== Test Case 3: userId = 5 ===");
getUserData(5)
  .then(user => {
    console.log("Success! User data received:");
    console.log(user);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Using finally (executes regardless of success or failure)
console.log("\n=== Test Case 4: Using finally ===");
getUserData(1)
  .then(user => {
    console.log("User:", user.name);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request completed (finally block always executes)");
  });
