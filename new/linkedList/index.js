class LinkedListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(val) {
    this.head = new LinkedListNode(val)
  }

  travelsal() {
    let curr = this.head

    while (curr) {
      console.log(curr.val)
      curr = curr.next
    }
  }

  append(val) {
    const node = new LinkedListNode(val)
    let curr = this.head

    while (curr && curr.next) {
      curr = curr.next
    }

    curr.next = node
  }

  // 链表反转
  reverse() {
    let curr = this.head
    let prev = null

    while (curr) {
      // 保存下个节点
      const next = curr.next
      // 将当前节点next指针指向上一节点，即实现反转
      curr.next = prev
      // 进入下一循环
      prev = curr
      curr = next
    }

    // prev为反转后的链表
    this.head = prev
  }
}

const linkedList = new LinkedList(0)
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

// linkedList.travelsal()
linkedList.reverse()
linkedList.travelsal()
