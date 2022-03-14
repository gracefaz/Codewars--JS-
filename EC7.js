function gatherPets(people) {
  let newArr = [];
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people[i].pets.length; j++) {
      newArr.push(people[i].pets[j]);
    }
  }
  return newArr;
}
