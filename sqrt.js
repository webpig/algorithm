function sqrt(x) {
  let low = 0
  let high = x
  let num = 0.0001

  while (low <= high) {
    let mid = low + (high - low) / 2

    if (mid > x / mid) {
      high = mid - num
    } else if (mid < x / mid) {
      low = mid + num
    } else {
      return mid
    }
  }

  return high
} 

console.log(sqrt(1), Math.sqrt(1))
console.log(sqrt(2), Math.sqrt(2))
console.log(sqrt(3), Math.sqrt(3))
console.log(sqrt(4), Math.sqrt(4))
console.log(sqrt(5), Math.sqrt(5))
console.log(sqrt(6), Math.sqrt(6))