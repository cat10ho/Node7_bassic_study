const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  return;
}
objArray.forEach(function (obj) {
  console.log(obj);
});

myForEach(objArray, function (obj) {
  console.log(obj);
});
