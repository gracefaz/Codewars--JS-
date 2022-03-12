// Task: Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

const replace = (str) => str.replace(/[aeiou]/gi, "!");

console.log(replace("I cannot wait to code today!"));
