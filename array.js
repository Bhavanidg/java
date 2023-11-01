// Step 1: Ask the user for input and create an array
const input = prompt("Enter numbers separated by commas:");
const userArray = input.split(",").map(Number);

// Step 2: Define a custom sorting function to sort in descending order
function compareDescending(a, b) {
  return b - a;
}

// Step 3: Sort the array using the custom sorting function
userArray.sort(compareDescending);

// Step 4: Display the sorted array
console.log("Sorted array in descending order: " + userArray);
