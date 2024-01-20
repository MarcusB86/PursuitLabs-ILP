function sortWithBubbleSort(arr) {
     // unsorted order of elements
    for (let i = 0; i < arr.length; i++) {
        //Outer for loop to keep track of each iteration we're on.
        for (let j = 0; j < arr.length; j++) {
            //Inner for loop starts comparing the elements adjacent to each other.
            if (arr[j] > arr[j + 1]) {
                // Checks if the current element is larger than the element adjacent.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // Swap the larger element with the smaller element.
            }
        }
    }
    return arr; // Return sorted array
}
console.log(sortWithBubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));// unsorted array of numbers
console.log(sortWithBubbleSort([-4,-5,-3,-8,-55,-99,-3.-1,-54,-23,-12,-98,-49]));// unsorted array with negative numbers
console.log(sortWithBubbleSort([9,4,6,8,-9,-4,-2,-9,-16,9,-5]));// unsorted array of positive and negative numbers