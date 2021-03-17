Problem solving steps:

1. Understand the problem:
    Start with:
    1- Can I restate the problem in my own words? (In your own words -> To make sure you understand what the question is.)
    2- What are the inputs that go into the problem? 
    3- What are the outputs that should come from the solution to the problem?
    4- Can the outputs be determined from the inputs? Do I have enough info to solve the problem? 
    5- How should I label the important pieces of the data that are a part of the problem?

2. Concete Examples:
    Coming up with examples can help you understand the problem. Examples also provide sanity checks that your solution works how it should. (User Stories or Unit Tests)
    * Start with simple examples. 2 or 3 with an input and a output. Easiest use cases. 
    * Progress to more complex examples.
    * Explore examples with empty inputs. (edge cases)
    * Explore examples with invalid inputs. 

3. Break It Down:
    AKA Pseudo-code
    Write the steps you will take.

4. Solve or Simplify:
    Simplify infers solving a simpler problem =>
    - Find the core of the difficulty in what you're trying to do.
    - Temporarily ignore that difficulty.
    - Write a simplified solution.
    - Then incorporate that difficulty back in.

5. Look Back and Refactor:
    ~ Can you check the result?
    ~ Can you derive the result differently?
    ~ Can you understand it at a glance?
    ~ Can you use the result or method for some other problem?
    ~ Can you improve the performace of your solution?
    ~ can you think of other ways to refactor?
    ~ How have other people solved this problem?


Patterns:
1. Frequency Counters:
    This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested for loops "O(n^2)" operations with arrays/strings. 2 loops are better than nested loops. 
    => The idea is usually use an object to construct a profile to break down the contents of an array or string and compare that break down to another on how they look. 

2. Multiple Pointers:
    Creating pointers or values that correspond to an index or position and move towards the beginning, end or  towards each other middle based on a certain condition. Minimal space complexity. 
    This is used for strings, arrays or doubly linkedlists.
    Usually used to find a pair. 

3. Sliding Window:
    This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). This is useful for keeping track of a subset of data in an array or string.
    i.e. finding a subset of the data.

4. Divide and Conquer:
    This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This is great for time complexity. Used in arrays, strings, linkedlist and tries.
    So, you start in the middle and see if the value is less or more than the middle and repeat.


