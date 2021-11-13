const findNextSquare = (num) => {
  if (Number.isInteger(Math.sqrt(num))) return Math.pow(Math.sqrt(num) + 1, 2);
  else return -1;
};
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(25));
