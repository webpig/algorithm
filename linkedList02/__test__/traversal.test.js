const { ListNode, SingleLinkedList } = require('../singleLinkedList')

test("append success", () => {
    const singleLinkedList = new SingleLinkedList()
    singleLinkedList.append(new ListNode(1))
    singleLinkedList.append(new ListNode(2))
    singleLinkedList.append(new ListNode(3))
    singleLinkedList.traversal()
})