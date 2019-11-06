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
    let currentNode = this.head

    while (currentNode.next) {
        currentNode = currentNode.next
    }

    currentNode.next = newNode
}

// 插入操作，在指定值的所属节点之后插入
SingleLinkedList.prototype.insert = function (value, newValue) {
    const newNode = new Node(newValue)
    let currentNode = this.head

    while (value !== currentNode.value && currentNode.next) {
        currentNode = currentNode.next
    }
    
    newNode.next = currentNode.next
    currentNode.next = newNode
}

// 删除操作，删除指定值的所属节点
SingleLinkedList.prototype.delete = function (value) {
    let currentNode = this.head

    while (currentNode.next && currentNode.next.value !== value) {
        currentNode = currentNode.next
    }

    currentNode.next = currentNode.next.next
}

// SingleLinkedList.prototype.reverse = function () {
//     const root = new Node('head')
//     let currentNode = this.head.next

//     while (currentNode !== null) {
//         const next = currentNode.next
//         currentNode.next = root.next
//         root.next = currentNode
//         currentNode = next
//     }
//     this.head = root
// }

SingleLinkedList.prototype.reverse = function () {
    // 当前节点
    let currentNode = this.head.next
    // 头节点为null
    let previousNode = null

    while (currentNode !== null) {
        // 保存下一节点
        const next = currentNode.next
        // 开始指向null，即尾节点
        currentNode.next = previousNode
        // 指向当前节点，一开始即指向尾节点
        previousNode = currentNode
        // 将当前节点指向next，进行下一轮反转
        currentNode = next
    }

    // 加入头节点
    this.head.next = previousNode
}

// 测试
const singleLinkendList = new SingleLinkedList()
singleLinkendList.append('a')
singleLinkendList.append('b')
singleLinkendList.append('c')
singleLinkendList.insert('a', 'd')
singleLinkendList.delete('b')
singleLinkendList.reverse()
console.log(singleLinkendList)