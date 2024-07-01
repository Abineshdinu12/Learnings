// ArrayBuffer.prototype.Filter();

// const names = ["abi", "Abinesh", "Din", "dinesh"];

// names.filter((name) => name.length > 3);

// console.log(names);

const users = [
  {
    id: 1,
    name: "Abinesh",
    age: 19,
    active: true,
  },
  {
    id: 2,
    name: "Dinesh",
    age: 17,
    active: false,
  },
  {
    id: 1,
    name: "ramesh",
    age: 20,
    active: true,
  },
];

const activeusers = users.filter((user) => user.active);
const activeusers1 = activeusers.find((user) => user.age > 15);
const activ2 = activeusers1.map((a) => {
  return a.age;
});

console.log(activ2);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const flatten = matrix.flat();
// console.log(matrix);
// console.log(flatten);
let v = {
  id: 1,
  name: "dinesh",
  age: 20,
  active: true,
};
let k = {
  id: 1,
  name: "dinesh",
  age: 21,
  active: false,
};

// const numbers = [16, 26,3 6, 46, 56, 66];
const numbers = [v, k];
let age = numbers.find((num) => num.name === "dinesh");
console.log(age.active);
// const array = ["Array", "boolean", "parameter", "argument"];
// array.sort().reverse();

// console.log(array);

function timSort(array) {
  // Using JavaScript's built-in sort method
  return array.sort((a, b) => a - b);
}

// Example usage:
const number = [25, 100];
const sortedNumber = timSort(number);
console.log(sortedNumber); // Output: [25, 100]
