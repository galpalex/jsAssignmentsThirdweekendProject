const nameToInitials = (str) => {
  let position = str.indexOf(" ");
  let mystr = str[0] + "." + str[position + 1];
  return mystr;
};
console.log(nameToInitials("Sam Harris"));
console.log(nameToInitials("Patrick Feeney"));
