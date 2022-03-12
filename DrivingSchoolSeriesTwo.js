// Task: *SEE CODEWARS FOR CHARGES*
//       Subsequent charges are calculated by rounding up to nearest half hour.
//       For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

//       Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

//       For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.

// const cost = (mins) => {
// return 30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10;
// };

function cost(mins) {
  let cost = 30;
  let acc = 10;
  for (let i = 65; i < mins; i += 30) {
    if (mins >= 65) {
      cost += acc;
    }
  }
  return cost;
}

console.log(cost(195));

// Note: Both of the above functions work, but I think the second is more understandable.
