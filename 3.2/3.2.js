const stop1 = [
  [1, 0],
  [3, 1],
];
//people left 3
const stop2 = [
  [5, 0],
  [0, 1],
  [3, 2],
];
//people left 5
const stop3 = [
  [5, 0],
  [0, 1],
  [0, 4],
];
//people left 0

const bus = (arr) => {
  let enter = 0;
  let leave = 0;

  for (let i = 0; i < arr.length; i++) {
    enter += arr[i][0];
    leave += arr[i][1];
  }
  return enter - leave;
};
console.log(bus(stop1));
console.log(bus(stop2));
console.log(bus(stop3));
