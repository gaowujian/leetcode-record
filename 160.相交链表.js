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
  let p = headA;
  let q = headB;

  while (p !== q) {
    // 如果都指向null，说明找到了两个链表的末尾
    if (!p && !q) {
      return null;
    }
    // 如果p空需要重置p，并进入下一次循环
    if (!p) {
      p = headB;
      continue;
    }
    // 如果q空需要重置q，并进入下一次循环
    if (!q) {
      q = headA;
      continue;
    }
    p = p.next;
    q = q.next;
  }
  return p;
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

// var getIntersectionNode = function (headA, headB) {
//   let p = headA;
//   let q = headB;

//   while (p !== q) {
//     // 如果都指向null，说明找到了两个链表的末尾
//     if (!p && !q) {
//       return null;
//     }
//     // 如果p空需要重置p，并进入下一次循环
//     if (!p) {
//       p = headB;
//       continue;
//     }
//     // 如果q空需要重置q，并进入下一次循环
//     if (!q) {
//       q = headA;
//       continue;
//     }
//     p = p.next;
//     q = q.next;
//   }
//   return p;
// };
