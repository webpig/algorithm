function mergeSort (arr) {
    const len = arr.length

    if (len <= 1) return arr

    const mid = Math.floor(len / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, len)

    return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
    let i = 0, j = 0, temp = []

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            temp.push(left[i++])
        } else {
            temp.push(right[j++])
        }
    }

    temp = temp.concat(left.slice(i)).concat(right.slice(j))
    
    return temp
}

module.exports = {
    mergeSort
}