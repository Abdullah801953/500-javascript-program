// check a string is plandrom or not
function checkPlandrom(str) {
  let revArr = [];
  for (let i = str.length; i >= 0; i--) {
    revArr.push(str[i]);
  }
  if (str.length && revArr.length) {
    console.log("yes its a plandrom\n");
  }
  else{
    console.log('no its not plandrom\n');
  }
  return revArr.join("");
}
const output = checkPlandrom("name");
console.log(output);
