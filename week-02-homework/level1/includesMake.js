const arr = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

const includes1 = arr.includes(3);
const includes2 = myIncludes(arr, 3);
console.log(includes1 === includes2);
