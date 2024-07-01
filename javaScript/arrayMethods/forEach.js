// // Array.prototype.forEach

// const person = ["a", "b", "c", "d", "e"];
// person.forEach((people) => {
//   console.log(people);
// });

// flatten an Array using foreach

// const flatten = (arr) => {
//     const result = [];
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         result.push(...flatten(item));
//       } else {
//         result.push(item);
//       }
//     });
//     return result;
//   };
  
//   // Usage
//   const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
//   console.log(flatten(nested));
  