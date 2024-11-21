const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];
const objFiltered = objArray.filter(function (value) {
  return value.price >= 200;
});

//파인드는 처음거만. 필터는 여러개.

console.log(objFiltered);
