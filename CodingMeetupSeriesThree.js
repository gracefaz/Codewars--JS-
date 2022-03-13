// Task: You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//       Your task is to return:
//       true if at least one Ruby developer has signed up; or
//       false if there will be no Ruby developers.

function isRubyComing(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].language == "Ruby") {
      sum += 1;
    }
  }
  if (sum >= 1) {
    return true;
  } else {
    return false;
  }
}

let list1 = [
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
];

console.log(isRubyComing(list1));
