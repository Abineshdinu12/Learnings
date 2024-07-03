function products() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let products = "apple";
      if (products) {
        resolve(products);
      } else {
        reject(Error);
      }
    }, 1000);
  });
}

//   .then((products) => {
//     console.log(products);
//   })
//   .catch((err) => {});

console.log("hi");
console.log(products());
console.log("hi");

 function newProduct() {
    try {
      const newProd =  products(); 
      console.log(newProd)
    } catch (err) {
      console.error("Error fetching product:", err.message); 
    }
  }

  newProduct() 

