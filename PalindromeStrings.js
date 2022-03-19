// Task: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
//       Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
  if (typeof line == "number") {
    line = line.toString();
  }
  let splitStr = line.split("");
  let reverse = splitStr.reverse();
  let joinArr = reverse.join("");
  if (joinArr == line) {
    return true;
  }
  return false;
}

console.log(isPalindrome("hannah"));
// Should print true

console.log(isPalindrome("Grace"));
// Should print false

console.log(isPalindrome(123321));
// Should print true
