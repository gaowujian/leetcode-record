/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function palindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--, r++;
    }
    return s.substring(l + 1, r);
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    res = s1.length > res.length ? s1 : res;
    res = s2.length > res.length ? s2 : res;
  }
  return res;
};
// @lc code=end
