function countChars(str, char) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      sum += 1;
    }
  }
  return sum;
}
