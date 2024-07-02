const product = [
    { ProductName: "shirt", Price: 100, quantity: 2 },
    { ProductName: "pant", Price: 200, quantity: 3 },
    { ProductName: "t-shirt", Price: 300, quantity: 4 },
  ];
  
  const material = product.reduce((total , pro ) => console.log(total) ,1);
   console.log(material)