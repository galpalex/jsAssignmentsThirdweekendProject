const toWeirdCase = (str) => {
  let mystr = str.toLowerCase();
  let newstr = "";
  for (let i = 0; i < mystr.length; i++) {
    if (mystr[i] !== " " && i % 2 === 0) newstr += mystr[i].toUpperCase();
    else newstr += mystr[i];
  }
  return newstr;
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
