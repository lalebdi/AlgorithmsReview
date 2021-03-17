- Data Structures are collection of values, the relationsships among them, and the functions or operations that can be applied to the data.

- A class is a blue blueprint for creating objects with pre-defined properties and methods.

This => changes definition depending on where it is decalred. e.g. this in a constructor or a method refers to the individual instence of a class. 

- Instance Methods: they provide funstionality that pertains to a single instanece of an object. So you have to have an object to execute the method on.

- Class Methods: Uses the word "static" in front of the method. These methods are pertinent to classes not to individual instences. They are called without instantiating their class and cannot be called throughh a class instance. They are often used to create utility functions for an application. i.e. it is not related to indiviual instence, it is a functionality for the function. 

- Linked Lists: A data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null. There are no indeces for the data inside. They are connected via nodes with a next pointer. Random access is not allowed. Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required. Arrays contain a built in index whereas Linked Lists don't.  
    BigO of Singly => Insertion -> O(1), Searching -> O(n), Access -> O(n), Removal -> O(1) or O(n)
    BigO of Doubly => Insertion -> O(1), Searching -> O(n), Access -> O(n), Removal -> O(1) 

- Stack: Stacks are a LIFO data strucutre where the last value in is always the first one out. Stacks are used to handle function invications (ths call stack), for operations like undo/redo, and for routing (pages you have visited and go back/forward) and much more. They are not a built in data structure in JavaScript,  but are relatively simple to implement. 
    BigO => Insertion -> O(1), Removal -> O(1)

- Queues: Queues are a FIFO data strucutre where the first in first out. They are useful for processing tasks and are foundational for more complext data strucutures. They are not a built in data structure in JavaScript,  but are relatively simple to implement. 
    BigO => Insertion -> O(1), Removal -> O(1)

- Tree: a data strucuture that consists of nodes in a parent/child relationship. We can't have a sibling point to another or a child point to a parent.
     * Root: The top node in a tree.
     * Child: A node directly connected to another node when moving away from the root.
     * Parent: The converse notion of a child.
     * Siblings: A group of nodes with the same parent.
     * Leaf: A node with no children.
     * Edge: The connection between one node and another.
     - Uses: HTML DOM, JSON, Network Routing, folders in an operating system and artificail intelligence. 

- Binary Tree: Each node can have 2 children at most.

- Binary Search Tree: Each node can have 2 children at most and are sorted (kept in a particular order). The data that is less than the node is placed to the left. The data that is larger than the node goes right. 
    BigO => Insertion -> O(log n), Searching -> O(log n)

- Heaps: Very similar to a binary search tree, but with some different rules. 
    In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes. Binary heaps are used to implement Priority Queues and graph traversal.
    BigO => Insertion & Removal -> O(log N), Search -> O(n)

- Max Binary Heap: Each parent has at most 2 child nodes. The value of each parent node is always greater than its child nodes. In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes. A binary heap is as sompact as possible. All the children of each node are as full as they can be and left children are filled out first. 

- When removing elements in a heap, remove the root and replace it with the most recently added. Then take the last item added and have it bubble down. (with the larger one)

- Priority Queue: A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. They can be implemented in any data strucutre. A lower number denotes a higher priority. Insertion and removal BigO O(log n)

- Hash Tables (Hash Maps): Hash tables are used to store key-value pairs. The keys are not ordered. The are fast for finding values, adding new values, and removing values.  A good hash should be fast, distribute keys uniformly, and be deterministic. 
BigO => insertion, deletion and access are O(1)

- Handling Hash Tables Collisions: 
    1. Separate Chaining: At each index in our array we store values using a more sophisticated data structure (e.g. an array or linked list). This allows us to stire multiple key-value pairs at the same index. Think of it as a nested strucutre.
    2. Linear Probing: We search through the array to find the next empty slot. 

- Graphs: A group of nodes with connections betweeen them. Esseantial Graphs Terms:
    * Vertx -> is a node
    * Edge -> Connection between nodes.
    * Weighted/Unweighted -> Values assigned to distances between vertices.
    * Directed/Undirected -> directions assigned to distance between vertices. 

    Graphs can be built using adjacency matrix and adjacency list.

    => A Matrix is usually represented using a nest array. So, the connections are modeled in a nested arrays. It takes more space (ina sparse graphs). Slower to iterate over all edges. Faster to look up a specific edge.
    => An Adjacency list uses an array or a hash table to recored the connections (edges). Takes up less space (in sparse graphs). Faster to iterate over all edges. Can be slower to look up specific edge. 

- Depth First Graph Traversal" Prioterizing children. You have to decide the order. 
- Breadth first graph traversal prioritizing visiting all the neighbors at a given deapth before moving downwards.


=> Dijksta Algorithm: Finds the shortest path between two vertices on a graph. 

