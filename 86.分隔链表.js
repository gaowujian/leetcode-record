/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummyHead = new ListNode(null, head);
  if (!dummyHead.next) return dummyHead.next;
  let pre = dummyHead;
  while (pre.next && pre.next.val < x) {
    pre = pre.next;
  }
  let insert = pre;
  if (!insert) return dummyHead.next;
  let current = insert;
  while (current.next) {
    if (current.next.val < x) {
      // 保存节点
      let temp = current.next;
      //   删除节点
      current.next = current.next.next;
      // 拼接保存节点
      temp.next = insert.next;
      insert.next = temp;
      insert = insert.next;
    } else {
      current = current.next;
    }
  }
  return dummyHead.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end
