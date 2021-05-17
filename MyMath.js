class MyMath {
  static sum = (...args) => args.reduce((acc, num) => acc + num, 0);
  static sub = (a, b) => a - b;
  static mul = (a, b) => a * b;
  static div = (a, b) => a / b;
}

module.exports = MyMath;