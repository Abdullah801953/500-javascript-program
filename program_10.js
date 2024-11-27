function fibonaaciNumber(num) {
    let a = 0;
    let b = 1;
    console.log(a);
    if (num >= 1) {
        console.log(b);
    }
    for (let i = 2; i < num; i++) {
        let next = a + b;
        console.log(next)
        a = b;
        b = next;
    }
}
console.log(fibonaaciNumber(5));