function allOscarWinners(films) {
  let newArr = [];
  for (let i = 0; i < films.length; i++) {
    newArr.push(films[i].wonOscar);
  }
  if (newArr.every((val) => val == true)) {
    return true;
  }
  return false;
}
