const { ListNode, SingleLinkedList } = require('../singleLinkedList')

test('findNodeByIndex success', () => {
    const sll = new SingleLinkedList()

    sll.append(new ListNode(1))
    sll.append(new ListNode(2))

    expect(sll.findNodeByIndex(0)).toBe('None')
    expect(sll.findNodeByIndex(3)).toBe('None')
    expect(sll.findNodeByIndex(1)).toEqual({val: 1, next: {val: 2, next: null}})
    expect(sll.findNodeByIndex(2)).toEqual({val: 2, next: null})
})

test('findNodeByVal success', () => {
    const sll = new SingleLinkedList()

    sll.append(new ListNode(1))
    sll.append(new ListNode(2))

    expect(sll.findNodeByVal(0)).toBe('None')
    expect(sll.findNodeByVal(3)).toBe('None')
    expect(sll.findNodeByVal(1)).toEqual({val: 1, next: {val: 2, next: null}})
    expect(sll.findNodeByVal(2)).toEqual({val: 2, next: null})
})