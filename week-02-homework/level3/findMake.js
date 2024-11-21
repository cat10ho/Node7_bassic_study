const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

function myFind(arr, callback) {
  for (index of arr) {
    if (callback(index)) {
      return index;
    }
  }
  return "없습니다.";
}

const result1 = objArray.find(function (obj) {
  return obj.name === "banana";
});

const result2 = myFind(objArray, function (obj) {
  return obj.name === "banana";
});

console.log(result1 === result2); // true
