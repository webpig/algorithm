function quickSort (arr) {
    if (arr.length <= 1) return arr

    let lowArr = [], highArr = []
    const mid = arr.pop()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            lowArr.push(arr[i])
        } else {
            highArr.push(arr[i])
        }
    }

    return [].concat(quickSort(lowArr), mid, quickSort(highArr))
}

module.exports = {
    quickSort
}