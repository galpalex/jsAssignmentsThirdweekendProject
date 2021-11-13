const repeat_str = (count, str) => {
  let repeat = "";
  for (let i = 0; i < count; i++) {
    repeat += str;
  }
  return repeat;
};

console.log(repeat_str(1, "hello"));
console.log(repeat_str(2, "hello"));
