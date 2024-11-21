const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

const found = objArray.find((value) => {
  return value.name === "grape";
});

console.log(found);
