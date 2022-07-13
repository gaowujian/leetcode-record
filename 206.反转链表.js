/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// head表示需要反转链表的头节点
var reverseList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  const pre = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return pre;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end

// * 迭代写法
// var reverseList = function (head) {
//   if (!head) return null;

//   let prev = null;
//   while (head) {
//     let tmp = head.next;
//     head.next = prev;
//     prev = head;
//     head = tmp;
//   }
//   return prev;
// };

// * 递归写法
// var reverseList = function (head) {
//   if (!head) {
//     return null;
//   }
//   if (!head.next) {
//     return head;
//   }
//   // last在递归的过程中一直没动，通过return一直返回
//   const last = reverseList(head.next);
//   // 打断链子
//   head.next.next = head;
//   head.next = null;
//   return last;
// };
