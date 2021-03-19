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

