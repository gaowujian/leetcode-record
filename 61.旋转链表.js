/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let len = 1;
  let tail = head;
  // 结束之后tail是在最后一个节点
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  // 让链表组成了一个环状结构
  tail.next = head;
  let step = k % len;
  while (step) {
    tail = tail.next;
    step--;
  }
  let result = tail.next;
  tail.next = null;

  return result;
};
// @lc code=end
