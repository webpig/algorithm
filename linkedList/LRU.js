const cache = []
let max = 10

function LRU (val) {
    const i = cache.indexOf(val)

    if (i !== -1) {
        cache.splice(i, 1)
        cache.unshift(val)
    } else {
        if (cache.length === max) {
            cache.pop()
        }
        cache.unshift(val)
    }

    console.log(cache)
}

LRU(1)
LRU(2)
LRU(3)
LRU(4)
LRU(5)
LRU(6)
LRU(7)
LRU(8)
LRU(9)
LRU(10)
LRU(11)

