// Find the largest number in an array
function findLargestNumberInArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                console.log(`gratest number in array is ${arr[i]}`);
                break;
            }
            else if (arr[j] > arr[i]) {
                console.log(`gratest number in array is ${arr[j]}`);
                break;
            }
        }
    }
}
const arr = [4, 6, 7, 10, 2];
console.log(findLargestNumberInArr(arr));