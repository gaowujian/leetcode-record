/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.queueA = [];
  this.queueB = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queueA.push(x);
  this.size++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.size > 1) {
    this.queueB.push(this.queueA.shift());
    this.size--;
  }
  const el = this.queueA.shift();
  this.size--;
  while (this.queueB.length > 0) {
    this.size++;
    this.queueA.push(this.queueB.shift());
  }
  return el;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queueA[this.queueA.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.size === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
