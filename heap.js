class Heap {
  constructor() {
    this.arr = ['none']
  }

  insert(data) {
    const arr = this.arr

    arr[arr.length] = data

    let i = arr.length - 1
    let pi = Math.floor(i / 2)

    while (pi > 0 && arr[i] > arr[pi]) {
      swap(arr, i, pi)
      i = pi
      pi = Math.floor(i / 2)
    }
  }

  removeMax() {
    const arr = this.arr
    arr[1] = arr[arr.length - 1]
    arr.pop()
    this.heapify()
  }

  heapify() {
    const arr = this.arr
    let i = 1

    while (true) {
      let maxIndex = i
      let leftIndex = i * 2
      let rightIndex = i * 2 + 1

      if (leftIndex < arr.length && arr[i] < arr[leftIndex]) {
        maxIndex = leftIndex
      }
      if (rightIndex < arr.length && arr[maxIndex] < arr[rightIndex]) {
        maxIndex = rightIndex
      }
      if (maxIndex === i) {
        break
      }

      swap(arr, i, maxIndex)
      i = maxIndex
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const heap = new Heap()
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.removeMax()
heap.removeMax()
console.log(heap.arr)