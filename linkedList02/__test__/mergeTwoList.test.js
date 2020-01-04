const { ListNode, SingleLinkedList, mergeTwoList } = require('../singleLinkedList')

test('mergeTwoList success', () => {
    const l1 = new SingleLinkedList()
    const l2 = new SingleLinkedList()
    l1.append(new ListNode(1))
    l1.append(new ListNode(2))
    // l1.append(new ListNode(3))
    l2.append(new ListNode(1))
    l2.append(new ListNode(3))
    l2.append(new ListNode(4))

    const newList = mergeTwoList(l1, l2)
    const arr = []
    let curr = newList
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    expect(arr).toEqual([1, 1, 2, 3, 4])
})