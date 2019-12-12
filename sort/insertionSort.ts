function insertionSort (arr: Array<number>) {
    const len = arr.length

    if (len <= 1) {
        return
    }

    for (let i = 1; i < len; i++) {
        let value: number = arr[i],
            j: number = i - 1

        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
        }

        arr[j + 1] = value
    }
}

export const testArr = [3, 2, 4, 1, 6, 5]
insertionSort(testArr)
console.log(testArr)