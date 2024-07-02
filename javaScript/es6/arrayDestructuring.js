
const Rice1 = {
    price: 100,
    discount: 20
};

const Rice2 = {
    price: 200,
    discount: 20
};

const Rice3 = {
    price: 250,
    discount: 20
};

const products = [Rice1, Rice2, Rice3];

const highProducts = products.filter((prod) => prod.price > 150);


console.log(highProducts);
