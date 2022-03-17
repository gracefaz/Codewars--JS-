// Task: Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

const removeEveryOther = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr = [4, 5, 7, 8, 14, 45, 76, 4];

console.log(removeEveryOther(arr));
// Should print [4, 7, 14, 76]
