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

    BFS(){ // Breadth first search
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){ // depth first search
        let data = []
        let current = this.root
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data;
    }

    DFSPostOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data;
    }

    DFSInOrder(){
        let data = []
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data;
    }
}


let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree)

// console.log("the BFS", tree.BFS())
// console.log("the DFSPreOrder", tree.DFSPreOrder())
// console.log("the DFSPostOrder", tree.DFSPostOrder())
// console.log("the DFSInOrder", tree.DFSInOrder())