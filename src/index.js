function pcMaths(a, b) {
  this.a = a;
  this.b = b;
}

pcMaths.prototype.sum = function(a, b, c) {
  return this.a + this.b + a + b;
};

const a = pcMaths.prototype.sum.call({ a: 1, b: 2 }, 1, 2, 3, 4);
console.log(a);

const mathObject = new pcMaths(1, 4);
console.log(mathObject.sum.apply({ a: 7, b: 6 }, [6, 2, 3, 4]));
const bindedSumWithObj = mathObject.sum.bind({ a: 8, b: 2 });
console.log(bindedSumWithObj(1, 2, 3, 3));
