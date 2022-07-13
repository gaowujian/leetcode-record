/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return -1;
  let slow = head;
  let fast = head;
  let tmp = null;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      tmp = head;
      while (tmp !== slow) {
        slow = slow.next;
        tmp = tmp.next;
      }
      return tmp;
    }
  }
};
// @lc code=end

// var detectCycle = function (head) {
//   if (!head) return null;
//   let slow = head,
//     fast = head;
//   tmp = null;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       tmp = head;
//       while (tmp !== slow) {

//         tmp = tmp.next;
//         slow = slow.next;
//       }
//       return tmp;
//     }
//   }
//   return null;
// };
