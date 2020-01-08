class BinaryTreeNode {
    constructor (value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinaryTree {
    constructor () {
        this.root = new BinaryTreeNode('root')
    }
}

function preOrderTravelsal (root) {
    if (!root) return
    console.log(root.value)
    preOrderTravelsal(root.left)
    preOrderTravelsal(root.right)
}

function inOrderTravelsal (root) {
    if (!root) return
    inOrderTravelsal(root.left)
    console.log(root.value)
    inOrderTravelsal(root.right)
}

function postOrderTravelsal (root) {
    if (!root) return
    postOrderTravelsal(root.left)
    postOrderTravelsal(root.right)
    console.log(root.value)
}

const binaryTree = new BinaryTree()
binaryTree.root = new BinaryTreeNode('A')
binaryTree.root.left = new BinaryTreeNode('B')
binaryTree.root.right = new BinaryTreeNode('C')
binaryTree.root.left.left = new BinaryTreeNode('D')
binaryTree.root.left.right = new BinaryTreeNode('E')
binaryTree.root.right.left = new BinaryTreeNode('F')
binaryTree.root.right.right = new BinaryTreeNode('G')
console.log('------preOrderTravelsal------')
preOrderTravelsal(binaryTree.root)
console.log('------inOrderTravelsal------')
inOrderTravelsal(binaryTree.root)
console.log('------postOrderTravelsal------')
postOrderTravelsal(binaryTree.root)
