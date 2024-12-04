// function squareOfNum(num) {
//     return Math.pow(num,2)
// }
// const output = squareOfNum(3);
// console.log(output);

// without operator and without pow method
function squareOfNum(num) {
    let val=0+num;
    for(let i=0;i<num-1;i++){
        val=val+num;
    }
    return val;
}
const output = squareOfNum(4);
console.log(output);
