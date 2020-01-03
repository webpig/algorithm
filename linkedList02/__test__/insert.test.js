const { ListNode, SingleLinkedList } = require('../singleLinkedList')

test('insertBefore success', () => {
    const singleLinkedList = new SingleLinkedList()
    singleLinkedList.append(new ListNode(1))
    singleLinkedList.append(new ListNode(2))
    singleLinkedList.insertAfter(new ListNode(3), 2)
    const head = singleLinkedList.head
    expect(head.next.next.next).toEqual({val: 3, next: null})
    singleLinkedList.insertBefore(new ListNode(4), 3)
    expect(head.next.next.next).toEqual({val: 4, next: {val: 3, next: null}})
})