function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > len) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(getItemsLongerThan(["232", "0", "888", "22"], 2));
