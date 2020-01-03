class ListNode {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class SingleLinkedList {
    constructor () {
        this.head = new ListNode(0)
    }

    append (newNode) {
        let curr = this.head

        while (curr.next) {
            curr = curr.next
        }

        curr.next = newNode
    }

    remove (val) {
        let curr = this.head

        while (curr.next && curr.next.val !== val) {
            curr = curr.next
        }

        curr.next = curr.next.next
    }

    insertBefore (newNode, val) {
        let curr = this.head

        while (curr.next && curr.next.val !== val) {
            curr = curr.next
        }

        newNode.next = curr.next
        curr.next = newNode
    }

    insertAfter (newNode, val) {
        let curr = this.head

        while (curr.next && curr.val !== val) {
            curr = curr.next
        }

        newNode.next = curr.next
        curr.next = newNode
    }

    traversal () {
        let curr = this.head

        while (curr.next) {
            curr = curr.next
            console.log(curr.val)
        }
    }                        
}

module.exports = {
    ListNode,
    SingleLinkedList
}

// const singleLinkedList = new SingleLinkedList()
// console.log(singleLinkedList)
// singleLinkedList.append(1)
// singleLinkedList.append(2)
// singleLinkedList.append(3)
// console.log(singleLinkedList)
// singleLinkedList.remove(2)
// console.log(singleLinkedList)