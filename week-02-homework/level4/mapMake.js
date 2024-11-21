const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

function myMap(arr, callback) {
  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const result1 = objArray.map(function (item) {
  return item.name;
});

const result2 = myMap(objArray, function (item) {
  return item.name;
});

console.log(result1);
console.log(result2);
console.log(result1 === result2);
