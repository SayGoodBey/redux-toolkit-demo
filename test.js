const testString = [
  "+++]",
  "[]",
  "[++++",
  "()（）123",
  ".",
  "超过100个字符的字符串".repeat(10),
  "[",
  "]",
  "(",
  "（",
  "_",
  ")",
  "）",
  "-",
  "^",
  "😊",
];
const regex = /^[0-9a-zA-Z\u4E00-\u9FA5.[\]@、"（）()-_:]{1,100}$/;
testString.forEach((str) => {
  console.log(`${str}: ${regex.test(str)}`);
});
