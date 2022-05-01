/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

// 只能使用 push,pop, length和 leng===0 四个操作
var MyQueue = function () {
  this.stackA = [];
  this.stackB = [];
  this.size = 0; //size是主栈的元素个数
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackA.push(x);
  this.size++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.size > 1) {
    const el = this.stackA.pop();
    this.stackB.push(el);
    this.size--;
  }
  const el = this.stackA.pop();
  this.size--;
  while (this.stackB.length > 0) {
    this.stackA.push(this.stackB.pop());
    this.size++;
  }
  return el;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.size > 1) {
    const el = this.stackA.pop();
    this.stackB.push(el);
    this.size--;
  }
  const el = this.stackA.pop();
  this.stackA.push(el);
  while (this.stackB.length > 0) {
    this.size++;
    this.stackA.push(this.stackB.pop());
  }
  return el;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.size === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
