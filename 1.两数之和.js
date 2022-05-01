/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const memo = new Map();
  for (let i = 0; i < nums.length; i++) {
    const theOther = target - nums[i];
    if (memo.has(theOther)) {
      return [memo.get(theOther), i];
    } else {
      memo.set(nums[i], i);
    }
  }
  // 双指针法
  // const newNums = nums.map((item, index) => {
  //   return {
  //     data: item,
  //     originIndex: index,
  //   };
  // });
  // const sorted = newNums.sort((a, b) => {
  //   return a.data - b.data;
  // });
  // let left = 0;
  // let right = sorted.length - 1;
  // while (left < right) {
  //   if (sorted[left].data + sorted[right].data === target) {
  //     return [sorted[left].originIndex, sorted[right].originIndex];
  //   }
  //   if (sorted[left].data + sorted[right].data > target) {
  //     right--;
  //   }
  //   if (sorted[left].data + sorted[right].data < target) {
  //     left++;
  //   }
  // }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
