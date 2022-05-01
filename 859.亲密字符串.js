/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // 情况1
  if (!s || !goal || s.length !== goal.length) {
    return false;
  }
  //   情况2
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      temp.push(s[i], goal[i]);
    }
  }
  if (temp.length === 0) {
    //   情况3 字符全部相同，需要判断
    const strSet = new Set(s.split(""));
    if (strSet.size % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }
  if (temp.length === 4 && temp[0] === temp[3] && temp[1] === temp[2]) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
