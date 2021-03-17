class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
};


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let removedNode = this.tail;
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else {
            this.tail = removedNode.prev;
            this.tail.next = null
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(index){
        if( index < 0 || index >= this.length) return null;
        let count, current
        if(index <= this.length/2){
            count = 0;
            current = this.head
            while (count !== index){
                current = current.next
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index){
                current = current.prev
                count--;
            }
        }
        return current
    }

    set(val, index){
        let settingNode = this.get(index)
        if(settingNode){
            settingNode.val = val
            return true;
        }
        return false;
    }

    insert(val, index){
        if ( index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val)
        if( index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let preNode = this.get(index - 1)
        let postNode = preNode.next
        preNode.next = newNode
        newNode.prev = preNode;
        newNode.next = postNode;
        postNode.prev = newNode
        this.length++;
        return true;
    }

    remove(index){
        if ( index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift()
        if(index === this.length - 1) return this.pop();
        let targetItem = this.get(index)
        let preNode = targetItem.prev
        let postNode = targetItem.next
        preNode.next = postNode;
        postNode.prev = preNode;
        targetItem.next = null
        targetItem.prev = null
        this.length--;
        return targetItem;
    }
}