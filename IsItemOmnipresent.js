// Task: Return true if the passed item is present in all the arrays inside arrayOfArrays.

function isItemOmnipresent(arrayOfArrays, item) {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (!arrayOfArrays[i].includes(item)) {
      return false;
    }
  }
  return true;
}

console.log(
  isItemOmnipresent(
    [
      [2, 2, 3],
      [2, 4, 5],
      [2, 6, 7],
    ],
    2
  )
);
// Should return false, but returns true. Think this is because the function is returning true too early, after only looping through the first array in the array of arrays.
