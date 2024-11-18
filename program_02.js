const reverseStr = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        let arr=[];
        newArr=arr.push(str[i]);
    }
    return newArr;
}
const output=reverseStr('hello');
console.log(output);