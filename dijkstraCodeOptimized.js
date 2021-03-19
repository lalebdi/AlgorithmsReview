//  To optimize it, will use a binary heap.

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight}) // the weight == weight : weight
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    dijkstra(start, finish){
        const nodes = new PriorityQueue()
        let distances = {}
        let previous = {} // stores the quickest way.
        let smallest;
        let path = [] // to be returned at the end
        
        // Build the initial state -> initialize the vertexes to infinity except the start
        for (let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val; // since the priority queue sorts the values smallest -> largest, dequeue will give us the smallest value.
            if(smallest === finish){
                // We are done. Build up the path to finish.
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){ // the this.adjacencyList[smallest] will give us each edge
                    // Find the neighoring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNieghbor = nextNode.node // nextNode is an object and node is the key of that object.
                    if(candidate < distances[nextNieghbor]){ 
                        // Updating new smallest distance to neighbor.
                        distances[nextNieghbor] = candidate;
                        // Updating previous -> How we got to neighbor.
                        previous[nextNieghbor] = smallest;
                        // Enqueue in priority queue with new priority
                        nodes.enqueue(nextNieghbor, candidate);
                    } 
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}



class PriorityQueue{ // will implement a min binary heap
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/ 2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}

let graph = new WeightedGraph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

let x = graph.dijkstra("A", "E")
console.log(x)