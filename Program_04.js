// Find the largest number in an array
function findLargestNumberInArr(arr) {
    let minNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (minNum > arr[i]) {
            console.log('gratest num in array is', minNum);
            break;
        }
        else {
            minNum = arr[i];
        }
    }
}
const arr = [4, 6, 17, 1, 2];
console.log(findLargestNumberInArr(arr));