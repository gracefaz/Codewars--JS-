// Task: You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//       Your task is to return either:

//       true if all developers in the list code in the same language; or
//       false otherwise.

function isSameLanguage(list) {
  newArr = [];
  for (let i = 0; i < list.length; i++) {
    newArr.push(list[i].language);
  }
  if (newArr.every((val) => val === newArr[0])) {
    return true;
  }
  return false;
}

let list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Python",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

console.log(isSameLanguage(list1));
