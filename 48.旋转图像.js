/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 按照列，进行替换
  //   reverse(matrix);
  let left = 0,
    right = matrix.length - 1;
  const n = matrix.length;
  while (left < right) {
    for (let i = 0; i < n; i++) {
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
    }
    left++;
    right--;
  }
  return matrix;
};
// @lc code=end
