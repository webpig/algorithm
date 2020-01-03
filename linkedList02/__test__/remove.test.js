const { ListNode, SingleLinkedList } = require('../singleLinkedList')

test('remove success', () => {
    const singleLinkedList = new SingleLinkedList()
    singleLinkedList.append(new ListNode(1))
    singleLinkedList.append(new ListNode(2))
    singleLinkedList.append(new ListNode(3))
    singleLinkedList.remove(1)
    let head = singleLinkedList.head
    expect(head.next).toEqual({val: 2, next: {val: 3, next: null}})
    singleLinkedList.remove(3)
    expect(head.next).toEqual({val: 2, next: null})
})