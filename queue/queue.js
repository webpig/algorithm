class Queue {
    constructor () {
        this.value = []
    }

    enqueue (val) {
        this.value.push(val)
    }

    dequeue () {
        this.value.shift()
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
console.log(q)
q.dequeue()
console.log(q.value)