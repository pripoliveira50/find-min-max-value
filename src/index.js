// Find max value of array
function findMax(array) {
  let num = -Infinity;
  for (let item of array) {
    num = Math.max(num, item);
  }
  return num;
}
let res1 = findMax([5, 2, 0, 4]);

console.log(res1);

// Find min value of array
function findMin(array) {
  let num = Infinity;
  for (let item of array) {
    num = Math.min(num, item);
  }
  return num;
}
let res = findMin([5, 2, 1, 4]);

console.log(res);
