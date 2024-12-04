function findLargestValInArr(arr) {
  let val = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      val = arr[i];
    }
  }
  return val;
}
const arr = [4, 5, 34, 89,8,100];
// const arr = [5,4,3,2,6];
const output = findLargestValInArr(arr);
console.log(output);
