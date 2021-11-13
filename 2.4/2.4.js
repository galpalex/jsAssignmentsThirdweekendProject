arr1 = [1, 1, 1, 2, 1, 1];
arr2 = [0, 0, 0.55, 0, 0];

const findUniq = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  if (
    (arr[0] === min && arr[1] === min) ||
    (arr[0] === min && arr[2] === min) ||
    (arr[1] === min && arr[2] === min)
  )
    return max;
  else return min;
};
console.log(findUniq(arr2));
