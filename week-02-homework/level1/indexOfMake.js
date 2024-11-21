const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
  let arrIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arrIndex;
    }
    arrIndex++;
  }
  return "없습니다.";
}

const index1 = arr.indexOf(3);
const index2 = myIndexOf(arr, 3);
console.log(index1 === index2);
