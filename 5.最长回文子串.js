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
  const len = s.length;
  if (len < 2) {
    return s;
  }
  // const dp = Array.from(new Array(len), () => {
  //   return new Array(len);
  // });
  //  dp[i][j] 表示 从i到j的元素是不是一个回文串
  // 状态方程 dp [i][j] = s[i]===s[j] && dp[i+1][j-1]
  let maxLength = 1;
  let begin = 0;
  const dp = new Array(len).fill(false).map(() => new Array(len));
  // let dp = Array.from(new Array(len), () => new Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      // 如果首尾字符不同那么肯定不是
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // 如果头尾去掉字符，没有字符或者只剩下一个那么也是一个回文串
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      // 如果是一个回文串，需要记录
      if (dp[i][j] && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        begin = i;
        // console.log(s.slice(begin, begin + maxLength));
      }
    }
  }
  return s.slice(begin, begin + maxLength);
};
// @lc code=end

// var longestPalindrome = function (s) {
//   function palindrome(s, l, r) {
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       l--, r++;
//     }
//     return s.substring(l + 1, r);
//   }
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     const s1 = palindrome(s, i, i);
//     const s2 = palindrome(s, i, i + 1);
//     res = s1.length > res.length ? s1 : res;
//     res = s2.length > res.length ? s2 : res;
//   }
//   return res;
// };
