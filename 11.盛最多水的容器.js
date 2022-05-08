/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (61.72%)
 * Likes:    1178
 * Dislikes: 0
 * Total Accepted:    150.3K
 * Total Submissions: 243.5K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 *
 *
 *
 *
 *
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 *
 *
 * 示例：
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  if (!height) {
    return null;
  }
  let max = -Infinity;
  let low = 0;
  let high = height.length - 1;
  while (low < high) {
    const area = (high - low) * Math.min(height[low], height[high]);
    max = Math.max(max, area);
    // ! 指针的移动一定是这样的
    // ! 如果自己就小，肯定是移动自己，而不会去移动其他的
    height[low] < height[high] ? low++ : high--;
  }
  return max;
};

//  1. 第一种暴力解法。
// 两层循环，求所有的bar之间的，两两计算的面积大小
// var maxArea = function(height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
//     }
//   }
//   return max;
// };
// 2. 第二种双指针夹逼法则
// var maxArea = function(height) {
//   let max = 0;
//   let left = 0;
//   let right = height.length - 1;
//   while (left < right) {
//     // 求最大面积
//     max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
//     // 根据情况移动指针
//     height[left] < height[right] ? left++ : right--;
//   }
//   return max;
// };

// @lc code=end
