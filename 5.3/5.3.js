const toCamelCase = (str) => {
  let mystr = str;
  let positionDash = str.indexOf("-");
  let positionUndscr = str.indexOf("_");
  let position = 0;
  let srchchar = "";
  if (positionDash !== -1) {
    position = positionDash;
    srchchar = "-";
  } else {
    position = positionUndscr;
    srchchar = "_";
  }

  while (position !== -1) {
    mystr = mystr.replace(srchchar, "");
    mystr = mystr.replace(mystr[position], mystr[position].toUpperCase());
    position = mystr.indexOf(srchchar, position + 1);
  }
  return mystr;
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-stealth-warrior"));
console.log(toCamelCase("The_stealth_warrior"));
