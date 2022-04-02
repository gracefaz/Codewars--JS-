// Task: Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// With input "The quick brown fox jumps over the lazy dog", 4
// Return ['quick', 'brown', 'jumps']

function filterLongWords(sentence, N) {
  let arr = sentence.split(" ");
  var longerThanN = arr.filter((word) => {
    return word.length > N;
  });
  return longerThanN;
}

console.log(filterLongWords("Hi my name is Grace", 2));
