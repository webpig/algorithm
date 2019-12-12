// import { SingleLinkedList } from './SingleLinkedListClass'
const SingleLinkedList = require('./SingleLinkedListClass')

const s = new SingleLinkedList()
s.append(1)
s.append(2)
s.append(3)
s.head.next.next.next = s.head.next.next
console.log(s)

// function hasCycle (linkedList) {
//     let startTime = +new Date(),
//         curr = linkedList.head

//     while (curr.next) {
//         curr = curr.next

//         if (+new Date - startTime > 1000) {
//             return true
//         }
//     }

//     return false
// }

// function hasCycle (linkedList) {
//     let set = new Set(),
//         curr = linkedList.head

//     while (curr.next) {
//         if (set.has(curr.val)) return true

//         set.add(curr.val)
//         curr = curr.next
//     }

//     return false
// }

function hasCycle (linkedList) {
    let slow = linkedList.head,
        fast = linkedList.head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}

console.log(hasCycle(s))