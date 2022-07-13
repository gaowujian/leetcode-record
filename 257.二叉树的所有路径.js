/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// * 这道题目的最经典解决方式还是回溯法
// ! 同时注意在使用回溯算法的时候，要注意引用数据类型的使用，错误的修改方式导致回溯失败，
// ! 最好是拷贝一份新数据然后进行操作

var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  // 缓存回溯状态
  const path = [];
  // node是遍历的节点，
  // pathNodes是根节点到该点的路径节点数组,可跟踪
  function backtrack(node) {
    // *1.满足条件的时候，我们可以做那些事
    if (!node.left && !node.right) {
      result.push([...path, node].map((node) => node.val).join("->"));
      return;
    }

    // *2. 当不满足条件的时候，我们应该怎么去做选择
    // *我们需要确保没有数据的引用，所以每次进来之后需要重新创建一份
    // 选择列表里有两项，第一个是有左子树，第二个是有右子树
    // !全排列问题里里不止有两个选择会有更多个
    if (node.left) {
      // 做选择
      path.push(node);
      backtrack(node.left);
      // 回溯，取消选择，就是把刚才放入的那个节点拿出来
      path.pop();
    }

    if (node.right) {
      // 做选择
      path.push(node);
      backtrack(node.right);
      // 回溯，取消选择
      path.pop();
    }
  }
  backtrack(root, []);
  return result;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end

// 1.第一种 遍历树的解法，这也是一个回溯

// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const result = [];
//   // node是传入的节点，path是到该节点之前的路径，result是最终的结果
//   const paths = [];
//   function traverse(node) {
//     if (!node) return;
//     // 节点遍历前入栈
//     paths.push(node.val);
//     if (!node.left && !node.right) {
//       result.push(paths.join("->"));
//     } else {
//       traverse(node.left);
//       traverse(node.right);
//     }
//     // 节点遍历后入栈
//     paths.pop();
//   }
//   traverse(root);
//   return result;
// };

// 2. 分解子问题解法
// var binaryTreePaths = function (root) {
//   if (!root) {
//     return [];
//   }
//   const result = [...binaryTreePaths(root.left), ...binaryTreePaths(root.right)];
//   const converted =
//     result.length == 0
//       ? [`${root.val}`]
//       : result.map((item) => {
//           return `${root.val}->${item}`;
//         });
//   return converted;
// };

// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const result = [];
//   const paths = [];
//   function traverse(node) {
//     if (!node) return;
//     // 前置位置，遍历到这个节点就放入path中
//     paths.push(node.val);
//     // 如果不是叶子节点，直接放入
//     if (!node.left && !node.right) {
//       result.push(paths.join("->"));
//     }
//     traverse(node.left);
//     traverse(node.right);
//     // 遍历完该节点后需要弹出
//     paths.pop();
//   }
//   traverse(root);
//   return result;
// };

// 4。回溯算法

// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const result = [];

//   // node是遍历的节点，
//   // pathNodes是根节点到该点的路径节点数组,可跟踪
//   function backtrack(node, pathNodes) {
//     // 1.满足条件的时候，我们可以做那些事
//     if (!node.left && !node.right) {
//       let pathStr = "";
//       for (let i = 0; i < pathNodes.length; i++) {
//         const element = pathNodes[i];
//         pathStr = pathStr + element.val + "->";
//       }
//       result.push(pathNodes.map((node) => node.val).join("->"));
//     }

//     // 2. 当不满足条件的时候，我们应该怎么去做选择
//     // 这里做的选择比较简单，就是把当前节点放入了一个路径数组里并传下去
//     pathNodes.push(node);

//     if (node.left) {
//       backtrack(node.left, pathNodes);
//       // 回溯，取消选择，就是把刚才放入的那个节点拿出来
//       pathNodes.pop();
//     }

//     if (node.right) {
//       backtrack(node.right, pathNodes);
//       // 回溯，取消选择
//       pathNodes.pop();
//     }
//   }
//   backtrack(root, []);
//   return result;
// };
