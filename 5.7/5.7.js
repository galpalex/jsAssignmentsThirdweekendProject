const shortestWords = (str) => {
  let myArray = str.split(" ");
  let shortestW = myArray[0];
  let arrOfLen = [];
  for (const word of myArray) {
    if (word.length < shortestW.length) shortestW = word;
  }
  for (const word of myArray) {
    if (word.length === shortestW.length) arrOfLen.push(shortestW.length);
  }
  return arrOfLen;
};

console.log(shortestWords("Your task is to write a function maskify."));
console.log(shortestWords("method of changes the content of"));
console.log(shortestWords("understand whether the required the"));
