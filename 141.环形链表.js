/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // 走完之后再判断
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
// @lc code=end

// var hasCycle = function (head) {
//   if (!head) return false;
//   let slow = head,
//     fast = head;
//   while (slow && fast && slow.next && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }
//   return false;
// };
