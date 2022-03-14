function getFirstAndLast(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += 1;
  }
  if (sum < 2) {
    return array;
  } else {
    let newArr = [];
    newArr.push(array[0]);
    newArr.push(array[array.length - 1]);
    return newArr;
  }
}

console.log(getFirstAndLast([]));
