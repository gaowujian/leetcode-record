/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MyQueue {
  constructor() {
    this.data = [];
    this.head = 0; //头指针
    this.tail = 0; //尾指针，指向最后一个元素的下一个节点
  }
  size = function () {
    return this.tail - this.head;
  };
  enqueue(n) {
    while (this.size() > 0 && this.data[this.tail - 1] < n) {
      this.tail--;
    }
    this.data[this.tail++] = n;
  }
  dequeue(n) {
    if (this.data[this.head] === n) {
      this.head++;
    }
  }
  max() {
    return this.data[this.head];
  }
}

// !1. 队列的长度不一定和窗口的大小一直，队列内只需要维护这个窗口的最大值即可
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return null;
  const queue = new MyQueue();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (i < k - 1) {
      queue.enqueue(element);
      // result.push(queue.max());
    } else {
      queue.enqueue(element);
      result.push(queue.max());
      // 我们需要去移除窗口的值
      queue.dequeue(nums[i - k + 1]);
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end
