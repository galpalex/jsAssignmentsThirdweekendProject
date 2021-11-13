const nb_year = (p0, percent, aug, p) => {
  let year = 0;
  let start = p0;
  let myPercent = 0;
  if (percent) myPercent = percent / 100;
  else myPercent = 0;
  for (let i = start; i < p; year++, start = i) {
    i = start + start * myPercent + aug;
  }

  return year;
};
console.log(nb_year(1000, 0, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
