class BinarySearchTreeNode {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
  }
}

class BinarySearchTree {
  insert(data) {
    if (!this.root) {
      this.root = new BinarySearchTreeNode(data)
    } else {
      this.insertNode(this.root, data)
    }
  }

  insertNode(node, data) {
    if (data < node.data) {
      if (!node.left) {
        node.left = new BinarySearchTreeNode(data)
      } else {
        this.insertNode(node.left, data)
      }
    } else {
      if (!node.right) {
        node.right = new BinarySearchTreeNode(data)
      } else {
        this.insertNode(node.right, data)
      }
    }
  }

  search(data) {
    return this.searchNode(this.root, data)
  }

  searchNode(node, data) {
    if (!node) {
      return false
    } else if (data < node.data) {
      return this.searchNode(node.left, data)
    } else if (data > node.data) {
      return this.searchNode(node.right, data)
    } else {
      return true
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, data) {
    if (!node) {
      return null
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return node
      }

      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      }

      const aux = this.minNode(node.right)
      node.data = aux.data
      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let curr = node

    while (curr && curr.left) {
      curr = curr.left
    }

    return curr
  }

  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let curr = node

    while (curr && curr.right) {
      curr = curr.right
    }

    return curr
  }

  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }

  preOrderTraverseNode (node) {
    if (!node) return

    console.log(node.data)
    this.inOrderTraverseNode(node.left)
    this.inOrderTraverseNode(node.right)
  }

  inOrderTraverseNode (node) {
    if (!node) return

    this.inOrderTraverseNode(node.left)
    console.log(node.data)
    this.inOrderTraverseNode(node.right)
  }

  postOrderTraverseNode (node) {
    if (!node) return

    this.inOrderTraverseNode(node.left)
    this.inOrderTraverseNode(node.right)
    console.log(node.data)
  }
}

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(11)
binarySearchTree.insert(6)
binarySearchTree.insert(9)
binarySearchTree.insert(13)
binarySearchTree.insert(14)
binarySearchTree.insert(23)
binarySearchTree.insert(4)
binarySearchTree.insert(8)
binarySearchTree.insert(2)
binarySearchTree.insert(10)

binarySearchTree.preOrderTraverse()
binarySearchTree.inOrderTraverse()
binarySearchTree.postOrderTraverse()

console.log(binarySearchTree.search(1))
console.log(binarySearchTree.search(11))
console.log(binarySearchTree.search(9))

console.log(binarySearchTree.min())
console.log(binarySearchTree.max())