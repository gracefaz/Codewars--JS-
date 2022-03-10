// Task: Sum all the numbers of a given array, except the highest and the lowest element (by value, not by index!).
//       The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//function sumArray(array) {
//if (array === null) {
//return 0;
//} else {
//let newArr = array.sort(function (a, b) {
//return a - b;
//});
//let sum = 0;
//for (let i = 1; i < newArr.length - 1; i++) {
//sum += newArr[i];
//}
//return sum;
//}
//}

function sumArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let sum = 0;
  let newArr = array.sort(function (a, b) {
    return a - b;
  });
  for (i = 1; i < newArr.length - 1; i++) {
    sum += newArr[i];
  }
  return sum;
}

let arr = [6, 2, 1, 8, 10];
console.log(sumArray(arr));
