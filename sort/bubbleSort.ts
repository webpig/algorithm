function bubbleSort (arr: Array<number>) {
    const len = arr.length

    if (len <= 1) {
        return
    }

    for (let i = 0; i < len; i++) {
        let flag: boolean = false

        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = true
            }
        }

        if (!flag) {
            break;
        }
    }
}

export const testArr = [3, 2, 4, 1, 6, 5]
bubbleSort(testArr)
console.log(testArr)