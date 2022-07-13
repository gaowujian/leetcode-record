/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  if (!head || n < 0) {
    return null;
  }
  const dummyNode = new ListNode(-1, head);
  let slow = dummyNode;
  let fast = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyNode.next;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end
