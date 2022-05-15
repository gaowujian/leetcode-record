/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const result = [];
  const minLength = Math.min(...strs.map((item) => item.length));
  for (let i = 0; i < minLength; i++) {
    const char = strs[0][i];
    const isSame = Array.from(strs).every((item) => item[i] === char);
    if (isSame) {
      result.push(char);
    } else {
      break;
    }
  }
  return result.join("");
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end

// !. 暴力解法
// var longestCommonPrefix = function (strs) {
//     const result = [];
//     const minLength = Math.min(...strs.map((item) => item.length));
//     for (let i = 0; i < minLength; i++) {
//       const char = strs[0][i];
//       const isSame = Array.from(strs).every((item) => item[i] === char);
//       if (isSame) {
//         result.push(char);
//       } else {
//         break;
//       }
//     }
//     return result.join("");
//   };
