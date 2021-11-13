const fibonacci = (n) => {
  let x = 0;
  let y = 1;
  let z = 0;
  if (n === 0) return x;
  else {
    for (let i = 2; i <= n; i++) {
      z = x + y;
      x = y;
      y = z;
    }
  }
  return y;
};
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
