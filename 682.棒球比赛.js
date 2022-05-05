/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
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
  sum() {
    let sum = 0;
    while (!this.isEmpty()) {
      sum += this.pop();
    }
    return sum;
  }
  print() {
    console.log("this.arr:", this.arr);
  }
}

var calPoints = function (ops) {
  // 栈先进后出，只有push和pop的操作
  const stack = new Stack();
  for (let i = 0; i < ops.length; i++) {
    const element = ops[i];
    if (!isNaN(parseInt(element))) {
      stack.push(parseInt(element));
    } else if (element === "C") {
      stack.pop();
    } else if (element === "D") {
      const topItem = stack.getTop();
      stack.push(topItem * 2);
    } else if (element === "+") {
      const item1 = stack.pop();
      const item2 = stack.pop();
      stack.push(item2);
      stack.push(item1);
      stack.push(item2 + item1);
    }
  }
  stack.print();
  return stack.sum();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = calPoints;
// @after-stub-for-debug-end
