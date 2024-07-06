const user = new Promise((resolve, reject) => {
  setTimeout(() => {
    const name = "abinesh";
    if (name) {
      resolve(name);
    } else {
      reject(err);
    }
  }, 1000);
});


console.log(user);
user
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  });

  console.log("hi")




