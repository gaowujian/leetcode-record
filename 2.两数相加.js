/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// ! 这种题目应该不太会考，边界案例比较多
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 && l2) {
    return l2;
  }
  if (l1 && !l2) {
    return l1;
  }
  const dummyNode = new ListNode(-1);
  let p = dummyNode;
  let p1 = l1;
  let p2 = l2;
  let curry = 0;
  while (p1 || p2 || curry > 0) {
    let cur = curry;
    if (p1) {
      cur += p1.val;
      p1 = p1.next;
    }
    if (p2) {
      cur += p2.val;
      p2 = p2.next;
    }
    curry = Math.floor(cur / 10);
    const val = cur % 10;
    p.next = new ListNode(val);
    p = p.next;
  }

  return dummyNode.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
