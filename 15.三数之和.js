/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums < 3) return [];
  //三数之和，构造一个 sum(nums,target)的架构
  //   const newNums = [...new Set(nums)];
  const sorted = nums.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    map.set(element, {
      data: element,
      ignoreKey: i,
    });
  }
  const result = [];
  for (const [key, value] of map) {
    const subResult = twoSum(key, value.data, value.ignore);
    if (subResult.length === 3) {
      result.push(subResult);
    }
  }

  function twoSum(nums, target, ignore) {
    const memo = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (i == ignore) {
        const theOther = target - nums[i];
        if (memo.has(theOther)) {
          return [memo.get(theOther), i];
        } else {
          memo.set(nums[i], i);
        }
      }
    }
    return [];
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
