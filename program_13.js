// function concatinateString(str1, str2) {
//     return str1 + str2;
// }
// const str1 = 'abdullah';
// const str2 = 'khan';
// const output = concatinateString(str1, str2);
// console.log(output);

function concatinateString(str1, str2) {
    let result = '';
    for (let i = 0; i < str1.length; i++) {
        result = result + str1[i];
    }
    for (let i = 0; i < str2.length; i++) {
        result = result + str2[i];
    }
    return result;
}
const str1 = 'abdullah';
const str2 = 'khan'
const output = concatinateString(str1, str2);
console.log(output);
