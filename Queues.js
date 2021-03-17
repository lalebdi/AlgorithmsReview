
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){ // will add to the end
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
        return this.size
    }

    dequeue(){ // will remove from the beginning
        if(this.size === 0) return null
        let currentHead = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = currentHead.next
        this.size--;
        return currentHead.value;
    }
}