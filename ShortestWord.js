// Task: Simple, given a string of words, return the length of the shortest word(s).
//       String will never be empty and you do not need to account for different data types.

function findShort(str) {
  let newArr = str.split(" ");
  let newnewArr = [];
  for (let i = 0; i < newArr.length; i++) {
    newnewArr.push(newArr[i].length);
  }
  return Math.min.apply(null, newnewArr);
}

console.log(findShort("I want to be a software engineer"));
// Should print 1
