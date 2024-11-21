const arr = [1, 2, 3, 4, 5];
const reduced = arr.reduce(function (prev, current) {
  return prev + 2 * current;
}, 0);
console.log(reduced);
