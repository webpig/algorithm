function quickSortInPlace (arr, startIndex = 0, endIndex = arr.length) {
    if (startIndex >= endIndex) return 
    
    let pivot = partition(arr, startIndex, endIndex)
    quickSortInPlace(arr, startIndex, pivot - 1)
    quickSortInPlace(arr, pivot + 1, endIndex)
}

function partition (arr, startIndex, endIndex) {
    let pivot = arr[endIndex]
    let i = startIndex

    for (let j = startIndex; j < endIndex; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
    }

    [arr[i], arr[endIndex]] = [arr[endIndex], arr[i]]
    
    return i
}

module.exports = {
    quickSortInPlace
}