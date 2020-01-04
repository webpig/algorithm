const { ListNode, SingleLinkedList, deleteKstNode } = require('../singleLinkedList')

test('deleteKstNode success', () => {
    const sll = new SingleLinkedList()
    sll.append(new ListNode(1))
    sll.append(new ListNode(2))
    sll.append(new ListNode(3))

    deleteKstNode(sll, 2)
    let curr = sll.head.next, arr = []
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    expect(arr).toEqual([1, 3])
})
// 0, 1, 2, 3, 4 测试