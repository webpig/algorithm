function findNotRepeatNumber (arr) {
    let cache = []
    
    for (value of arr) {
        const i = cache.indexOf(value) 
        if (i === -1) {
            cache.push(value)
        } else {
            cache.splice(i, 1)
        }
    }

    return cache[0]
}

function findNotRepeatNumber (arr) {
    let cache = {}

    for (value of arr) {
        cache[value] = !cache[value]
    }

    for (key in cache) {
        if (cache[key]) return Number(key)
    }
}

findNotRepeatNumber([2,3,6,3,6,1,1])