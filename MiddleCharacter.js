// Task:

function getMiddle(str) {
  if (str.length % 2 !== 0) {
    return str[Math.floor(str.length / 2)];
  } else {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
}

console.log(getMiddle("idontknowthemiddlechar"));
// Should print "he"
