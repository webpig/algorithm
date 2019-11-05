// 节点构造函数
function Node (value) {
    this.value = value
    this.next = null
}

// 单链表构造函数
function SingleLinkedList () {
    this.head = new Node('head')
}

// 添加操作，节点末尾添加
SingleLinkedList.prototype.append = function (value) {
    const newNode = new Node(value)
    let node = this.head

    while (node.next) {
        node = node.next
    }

    node.next = newNode
}

// 插入操作，在指定值的所属节点之后插入
SingleLinkedList.prototype.insert = function (value, newValue) {
    const newNode = new Node(newValue)
    let node = this.head

    while (value !== node.value && node.next) {
        node = node.next
    }
    
    newNode.next = node.next
    node.next = newNode
}

// 删除操作，删除指定值的所属节点
SingleLinkedList.prototype.delete = function (value) {
    let node = this.head

    while (node.next && node.next.value !== value) {
        node = node.next
    }

    node.next = node.next.next
}

// 测试
const singleLinkendList = new SingleLinkedList()
singleLinkendList.append('a')
singleLinkendList.append('b')
singleLinkendList.append('c')
singleLinkendList.insert('a', 'd')
singleLinkendList.delete('b')
console.log(singleLinkendList)