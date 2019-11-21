function Node (value) {
    this.previous = null
    this.value = value
    this.next = null
}

function DoublyLinkedList () {
    this.head = new Node('head')
}

DoublyLinkedList.prototype.append = function (value) {
    const newNode = new Node(value)
    let currentNode = this.head

    while (currentNode.next) {
        currentNode = currentNode.next
    }

    currentNode.next = newNode
    newNode.previous = currentNode
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append('a')
doublyLinkedList.append('b')
doublyLinkedList.append('c')
console.log(doublyLinkedList)