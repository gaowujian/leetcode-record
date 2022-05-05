/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const arr = s.split("").filter((s) => {
    if (s != " ") {
      return s;
    }
  });
  const nums = []; //数字栈
  const ops = []; //操作符栈
  const opWeight = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };
  const opsArr = Object.keys(opWeight);
  function jisuan(op) {
    const num1 = nums.pop();
    const num2 = nums.pop();
    switch (op) {
      case "+":
        nums.push(num2 + num1);
        break;
      case "-":
        nums.push(num2 - num1);
        break;
      case "+":
        nums.push(num2 * num1);
        break;
      case "-":
        nums.push(num2 / num1);
        break;
      default:
        break;
    }
  }
  let numString = "";
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //   如果是一个运算符，首先把之前的符号做成一个数字放入数字栈
    if (opsArr.includes(element)) {
      nums.push(Number(numString));
      numString = "";
      //   计算两次运算符的权重
      let preOp = ops.pop();
      let curOp = element;
      if (opWeight[preOp] >= opWeight[curOp]) {
        jisuan(preOp);
      } else {
        ops.push(preOp);
        ops.push(curOp);
      }
    } else {
      numString += element;
    }
  }
  while (ops.length > 0) {
    jisuan(ops.pop());
  }
  return nums[0];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = calculate;
// @after-stub-for-debug-end
