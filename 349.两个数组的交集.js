/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums1.length) {
    intersection(nums2, nums1);
  }
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];
  set1.forEach((item) => {
    if (set2.has(item)) {
      result.push(item);
    }
  });
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = intersection;
// @after-stub-for-debug-end

const set = new Set(["11", 3223, { wujian: "skerjer" }]);
set.forEach(console.log);
