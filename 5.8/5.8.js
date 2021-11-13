const longestWord = (str) => {
  let myArray = str.split(" ");
  let longestW = myArray[0];
  let arrOfLonWords = [];
  for (const word of myArray) {
    if (word.length > longestW.length) longestW = word;
  }
  for (const word of myArray) {
    if (word.length === longestW.length) arrOfLonWords.push(word);
  }
  return arrOfLonWords;
};

console.log(longestWord("Your task is to write a function maskify."));
console.log(longestWord("method changes the content of"));
console.log(longestWord("understand whether the required"));
