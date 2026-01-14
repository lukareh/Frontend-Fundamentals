// Convert getUserData Promise to async/await with try-catch block

// Original getUserData function (returns Promise)
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        const userDetails = {
          name: "Akshay Kumar",
          age: 28,
          city: "Mumbai"
        };
        resolve(userDetails);
      } else if (userId === 0) {
        reject("Error: Invalid user ID. User ID cannot be 0.");
      } else {
        reject(`Error: User with ID ${userId} not found.`);
      }
    }, 1000);
  });
}

// Converted to async/await with try-catch
async function fetchUserData(userId) {
  try {
    console.log(`Fetching user data for userId: ${userId}...`);
    const user = await getUserData(userId);
    console.log("Success! User data received:");
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error:", error);
    throw error; // Re-throw if you want to handle it further up
  }
}

// Test the async function
async function runTests() {
  console.log("=== Test Case 1: userId = 1 (Success) ===");
  await fetchUserData(1);
  
  console.log("\n=== Test Case 2: userId = 0 (Error) ===");
  try {
    await fetchUserData(0);
  } catch (error) {
    console.log("Caught error in runTests:", error);
  }
  
  console.log("\n=== Test Case 3: userId = 5 (Not Found) ===");
  try {
    await fetchUserData(5);
  } catch (error) {
    console.log("Caught error in runTests:", error);
  }
  
  console.log("\n=== All tests completed ===");
}

// Execute tests
runTests();

// Additional example: Multiple async operations in sequence
console.log("\n=== Example: Multiple Operations ===");

async function multipleOperations() {
  try {
    console.log("Starting multiple operations...");
    
    const user1 = await getUserData(1);
    console.log("First user:", user1.name);
    
    // Simulate another async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Half second delay completed");
    
    console.log("All operations completed successfully!");
  } catch (error) {
    console.log("Error in multiple operations:", error);
  }
}

setTimeout(() => {
  multipleOperations();
}, 5000);
