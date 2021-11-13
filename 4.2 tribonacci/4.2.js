const tri = ([a1, a2, n]) => {
  let array = [];
  if (n === 0) return array;
  else if (n === 1) return (array = [a1]);
  else if (n === 2) return (array = [a1, a2]);
  else {
    array = [a1, a2, 1];
    for (let i = 3; i < n; i++)
      array.push(array[i - 1] + array[i - 2] + array[i - 3]);
  }
  return array;
};

console.log(tri([0, 0, 0]));
console.log(tri([0, 0, 1]));
console.log(tri([0, 0, 2]));
console.log(tri([0, 0, 3]));
console.log(tri([0, 0, 9]));
console.log(tri([1, 1, 0]));
console.log(tri([1, 1, 1]));
console.log(tri([1, 1, 2]));
console.log(tri([1, 1, 3]));
console.log(tri([1, 1, 8]));
