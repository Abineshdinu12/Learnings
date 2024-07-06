// let pattern = /test/;
// const input = "test";
// const didMatch = pattern.test(input);
// const matches = input.match(pattern)
// console.log(didMatch)
// console.log(matches)

// const pattern = /[a-z]?[+]/;
// const input = "a+ b+ c+";
// const input1 = "a++ b+ c+++"
// const match = pattern.test(input1)
// console.log(match)

//  const a = 3

//  function sample (a){
//     return a ** 3

//  }
//  console.log (a)
//  console.log(sample(a))

// Matching a Date

const pattern = /\d{4}-\d{2}-\d{2}/;
const dateString = "2024-07-06";

console.log(pattern.test(dateString));

// Matching Email Addresses

const pattern1 = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const email = "example@email.com";

console.log(pattern1.test(email));

// Extracting Numbers from a String

function extractNumbers(input) {
  const pattern = /\d+/g;
  return input.match(pattern).map(Number);
}

const text = "Hello 123 world 456!";
console.log(extractNumbers(text));

// Validating a Password

function validatePassword(password) {
  const pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return pattern2.test(password);
}

console.log(validatePassword("Passw0rd"));
console.log(validatePassword("password123"));

// Replacing Words

const text1 = "I have an apple, she has an apple too.";
const replacedText = text1.replace(/apple/g, "orange");

console.log(replacedText);
