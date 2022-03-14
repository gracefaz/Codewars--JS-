const findTotalAge = (people) => {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
  }
  return sum;
};
