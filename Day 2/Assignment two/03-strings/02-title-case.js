// "hello world" convert to title case

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Test the function
const input = "hello world";
const output = toTitleCase(input);

console.log("Original:", input);
console.log("Title Case:", output);

// More test cases
console.log("\n--- More Examples ---");
console.log(toTitleCase("javascript is awesome"));
console.log(toTitleCase("HELLO WORLD"));
console.log(toTitleCase("tHe QuIcK bRoWn FoX"));
console.log(toTitleCase("openverse assignment submission"));
