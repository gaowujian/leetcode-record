/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
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
    console.log(this.output());
  }
}

var minRemoveToMakeValid = function (s) {
  // 利用栈抵消的思想，在栈里存的是需要删除的关键索引而不是数据
  const stack = new Stack();
  const arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(") {
      stack.push({ data: "(", index: i });
    } else if (element === ")") {
      const topItem = stack.getTop();
      if (topItem && topItem.data === "(") {
        stack.pop();
      } else {
        stack.push({ data: ")", index: i });
      }
    }
  }
  stack.print();
  while (!stack.isEmpty()) {
    const item = stack.pop();
    arr[item.index] = "";
  }

  return arr.join("");
};
minRemoveToMakeValid("lee(t(c)o)de)");
// @lc code=end
