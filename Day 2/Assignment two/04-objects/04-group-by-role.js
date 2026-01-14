// Convert array of objects, group by role

const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" },
];

// Method 1: Using reduce
function groupByRole(users) {
  return users.reduce((acc, user) => {
    // If role doesn't exist in accumulator, create empty array
    if (!acc[user.role]) {
      acc[user.role] = [];
    }
    // Push current user to appropriate role array
    acc[user.role].push(user);
    return acc;
  }, {});
}

const groupedUsers = groupByRole(users);

console.log("Grouped Users:");
console.log(JSON.stringify(groupedUsers, null, 2));

// Method 2: Using forEach (alternative approach)
function groupByRoleForEach(users) {
  const result = {};
  
  users.forEach(user => {
    if (!result[user.role]) {
      result[user.role] = [];
    }
    result[user.role].push(user);
  });
  
  return result;
}

console.log("\nAlternative Method:");
console.log(JSON.stringify(groupByRoleForEach(users), null, 2));
