class weightedGraph{
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
