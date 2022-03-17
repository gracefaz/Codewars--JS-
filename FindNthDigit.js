// Task: Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1;
  } else if (num < 0) {
    num = -num;
  }

  let str = num.toString();
  let find = str.charAt(str.length - nth) * 1;
  return find;
};

console.log(findDigit(762, 2));
// Should print 6.
