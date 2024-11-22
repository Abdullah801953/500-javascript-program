function factorialOfNumber(num) {
    let count = 1;
    for (let i = 1; i <= 5; i++) {
        count = i * count;
    }
    return count;
}
const output = console.log(factorialOfNumber(5));