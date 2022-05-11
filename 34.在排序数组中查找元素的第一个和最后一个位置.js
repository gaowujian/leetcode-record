/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      high = mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid;
    }
  }
  //   low === high跳出  区间是 [low,high) => [low,low)
  //   如果有重复值，high会向左压缩窗口，如果没有重复值，
  const finalLow = nums[low] === target ? low : -1;

  //   重置遍历条件
  low = 0;
  high = nums.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      low = mid + 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid;
    }
  }
  //  low===high跳出 一定是由于 low = mid +1之后
  // 所以 mid = low-1, 判断是否是第一个条件跳出，如果是就返回，不是就是因为第二个就-1
  const finalHi = nums[low - 1] === target ? low - 1 : -1;

  return [finalLow, finalHi];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end
