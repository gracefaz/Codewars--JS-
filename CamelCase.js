// Task: Convert the passed string of space-separated words to camel case. Camel case looks like this --> camelCaseLooksLikeThis

function convertToCamelCase(words) {
  let arr = words.split(" ");
  let newArr = [];
  newArr.push(arr[0].toLowerCase());
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return newArr.join("");
}

console.log(convertToCamelCase("Hi my name is Grace Faz"));
