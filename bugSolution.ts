function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing array element
console.log(greeter(user[0])); // Accesses the first element of the array

// Solution 2: Modifying the function signature to handle arrays
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

console.log(greeterArray(user)); // Joins array elements into a string