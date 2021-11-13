const maskify = (str) => {
  let mystr = str;
  if (mystr.length > 4) {
    for (let i = 0; i < mystr.length - 4; i++) {
      mystr = mystr.replace(mystr[i], "#");
    }
  }
  return mystr;
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
