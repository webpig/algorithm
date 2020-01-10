const { mergeSort } = require('../mergeSort')

test('mergeSort', () => {
    let arr = [9, 4, 2, 7, 3, 1, 0, 8, 6, 5]

    arr = mergeSort(arr)

    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})