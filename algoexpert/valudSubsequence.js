// const validSubsequence = (arr, sequence) => {
//   let k = 0
//   for (var i = 0; i <= sequence.length; i++) {
//     if (arr.includes(sequence[i])) {
//       k++;
//     }
//   }
//   return (k === sequence.length)
// }

const validSubsequence = (arr, sequence) => {
  let k = 0
  for (var i = 0; i <= sequence.length; i++) {
    if (arr.includes(sequence[i])) {
      k++;
    }
  }
  return (k === sequence.length)

}





console.log(validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 10, 10, 10, 10, 10, 10]));
