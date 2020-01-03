const { ListNode, SingleLinkedList } = require('../singleLinkedList')

test("append success", () => {
    const singleLinkedList = new SingleLinkedList()
    singleLinkedList.append(new ListNode(1))
    let tail = singleLinkedList.head.next
    expect(tail).toEqual({val: 1, next: null})
    singleLinkedList.append(new ListNode(2))
    tail = tail.next
    expect(tail).toEqual({val: 2, next: null})
})