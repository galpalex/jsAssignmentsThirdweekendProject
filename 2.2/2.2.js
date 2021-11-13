const arr1 = [0, 0, 0, 1];
const arr2 = [0, 0, 1, 0];
const arr3 = [0, 1, 0, 1];
const arr4 = [1, 0, 0, 1];
const arr5 = [0, 0, 1, 0];
const arr6 = [0, 1, 1, 0];
const arr7 = [1, 1, 1, 1];
const arr8 = [1, 0, 1, 1];

const binToInt = (arr) => {
  return parseInt(arr.join(""), 2);
};
console.log(binToInt(arr2));
