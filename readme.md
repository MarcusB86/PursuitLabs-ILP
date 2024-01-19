#           *Independent Learning Project - 🫧Bubble Sort* 🫧

## **Introduction**

Bubble sort is sorting algorithm that works by iterating through a list, compares adjacent elements and swaps them if they are in the wrong order. The iteration is repeated until the list is sorted.

## **Algorithm Description**

1.Initialization: The entire list is considered unsorted initially.

`const arr = [6, 5, 3, 1, 8, 7, 2, 4]`

2.Iterate over the array, element by element.For each element in the array, compare the element adjacent.

```
for (let i = 0; i < arr.length; i++) {
    //Outer for loop to keep track of each iteration we're on.
    for (let j = 0; j < arr.length; i++) {
        if (arr[j] > arr[j + 1]) {
          //Inner for loop starts comparing the elements adjacent to each other.
        }
    }
}
```        
         
3.Swap: Swap the larger element with the smaller element.

`[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]`

4. Repeat: Repeat steps 2,3 until entire list has been sorted.


<p><a href="https://commons.wikimedia.org/wiki/File:Bubble-sort-example-300px.gif#/media/File:Bubble-sort-example-300px.gif"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif" alt="Bubble-sort-example-300px.gif" height="180" width="300"></a><br>

## **The Big O Evaluation**










