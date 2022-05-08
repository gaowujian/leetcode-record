/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

// 参数是一个链表的头节点，返回的是是否是回文串

var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  let left = head;

  function traverse(node) {
    if (!node) {
      return true;
    }
    let result = traverse(node.next);
    // if (left === result) {
    //   left = left.next;
    // } else {
    //   finalResult = false;
    // }
    result = result && left.val === node.val;
    left = left.next;
    return result;
  }
  return traverse(head);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
