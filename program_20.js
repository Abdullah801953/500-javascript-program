function leapYear(year) {
  if (year % 4 === 0) {
    return `${year} leap year`;
  } else {
    return `not leap year`;
  }
}
const output = leapYear(2015);
console.log(output);
