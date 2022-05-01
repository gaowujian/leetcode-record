/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  const dummyHead = new ListNode();
  let list3 = dummyHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      list3.next = list1;
      list3 = list3.next;
      list1 = list1.next;
    } else {
      list3.next = list2;
      list3 = list3.next;
      list2 = list2.next;
    }
  }
  list3.next = list1 ? list1 : list2;
  return dummyHead.next;
};
// @lc code=end
