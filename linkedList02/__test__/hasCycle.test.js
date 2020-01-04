const { ListNode, SingleLinkedList, hasCycle, findNodeByVal } = require('../singleLinkedList')

test('hasCycle success', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))

    expect(hasCycle(sll)).toBe(false)

    sll.append(new ListNode(3))
    const head = sll.head.next
    const tail = sll.head.next.next.next
    tail.next = head
    expect(hasCycle(sll)).toBe(true)
})