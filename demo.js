// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log("matrix:", matrix);
// for (let i = 0; i < matrix.length; i++) {
//   const row = matrix[i];
//   for (let j = i; j < matrix.length; j++) {
//     const temp = matrix[i][j];
//     matrix[i][j] = matrix[j][i];
//     matrix[j][i] = temp;
//   }
// }
// console.log('matrix:', matrix)

// const arr = [1, 2, 3, 4, 2, 1];

// const result = Array.from(arr);
// console.log("result:", result);
const n = 3;
const dp = new Array(n).fill(1).map(() => new Array(n));
console.log("dp:", dp);
