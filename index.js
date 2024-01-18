function sortWithBubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j +1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(sortWithBubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));