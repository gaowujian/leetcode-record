/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const NULL = "#";
const SEP = ",";
var serialize = function (root) {
  let str = "";
  function traverse(node) {
    if (!node) {
      str += NULL + SEP;
      return;
    }
    str += node.val + SEP;
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) {
    return null;
  }
  const nodes = data.split(SEP);
  //   传入一个数组返回一个头节点为头的树
  function build(nodes) {
    if (nodes[0] === "#") {
      nodes.shift();
      return null;
    }
    const node = new TreeNode(parseInt(nodes[0]));
    nodes.shift();
    node.left = build(nodes);
    node.right = build(nodes);
    return node;
  }
  return build(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// @after-stub-for-debug-begin
module.exports = serialize;
// @after-stub-for-debug-end
