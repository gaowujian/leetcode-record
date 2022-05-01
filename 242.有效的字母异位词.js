/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 利用对象当做O(1)的哈希表
  // if (s.length !== t.length) return false;
  // const objS = {};
  // const objT = {};
  // for (let i = 0; i < s.length; i++) {
  //   objS[s[i]] = (objS[s[i]] || 0) + 1;
  //   objT[t[i]] = (objT[t[i]] || 0) + 1;
  // }
  // for (const [key, value] of Object.entries(objS)) {
  //   if (value !== objT[key]) {
  //     return false;
  //   }
  // }
  // return true;
  // ================================
  // 使用数组当做O(1)的哈希表
  // if (s.length !== t.length) return false;
  // const aCode = "a".charCodeAt(0);
  // const arr = new Array(26).fill(0);
  // for (let i = 0; i < s.length; i++) {
  //   const indexCode = s[i].charCodeAt(0);
  //   arr[indexCode - aCode]++;
  // }
  // for (let i = 0; i < t.length; i++) {
  //   const indexCode = t[i].charCodeAt(0);
  //   arr[indexCode - aCode]--;
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     return false;
  //   }
  // }
  // return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end
