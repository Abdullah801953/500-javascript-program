function oddEvenCheck(num) {
    if (num < !0 && num % 2 == 0) {
         return 'even number'
    }
    else{
        console.log('odd number');
    }
}
const num = -2;
const output = oddEvenCheck(num);
console.log(output);