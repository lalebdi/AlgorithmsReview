What is recursion?
    => A process (or a function) that calls itself. i.e. They call themselves.
    JSON.parse/ JSON.stringify, document.getElementById and DOM traveral algorithms are recursive functions.
    
    => Tips:
    1. For arrays -> use methods like slice, the spead operator and concat that make copies of arrays so you do not mutate them.
    2. Strings are immutable -> you will nee to use methods like slice, substr or substring to make copies of strings.
    3. Objects -> To make copies of objects use Object.assign or the spread operator.


- Linear Search:
    JavaScript has different search methods on arrays => indexOf, includes, find, findIndex. 

- Binary Search: O(log n)
    It is a much faster form. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
    Binary seach only works on sorted arrays.
    => The idea here is divide and conquering: split up the pieces and pick a pivot point in the middle and check the left side and the right side to see where it is at. 

- Bubble Sort:
    A sorting algorithm where the largest values bubble up to the top.
    Time Compexity = O(n^2)
    Space Complexity = O(1)

- Selection Sort:
    Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
    Time Compexity = O(n^2)
    Space Complexity = O(1)

- Insertion Sort:
    Builds up the sort by gradually creating a larger left half which is always sorted. 
    Time Compexity = O(n^2)
    Space Complexity = O(1)

- Merge Sort:
    Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array. Sorta kinda divide and concqur, where you slpit up the larger array into smaller arrays. In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays. Given 2 arrays which are sorted, this helper create a new array which is also sorted, and consists of all of the elements in the two input arrays. This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it. Usually involves recursion.
    Time Compexity = O(n log n)
    Space Complexity = O(n)

- Quick Sort:
    Exploites the fact that arrays of 0 or 1 elements are always sorted. Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriayely, quick sort can be applied on either side of the pivot. 

    => Pivot helper:
        - In order to implement Quick Sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
        - Given an array, this helper function should designate an element as the pivot.
        - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
        - The order of elements on wither side of the pivot doesn't matter.
        - The helper should do this in place, i.e. it should not create a new array.
        - When complete, the helper should return the index of the pivot.
        
        => Picking a pivot:
        - The runtime of quick sort depends in part on how one selects the pivot.
        - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
    
    Time Compexity = O(n^2)
    Space Complexity = O(log n)

- Radix Sort:
    - Works on numbers. It exploites the fact that information about the size of a number is encoded in the number of didgite. i.e. more digits means a bigger number!
    Time Compexity = O(nk) => n = number of integers, k= is the length of the digits
    Space Complexity = O(n+k)
