/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.arr = new Array(k);
  this.max = k;
  this.head = 0; //head指向了对头。先移动指针再赋值
  this.tail = 0; //tail指向了队尾的下一个，先赋值再移动指针
  this.cnt = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.head = (this.head - 1 + this.max) % this.max;
  this.arr[this.head] = value;
  this.cnt++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.arr[this.tail] = value;
  this.tail = (this.tail + 1) % this.max;
  this.cnt++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.head = (this.head + 1) % this.max;

  this.cnt--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.tail = (this.tail - 1 + this.max) % this.max;
  this.cnt--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr[(this.tail - 1 + this.max) % this.max];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.cnt === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.cnt === this.max;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

// @lc code=end

// @after-stub-for-debug-begin
module.exports = MyCircularDeque;
// @after-stub-for-debug-end
