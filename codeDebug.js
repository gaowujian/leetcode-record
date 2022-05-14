let count = 0;
function printIndent(n) {
  let indentString = "";
  for (let i = 0; i < n; i++) {
    indentString += "   ";
  }
  return indentString;
}

// 使用斐波那契数列做题进行距离
// 在递归函数的开头，调用 printIndent(count++) 并打印关键变量；
// 然后在所有 return 语句之前调用 printIndent(--count) 并打印返回值。
var fib = function (n) {
  // printIndent(count);
  console.log(`${printIndent(count++)}循环${n}开始`);
  if (n === 0 || n === 1) {
    console.log(`${printIndent(--count)}循环${n}结束,结果:${n}`);

    return n;
  }
  if (memo[n]) {
    console.log(`${printIndent(--count)}}循环${n}结束,结果:${memo[n]}`);

    return memo[n];
  }
  const result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  count--;
  console.log(`${printIndent(--count)}循环${n}结束,结果:${result}`);
  return result;
};
