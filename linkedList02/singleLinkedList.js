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
            // console.log(curr.val)
        }
    }   

    findNodeByIndex (index) {
        if (index <= 0) return 'None'

        let i = 1
        let curr = this.head.next

        while (curr) {
            if (i === index) {
                return curr
            }

            i++
            curr = curr.next
        }

        return 'None'
    }

    findNodeByVal (val) {
        let curr = this.head.next

        while (curr.val !== val) {
            curr = curr.next
        }

        return curr || 'None'
    }
}

function reverse (linkedList) {
    let curr = linkedList.head.next
    let prev = null

    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    linkedList.head.next = prev
}

module.exports = {
    ListNode,
    SingleLinkedList,
    reverse
}

// const singleLinkedList = new SingleLinkedList()
// console.log(singleLinkedList)
// singleLinkedList.append(1)
// singleLinkedList.append(2)
// singleLinkedList.append(3)
// console.log(singleLinkedList)
// singleLinkedList.remove(2)
// console.log(singleLinkedList)