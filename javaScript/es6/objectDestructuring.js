// creating an object
const student1 = {
  student: "A",
  mark: 89,
};
const student2 = {
  student: "b",
  mark: 99,
};
const student3 = {
  student: "c",
  mark: 79,
};

const results = [student1, student2, student3];

results.forEach((result) => {
  if (result.mark > 80) {
    console.log(`${result.student}:pass`);
  } else {
    console.log(`${result.student}:fail`);
  }
});
