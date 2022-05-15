/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  // 缓存回溯的状态
  const path = [];

  // !回溯函数的参数需要对决策起作用，否则就不需要

  function backtrack(startIndex) {
    // 做选择就是直接把pathNodes放到结果里去
    // ! 做选择的时候不一定会有if, 我们认为到了这一步传进来的就是结果
    if (true) {
      // !切断引用,把当前状态放到结果中去
      const newPathNodes = path.slice();
      result.push(newPathNodes);
    }

    for (let i = startIndex; i < nums.length; i++) {
      // 做选择
      path.push(nums[i]);
      backtrack(i + 1);
      // 回撤选择
      path.pop();
    }
  }
  backtrack(0);
  console.log(result);
  return result;
};

//例子：nums = [1,2,3]
// var subsets = function (nums) {
//   let result = []; //存放结果
//   let path = []; //存放一个分支的结果
//   function backtracking(startIndex) {
//     //startIndex字符递归开始的位置
//     const sub = path.slice();
//     result.push(sub); //path.slice()断开和path的引用关系
//     for (let i = startIndex; i < nums.length; i++) {
//       //从startIndex开始递归
//       path.push(nums[i]); //当前字符推入path
//       backtracking(i + 1); //startIndex向后移动一个位置 继续递归
//       path.pop(); //回溯状态
//     }
//   }
//   backtracking(0);
//   console.log(result);
//   return result;
// };

// @lc code=end

// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end
