function findSmallestValueArr(arr) {
  let val = 200;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < val) {
      val = arr[i];
    }
  }
}
const arr = [4, 8, 2, 9, 6];
const output = findSmallestValueArr(arr);
console.log(output);
