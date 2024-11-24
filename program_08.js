function primeOrNot(num) {
    if (num <= 1) {
        return 'not prime number';
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'not prime number'
        }
    }
    return 'prime number'
    console.log(Math.sqrt(num));
}
const output = console.log(primeOrNot(5))