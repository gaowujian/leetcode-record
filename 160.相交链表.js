/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    if (!p1) {
      p1 = headB;
    }
    p1 = p1.next;

    if (!p2) {
      p2 = headA;
    }
    p2 = p2.next;
  }
  return p1;
  //   while (p1 !== p2) {
  //     if (p1) {
  //       p1 = p1.next;
  //     } else {
  //       p1 = headB;
  //     }

  //     if (p2) {
  //       p2 = p2.next;
  //     } else {
  //       p2 = headA;
  //     }
  //   }
  //   return p1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end

//  哈希解法
// var getIntersectionNode = function (headA, headB) {
//     if (!headA || !headB) {
//       return null;
//     }
//     const map = new Map();
//     while (headA) {
//       map.set(headA, headA);
//       headA = headA.next;
//     }
//     while (headB) {
//       if (map.has(headB)) {
//         return headB;
//       }
//       headB = headB.next;
//     }
//     return null;
//   };
