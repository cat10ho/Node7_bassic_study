const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

function myFilter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const result1 = objArray.filter(function (item) {
  return item.price < 300;
});

const result2 = myFilter(objArray, function (item) {
  return item.price < 300;
});

console.log(result1);
console.log(result2);
console.log(result1 === result2); //다른 객체라 안됨.
