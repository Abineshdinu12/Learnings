// const family = ["Dad", "mom", "brothers", "Sister"];

// const modifiedfamily = family.map((fam) => fam.toUpperCase())
// console.log(modifiedfamily)
// const number = [1, 2, 4, 5];

//  const multiplication = number.map((num) => {
//   return num * 2;
// });

// console.log(multiplication)

const myMap = new Map([
  [1, "chicken Briyani"],
  [2, "mutton Briyani"],
  [3, "fish Briyani"],
]);
console.log(myMap.delete(1)); //true
console.log(myMap.has(1)); //false
console.log(myMap.get(1)); //undefined
console.log(myMap.size); // 3
console.log(myMap.has(2)); // true
const entries = myMap.entries();
console.log(entries.next().value);
const keys = myMap.keys();
console.log(keys.next().value);
console.log(keys.next().value);

// const numbers = [1, 2, 4, 5, 2, 4, 5, 6, 7, 3, 1];

// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // Output: [1, 2, 4, 5, 6, 7, 3]

// const array = [1, 2, 1, 2, 3, 3];
// const set = new Set(array);45 47 43 47 23
// console.log(set.has(5))

const array = ["array", "object", "hi"];

console.log(array[array.length - 1]);

const a1 = ["array", "object", "hi"];
const a2 = ["arra", "objec", "h"];
const a3 = ["arr", "obje", "hi--"];

console.log(...a1, ...a2, ...a3);



