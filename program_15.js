function countWord(str) {
  const trimStr = str.trim();
  let strCount = 1;
  for (let i = 0; i < trimStr.length - 1; i++) {
    if (trimStr[i] === " " && trimStr[i + 1] != " ") {
      strCount = strCount + 1;
    }
  }
  return strCount;
}
const str = " this  is a sentance for test program more sentances add extra";
const output = countWord(str);
console.log(output);
