const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null)
  table[0] = []
  for (let i = 0; i < target; i++) {
    if (table[i] !== null) {
      for (number of numbers) {
        if (i + number <= target)
          table[i + number] = [...table[i], number]
      }
    }
  }
  // console.log(table)
  return (table[target])
}

console.log(howSum(7, [2, 3])); // true
console.log(howSum(7, [5, 3, 4, 7])); //true
console.log(howSum(7, [2, 4]));// false
console.log(howSum(8, [2, 3, 5]));// true
// console.log(howSum(300, [7, 14]));// false