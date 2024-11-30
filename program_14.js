// function upperCaseLetter(str){
//     let upperLetter=String.fromCharCode(str.charCodeAt(0)-32);
//     let newLetter=upperLetter+str.slice(1);
//     return newLetter;
// }
// const output=upperCaseLetter('hello');
// console.log(output);

function upperCaseLetter(str) {
  let firstLetter = str[0].toUpperCase();
  let newLetter = firstLetter + str.slice(1);
  return newLetter;
}
const output = upperCaseLetter("hello");
console.log(output);
