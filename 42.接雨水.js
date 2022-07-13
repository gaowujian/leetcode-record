/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let res = 0;

  //  搞两个dp数组，分别计算每个点，左边的墙和右边的墙，
  //   然后选择小的墙减去自身高度就是自己的水量
  const l_max = new Array(n).fill(0);
  const r_max = new Array(n).fill(0);
  l_max[0] = height[0];
  r_max[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1]);
  }

  for (let i = 1; i < n - 1; i++) {
    // 如果自己就是最高的话，
    // l_max == r_max == height[i]
    res += Math.min(l_max[i], r_max[i]) - height[i];
  }
  return res;
};
// @lc code=end

// 1. 暴力迭代法
// var trap = function (height) {
//     const n = height.length;
//     let res = 0;
//     for (let i = 1; i < n - 1; i++) {
//       let l_max = 0,
//         r_max = 0;
//       // 找右边最高的柱子
//       for (let j = i; j < n; j++) r_max = Math.max(r_max, height[j]);
//       // 找左边最高的柱子
//       for (let j = i; j >= 0; j--) l_max = Math.max(l_max, height[j]);
//       // 如果自己就是最高的话，
//       // l_max == r_max == height[i]
//       res += Math.min(l_max, r_max) - height[i];
//     }
//     return res;
//   };

// 2. 备忘录法则

// var trap = function (height) {
//     const n = height.length;
//     let res = 0;

//     //  搞两个dp数组，分别计算每个点，左边的墙和右边的墙，
//     //   然后选择小的墙减去自身高度就是自己的水量
//     const l_max = new Array(n).fill(0);
//     const r_max = new Array(n).fill(0);
//     l_max[0] = height[0];
//     r_max[n - 1] = height[n - 1];
//     for (let i = 1; i < n; i++) {
//       l_max[i] = Math.max(height[i], l_max[i - 1]);
//     }
//     for (let i = n - 2; i >= 0; i--) {
//       r_max[i] = Math.max(height[i], r_max[i + 1]);
//     }

//     for (let i = 1; i < n - 1; i++) {
//       // 如果自己就是最高的话，
//       // l_max == r_max == height[i]
//       res += Math.min(l_max[i], r_max[i]) - height[i];
//     }
//     return res;
//   };
