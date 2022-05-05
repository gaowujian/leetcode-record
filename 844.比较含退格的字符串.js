/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
class Stack {
  constructor() {
    this.arr = new Array();
    this.top = -1;
  }
  push(val) {
    this.arr[++this.top] = val;
  }
  pop() {
    if (this.isEmpty()) {
      return;
    }
    const val = this.arr[this.top];
    this.top--;
    return val;
  }
  isEmpty() {
    return this.top < 0;
  }
  getTop() {
    if (this.isEmpty()) return;
    return this.arr[this.top];
  }
  output() {
    let result = "";
    while (!this.isEmpty()) {
      result += this.pop();
    }
    return result;
  }
  print() {
    console.log("this.arr:", this.arr);
  }
}
var backspaceCompare = function (s, t) {
  const stackA = new Stack(s);
  const stackB = new Stack(t);
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "#") {
      stackA.pop();
    } else {
      stackA.push(element);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element === "#") {
      stackB.pop();
    } else {
      stackB.push(element);
    }
  }
  return stackA.output() === stackB.output();
};
// @lc code=end
