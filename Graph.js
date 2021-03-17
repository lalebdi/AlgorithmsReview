// Below is an undirected graph. 

class Graph{
    constructor(){
        this.adjacencyList = {} // to store the edges.
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){ // will loop and pop elements and stop when the length == 0
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFSrecursive(vertex){ // Depth First Search (recursively)
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList; // because "this" will change context inside the helper function
        function DFS(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return DFS(neighbor)
                }
            })
            
        }
        DFS(vertex)
        return result
    }
    DFSiterative(start){
        let stack = [start] // can use a stack here
        let result = []
        let visited = {}
        let currentVertex
        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    BFS(start){
        let queue = [start]
        let result = [];
        let visited = {}
        let currentVertex
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }

        return result
    }
}

let g = new Graph()

// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Aspen")

// console.log(g)

// g.addEdge("Dallas", "Tokyo")

// console.log(g)

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g)

console.log(g.DFSrecursive("A"))
console.log(g.DFSiterative("A"))



// end of code