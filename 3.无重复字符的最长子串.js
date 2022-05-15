/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return null;
  let left = 0,
    right = 0;
  let maxLength = -Infinity;
  //   const set = new Set();
  let window = 0;
  while (right < s.length) {
    right++;
    window++;
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      //   一直删除到他没有位置，然后把新认识的放进集合，之后可以继续安全的增长长度
      set.add(s[right]);
    }
  }
  return maxLength;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end

// 1. 暴力循环解法
// var lengthOfLongestSubstring = function (s) {
//     if (!s) return null;
//     const len = s.length;
//     let maxLength = -Infinity;
//     let path = [];
//     for (let i = 0; i < len; i++) {
//       path = [];
//       for (let j = i; j < len; j++) {
//         if (!path.includes(s[j])) {
//           path.push(s[j]);
//           maxLength = Math.max(maxLength, path.length);
//         } else {
//           break;
//         }
//       }
//     }
//     return maxLength;
//   };

// 2. 自研算法
// var lengthOfLongestSubstring = function (s) {
//     if (!s) return null;
//     let left = 0,
//       right = 0;
//     let maxLength = -Infinity;
//     const set = new Set();
//     while (right < s.length) {
//       if (!set.has(s[right])) {
//         set.add(s[right]);
//         maxLength = Math.max(maxLength, set.size);
//       } else {
//         while (set.has(s[right])) {
//           set.delete(s[left]);
//           left++;
//         }
//         //   一直删除到他没有位置，然后把新认识的放进集合，之后可以继续安全的增长长度
//         set.add(s[right]);
//       }
//       right++;
//     }
//     return maxLength;
//   };
