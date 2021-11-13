const basicOp = (operation, value1, value2) => {
  if (operation === "+") return value1 + value2;
  else if (operation === "-") return value1 - value2;
  else if (operation === "*") return value1 * value2;
  else if (operation === "/") return value1 / value2;
  else return "invalid input";
};
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
console.log(basicOp("t", 49, 7));
