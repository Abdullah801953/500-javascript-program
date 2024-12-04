function findSmallestValueArr(arr) {
  let val = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<val) {
     val=arr[i];
    }
  }
  return val;
}
const arr = [4, 8, 2, 9, 6];
const output = findSmallestValueArr(arr);
console.log(output);
