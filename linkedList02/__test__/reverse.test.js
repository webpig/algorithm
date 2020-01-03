const { ListNode, SingleLinkedList, reverse } = require('../singleLinkedList')

test('reverse one element', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    let arr = reverseAndTravelsal(sll)
    expect(arr).toEqual([1])
})

test('reverse two element', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))
    let arr = reverseAndTravelsal(sll)
    expect(arr).toEqual([2, 1])
})

test('reverse three element', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))
    sll.append(new ListNode(3))
    let arr = reverseAndTravelsal(sll)
    expect(arr).toEqual([3, 2, 1])
})

function reverseAndTravelsal (sll) {
    let arr = []

    reverse(sll)
    let curr = sll.head.next
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    return arr
}