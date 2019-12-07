function selectionSort (arr: Array<number>) {
    const len = arr.length
    let minIndex = 0

    for (let i = 0; i < len; i++) {
        minIndex = i

        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

export const testArr = [3, 2, 4, 1, 6, 5]
selectionSort(testArr)
console.log(testArr)