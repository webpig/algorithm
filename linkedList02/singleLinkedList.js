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

        while (curr && curr.val !== val) {
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

function hasCycle (linkedList) {
    let fast = linkedList.head.next
    let slow = linkedList.head.next

    while (fast) {
        fast = fast.next.next
        slow = slow.next

        if (slow === fast) {
            return true
        }
    }

    return false
}

function mergeTwoList (l1, l2) {
    let dummy = new ListNode(0)
    let curr = dummy
    l1 = l1.head.next
    l2 = l2.head.next

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }

        curr = curr.next
    }

    curr.next = l1 ? l1 : l2

    return dummy.next
}

// function deleteKstNode (linkedList, k) {
//     let length = 0, curr = linkedList.head.next

//     while (curr) {
//         length++
//         curr = curr.next
//     }

//     length -= k
//     curr = linkedList.head

//     while (length && curr.next) {
//         curr = curr.next
//         length--
//     }

//     if (curr && curr.next) {
//         curr.next = curr.next.next
//     }
// }
function deleteKstNode (linkedList, k) {
    if (k === 0) return

    let fast = linkedList.head, slow = linkedList.head

    for (let i = 1; i <= k; i++) {
        fast = fast.next
        if (!fast) {
            return
        }
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    // if (slow && slow.next) {
        slow.next = slow.next.next
    // }
}

function findMidNode (linkedList) {
    let fast = linkedList.head.next
    let slow = linkedList.head.next

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

module.exports = {
    ListNode,
    SingleLinkedList,
    reverse,
    hasCycle,
    mergeTwoList,
    deleteKstNode,
    findMidNode
}

// const singleLinkedList = new SingleLinkedList()
// console.log(singleLinkedList)
// singleLinkedList.append(1)
// singleLinkedList.append(2)
// singleLinkedList.append(3)
// console.log(singleLinkedList)
// singleLinkedList.remove(2)
// console.log(singleLinkedList)