
const people = [
  { name: "Abinesh", age: 20 },
  { name: "Dinesh", age: 20 },
  { name: "Ramesh", age: 20 }
];

const converted = JSON.stringify(people); // Convert array to JSON string
const parsedArray = JSON.parse(converted); // Convert JSON string back to JavaScript array
console.log(converted)
console.log(parsedArray[0]); // Accessing the first element of the parsed array


// const converted = JSON.stringify(people)

// console.log(converted)