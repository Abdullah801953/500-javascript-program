// reverse a string
const reverseStr = (str) => {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {  
      arr.push(str[i]);
  }
  return arr.join('');
}
const output = reverseStr('abdullah');
console.log(output);