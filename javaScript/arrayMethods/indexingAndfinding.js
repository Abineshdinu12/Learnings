// copy of an array
const numbers = [100, -20, 30, -40, 50];
const copyOfNumbers = [...numbers]; /// [ 100, 20, 30, 40, 50 ]
numbers[0] = 10;
console.log(numbers); /// [ 10, 20, 30, 40, 50 ]
console.log(numbers.includes(10)); // includes method
console.log(numbers.some((num) => num > 10)); // using some it checks only if there is some numbers greater than 10
console.log(numbers.every((num) => num > 10));

// const people = [{ name: "jack" }, { name: "jane" }];
// console.log(people) //
// people[0] =[{ name: "john" }];
// const copyOfPeople = [...people]
// console.log(copyOfPeople);

//find index of Array

// const index = ["A","b" ,"c","d","e"]
// console.log(index.indexOf("A"))

// const names = ["Abinesh","Dinesh","Suresh","Ramesh"]
// console.log(names.indexOf("Dinesh"))
// console.log(names.findIndex((name) => name === "Suresh"))

// includes
