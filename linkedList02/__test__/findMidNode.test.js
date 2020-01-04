const { ListNode, SingleLinkedList, findMidNode } = require('../singleLinkedList')

test('findMidNode', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))
    sll.append(new ListNode(3))

    const midNode = findMidNode(sll)
    expect(midNode.val).toBe(2)
})