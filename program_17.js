function FerinToCel(F) {
  const c = ((F - 32) * 5) / 9;
  return `${c} Celsius`;
}
const output = FerinToCel(23);
console.log(output);
