const { ListNode, SingleLinkedList, findMidNode } = require('../singleLinkedList')

test('findMidNode', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))
    sll.append(new ListNode(3))
    sll.append(new ListNode(4))
    sll.append(new ListNode(5))

    const midNode = findMidNode(sll)
    expect(midNode.val).toBe(3)
})