/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    const index = nums2.findIndex((item) => item === element);
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > element) {
        result.push(nums2[j]);
        break;
      }
    }
    if (!result[i]) {
      result.push(-1);
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = nextGreaterElement;
// @after-stub-for-debug-end
