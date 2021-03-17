class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)
        if(this.root === null){
            this.root = newNode;
            return this
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(val){
        if(this.root === null) return null;
        let current = this.root;
        let found = false;
        while(current && !found){ // the current is there so if we hit the bottom of the trree then the while loop stops.
            if(val < current.value){
                current = current.left;
            } else if (val > current.value){
                current = current.right
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}




// end of code