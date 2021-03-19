
class PriorityQueue{
    constructor(){
        this.value = []
    }

    enqueue(val, priority){
        this.value.push({val, priority})
        this.sort()
    }

    dequeue(){
        return this.value.shift()
    }

    sort(){
        this.value.sort((a,b) => a.priority - b.priority)
    }
}


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