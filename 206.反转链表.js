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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseList = function (head) {
  if (!head) return null;
  // const dummyNode = new ListNode(null, head);
  // let prev = dummyNode;
  let prev = null;
  while (head) {
    // 记录前一个元素
    // let tmp = prev;
    // prev = head;
    // head = head.next;
    // prev.next = tmp;
    // 记录后一个元素
    let tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }
  return prev;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end
