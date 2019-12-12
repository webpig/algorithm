class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class SingleLinkedList {
    constructor () {
        this.head = new Node('head')
    }

    append (val) {
        let curr = this.head
        const newNode = new Node(val)

        while (curr.next) {
            curr = curr.next
        }

        curr.next = newNode
    }
}

module.exports = SingleLinkedList