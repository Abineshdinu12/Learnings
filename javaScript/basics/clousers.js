function outer() {
  let outerVariable = "Abinesh";
  function inner(name) {
    let innerVariable = "Dinesh";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log("hello", name);
    function secondIinner() {
      let secondIinnerVariable = "Abinesh";
      console.log(secondIinnerVariable);
    }
    return secondIinner;
  }
  let call = inner("Xentrix");
}

export default outer;

function one(x) {
  return function (y) {
    return x + y;
  };
}

let two = one(10);
console.log(two(10));
