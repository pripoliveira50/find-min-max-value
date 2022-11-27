// Find max value of array
function findMax(array) {
  let num = -Infinity;
  for (let item of array) {
    num = Math.max(num, item);
  }
  return num;
}
let res = findMax([6, 2, 0, 4]);

console.log("Max 1", res);

// Find max value of array
function findMax2(array) {
  let num = -Infinity;
  for (let item of array) {
    if (item > num) {
      num = item;
    }
  }
  return num;
}
let res2 = findMax2([8, 2, 0, 4]);

console.log("Max 2", res2);

// Find min value of array
function findMin(array) {
  let num = Infinity;
  for (let item of array) {
    num = Math.min(num, item);
  }
  return num;
}
let res3 = findMin([5, 2, 1, 4]);

console.log("Max 3", res3);

function findMin2(array) {
  let num = Infinity;

  for (let item of array) {
    if (item < num) {
      num = item;
    }
  }
  return num;
}
let res4 = findMin2([5, 2, -1, 4]);

console.log("Max 4", res4);
