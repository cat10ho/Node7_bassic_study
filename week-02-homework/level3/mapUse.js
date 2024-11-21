const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];
const objMaped = objArray.map(function (value) {
  return value.price;
});

console.log(objMaped);
