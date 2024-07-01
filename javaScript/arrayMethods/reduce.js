const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumalator, currentValue) => accumalator + currentValue
);
console.log(sum);

const value = [
  [1, 2],
  [3, 4],
  [4, 5],
];

const array = value.reduce((accumalator, currentValue) =>
  accumalator.concat(currentValue)
);
console.log(array);
