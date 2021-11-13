const centuryFromYear = (year) => {
  if (year % 100 === 0) return year / 100;
  else return (year - (year % 100)) / 100 + 1;
};

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(55));
console.log(centuryFromYear(100));
console.log(centuryFromYear(101));
