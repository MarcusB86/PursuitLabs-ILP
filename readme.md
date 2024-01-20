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

## **Time complexity**

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

The time complexity of Bubble Sort is O(n^2) in the worst and average cases, where "n" is the number of elements in the list. This is because, in the worst case, the algorithm needs to make n passes through the entire list, and for each pass, it may need to swap each pair of elements.

## **Space complexity**

The space complexity of Bubble Sort is O(1) because it only requires a constant amount of extra space for storing temporary variables.

## **Use Cases**

Bubble sort is simple and easy to understand and its mostly used as an introduction to the concepts of sorting algorithims and to help grasp the fundementals of algorthimic design. Its also might used for very small data sets and already partially sorted data.

## **Edge Cases and Concerns**

While there are edge cases where O(n^2) algorithms might be acceptable, concerns primarily revolve around scalability, efficiency,more efficient sorting algorithms like Merge Sort, Quick Sort, or even built-in sorting functions in programming languages are preferred for their better average and worst-case performance. Bubble Sort is rarely used in production code where sorting large datasets quickly is essential.

## **Citations**

Gif to illustrate Bubble sort(https://commons.wikimedia.org/wiki/File:Bubble-sort-example-300px.gif#/media/File:Bubble-sort-example-300px.gif)

Youtube Bubble Sort https://www.youtube.com/watch?v=IAeLoGzU4RE

Chat GPT link to chat https://chat.openai.com/share/2c286940-6e4c-4a73-808f-0dca37cee1a4