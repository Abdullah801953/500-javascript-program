// // check a string is plandrom or not
function checkPlandrom(str) {
    let revArr = [];
    for (let i = str.length-1; i >= 0; i--) {
        revArr.push(str[i]);
    }
    const newStr=revArr.join("");
    if (str.length===newStr.length && str===newStr) {
        console.log("yes its a plandrom\n");
    }
    else {
        console.log('no its not plandrom\n');
    }
    return newStr;
}
const output = checkPlandrom("madam");
console.log(output);