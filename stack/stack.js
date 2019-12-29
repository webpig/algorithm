class Stack {
    constructor () {
        this.value = []
    }

    push (val) {
        this.value.push(val)
    }

    pop () {
        this.value.pop()
    }
}

const s = new Stack()
s.push(1)
s.push(2)
console.log(s)
s.pop()
console.log(s)
