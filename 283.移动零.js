/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// @lc code=start

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  1. 理解题目
//  2. 想多种解法

//  暴力法
// des： 遍历一个数组，如果是0，计数器增加1，并且删除这个元素，最后补0
// var moveZeroes = function(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; ) {
//     if (nums[i] == 0) {
//       nums.splice(i, 1);
//       count++;
//     } else i++;
//   }
//   while (count > 0) {
//     nums.push(0);
//     count--;
//   }
// };

// 双指针法
// des 在遍历的过程中，我们维护一个指针，总是指向最后一个不为0的元素
// 注意第52行的block 和56行的自增是不可以交换顺序的
var moveZeroes = function(nums) {
  let lastNotZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNotZero] = nums[i];
      if (i != lastNotZero) {
        nums[i] = 0;
      }
      lastNotZero++;
    }
  }
};
