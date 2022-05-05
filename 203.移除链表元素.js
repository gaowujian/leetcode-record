/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeElements = function (head, val) {
  const dummyNode = new ListNode();
  let tmp = dummyNode;
  dummyNode.next = head;

  while (tmp.next) {
    if (tmp.next.val === val) {
      tmp.next = tmp.next.next;
    } else {
      tmp = tmp.next;
    }
  }

  return dummyNode.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElements;
// @after-stub-for-debug-end
