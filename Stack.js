function Stack() {
  this.data = [];
  this.count = 0;
}
Stack.prototype = {
  push: function (element) {
    this.data[this.count] = element;
    ++this.count;
    return true;
  },

  pop: function () {
    if (this.count == 0) return null;
    var tmp = this.data[this.count - 1];
    --this.count;
    return tmp;
  },

  peek: function () {
    return this.data[this.count - 1];
  },

  isEmpty: function () {
    return this.count == 0;
  },

  size: function () {
    return this.count;
  },

  print: function () {
    let result = "";
    for (let i of this.data) {
      result = result + "=>" + i;
    }
    return result;
  },

  clear: function () {
    this.count = 0;
  },
};

Stack.prototype.constructor = Stack;
