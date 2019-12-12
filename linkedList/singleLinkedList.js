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

function reverse (linkedList) {
    let singleLinkedList = new SingleLinkedList(),
        values = [],
        currNode = linkedList.head.next

    while (currNode) {
        values.push(currNode.value)
        currNode = currNode.next
    }

    for (let i = values.length - 1; i >= 0; i--) {
        singleLinkedList.append(values[i])
    }

    return singleLinkedList
}

// 测试
// const singleLinkedList = new SingleLinkedList()
// singleLinkedList.append('a')
// singleLinkedList.append('b')
// singleLinkedList.append('c')
// singleLinkedList.insert('a', 'd')
// singleLinkedList.delete('b')
// singleLinkedList.reverse()
// console.log(singleLinkedList)

const singleLinkedList = new SingleLinkedList()
singleLinkedList.append('a')
singleLinkedList.append('b')
singleLinkedList.append('c')
singleLinkedList.append('c')
singleLinkedList.append('b')
singleLinkedList.append('a')

function isPalindromeString (str) {
    let reversedStr = reverse(str),
        currReversedStrNode = reversedStr.head.next
        currStrNode = str.head.next

    console.log(reversedStr, str)

    while (currStrNode) {
        if (currStrNode.value !== currReversedStrNode.value) {
            return false
        }

        currReversedStrNode = currReversedStrNode.next
        currStrNode = currStrNode.next
    }

    return true
}

function isPalindrome (linkedList) {
    let fast = linkedList.head.next,
        slow = linkedList.head.next,
        prev = null

    while (fast && fast.next) {
        fast = fast.next.next
        // 将链表前半部分反转，即prev；slow为后半段
        const next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    // fast不为null，说明链表节点数为奇数，为奇数则不用比较中间节点，向后移再进行比较
    if (fast) {
        slow = slow.next
    }

    while (slow) {
        if (prev.value !== slow.value) return false
        prev = prev.next
        slow = slow.next
    }

    return true
}

// console.log(isPalindromeString(singleLinkedList))
// console.log(isPalindrome(singleLinkedList))

function getMiddleNode (linkedList) {
    let slow = linkedList.head.next,
        fast = linkedList.head.next

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

console.log(getMiddleNode(singleLinkedList))