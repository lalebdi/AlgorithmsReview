// Using a singly linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(val){ // this is the unshift from the singly linked list
        let newItem = new Node(val)
        if (!this.first){
            this.first = newItem;
            this.last = newItem;
        } else {
            let temp = this.first;
            this.first = newItem;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }

    pop(){ // this is shift from the linked list
        if(this.size === 0 ) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp
    }
}