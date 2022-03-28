//function getLastItems(array, n) {
// return an array with the 'n' last items of 'array'
//let newArr = [];
//newArr.push(array[array.length - 3]);
//newArr.push(array[array.length - 2]);
//newArr.push(array[array.length - 1]);
//return newArr;
//}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  let newArr = [];
  for (let i = n; i > 0; i--) {
    newArr.push(array[array.length - i]);
  }
  return newArr;
}

console.log(getLastItems([5, 7, 2, 9, 0, 10, 13, 6], 4));
