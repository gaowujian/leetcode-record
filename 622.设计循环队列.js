/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.arr = new Array(k);
  this.head = 0;
  this.tail = 0;
  this.cnt = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.arr[this.tail] = value;
  this.tail++;
  if (this.tail === this.arr.length) {
    this.tail = 0;
  }
  this.cnt++;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.head++;
  if (this.head === this.arr.length) {
    this.head = 0;
  }

  this.cnt--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  const index = (this.tail - 1 + this.arr.length) % this.arr.length;
  return this.arr[index];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.cnt === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.cnt === this.arr.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

// @after-stub-for-debug-begin
module.exports = MyCircularQueue;
// @after-stub-for-debug-end
