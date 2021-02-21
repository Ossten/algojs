const bestSum = (target, numbers) => {

  const table = Array(target + 1).fill(null)
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i] !== null) {
      for (num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  // console.log(table)
  return (table[target])
}


console.log(bestSum(7, [2, 3])); // true
console.log(bestSum(7, [5, 3, 4, 7])); //true
console.log(bestSum(7, [2, 4]));// false
console.log(bestSum(8, [2, 3, 5]));// true
console.log(bestSum(300, [7, 14]));// false
console.log(bestSum(100, [1, 2, 5, 25]));// false
