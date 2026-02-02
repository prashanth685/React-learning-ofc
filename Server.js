// const orders = [
//   { product: "Laptop", price: 5000 },
//   { product: "tv", price: 3000 },
//   { product: "fridge", price: 20000 },
// ];
// const totalAmount = orders.reduce((acc, order) => {
//   return acc + order.price;
// }, 0);
// console.log(totalAmount);

const arr1 = [2, 3, 4, 5];
arr1.forEach((value, index) => {
  console.log(value * index);
});

const arr2 = [1, 2, 3];
arr2.map((i, index) => {
  console.log(i * index);
});
