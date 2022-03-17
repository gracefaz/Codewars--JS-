// Task: Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//       You task is to initialize the middle names (if there is any).

//function initializeNames(name) {
//let arr = name.split(" ");
//if (arr.length >= 3) {
//arr[1] = arr[1][0] + ".";
//return arr.join(" ");
//} else {
//return name;
//}
//}

const initializeNames = (name) => {
  let arr = name.split(" ");
  if (arr.length >= 3) {
    for (let i = 1; i < arr.length - 1; i++) {
      arr[i] = arr[i][0] + ".";
    }
    return arr.join(" ");
  } else {
    return name;
  }
};

console.log(initializeNames("Grace Ellen Fazakerley"));
// Should print "Grace E. Fazakerley"
