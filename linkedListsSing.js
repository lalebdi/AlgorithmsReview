class Node{
    constructor(val){
        this.val = val;
        this.next= null // cause in the beginning there's nothing that comes after it.
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        // adding a new node to the end of the Linked List.
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this // <- returns the whole list
    }

    // traverse(){
    //     let current = this.head
    //     while(current){
    //         console.log(current.val)
    //         current = current.next
    //     }
    // }

    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current // <- they both start from the beginning
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift(){
        // Removing a new node from the beginning of the linked list
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(index){
        // Get will take a number and traverse the list that many times and returns the node at that index.
        if(index < 0 || index >= this.length) return null;
        let counter = 0
        let current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        // accepts 2 values, the position and value, and updates that node
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val){
        // adds a node to the linked list at a specific position.
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); // the !! will coase it to a boolean
        if(index === 0) return !!this.unshift(val)
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }

    remove(index){
        // Removes a node from the linked list at a specific position.
        if(index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let previousNode = this.get(index -1)
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head // this serves as a temporary varibale
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null // the reason this is null is becuase we want the tail.next to be null.
        for(let i = 0 ; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
    
    print(){
        let arr = []
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
// list.push("Hello")  
// list.push("Hello2")  
// list.push("Hello3")  
// list.traverse()
// console.log(list)
// list.unshift("helloNew")
// console.log(list)
// list.pop()
// console.log(list)
// list.shift()
// console.log(list)
// list.push("Hello4")  
// list.push("Hello23")  
// list.push("Hello32")  
// console.log(list)
// console.log("This node is", list.get(2))

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
list.print()
list.reverse()
list.print()