function sumArray(array) {
  if (array === null) {
    return 0;
  } else {
    let newArr = array.sort(function (a, b) {
      return a - b;
    });
    let sum = 0;
    for (let i = 1; i < newArr.length - 1; i++) {
      sum += newArr[i];
    }
    return sum;
  }
}

let arr = [6, 2, 1, 8, 10];
console.log(sumArray(arr));
