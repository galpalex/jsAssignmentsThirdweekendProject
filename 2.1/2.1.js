const array = [19, 5, 42, 2, 77];
const array2 = [10, 343445353, 3453445, 3453545353453];
const array3 = [19, 5, 42, 2, 77, 2];

const sumOf2LowestNum = (arr) => {
  let secondLowest = Math.max(...arr);
  const firstLowest = Math.min(...arr);
  let i = 0;
  for (const value of arr) {
    if (value === firstLowest) i++;
    if (value < secondLowest && value > firstLowest) secondLowest = value;
  }
  if (i > 1) return firstLowest * 2;
  else return firstLowest + secondLowest;
};
console.log(sumOf2LowestNum(array3));
