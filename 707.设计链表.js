/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.dummyHead = new ListNode();
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size - 1) {
    return -1;
  }
  let cur = this.dummyHead.next;
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  console.log("cur:", cur);
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
  console.log("this.dummyHead:", this.dummyHead);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  //   this.addAtIndex(this.size, val);
  const newNode = new ListNode(val);
  let cur = this.dummyHead;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = newNode;
  this.size++;
  console.log("this.dummyHead:", this.dummyHead);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;

  const newNode = new ListNode(val);
  let cur = this.dummyHead;
  if (index <= 0) {
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
    return;
  }
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  newNode.next = cur.next;
  cur.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.size || index < 0) return;
  let cur = this.dummyHead;
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  if (cur.next) {
    cur.next = cur.next.next;
    this.size--;
  }
  console.log("this.dummyHead:", this.dummyHead);
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

// @after-stub-for-debug-begin
module.exports = MyLinkedList;
// @after-stub-for-debug-end
