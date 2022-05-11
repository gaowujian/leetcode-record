/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head; //修改数据
  let fast = head; //递归遍历索引
  while (fast) {
    if (slow.val !== fast.val) {
      slow.next = fast;
      slow = fast;
    }
    fast = fast.next;
  }
  // 断开最后一次可能存在的重复元素
  slow.next = null;
  return head;
};
// @lc code=end
