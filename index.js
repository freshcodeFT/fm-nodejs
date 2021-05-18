"use strict";

const MyMath = require("./MyMath");
const {Component, test} = require("./Component");

const componentObj = require("./test");

console.log("Hello node!");
console.log(2 + 2);

console.log(MyMath.sum(1,2,3,4,5));
console.log(Component);
console.log(test);

/*
How does require work?

1) Resolving - поск файла
2) Loading - загрузка файла
3) Wrapping - добавление обетрки для модуля
4) Evaluation - выполнение кода
5) Caching - кеширование выполненного кода
*/

/*
 Require file search stages
1) Common modules
2) File
  2.1) *.js
  2.2) *.json
3) Directory
  3.1) package.json -> main
  3.2) index.js | index.json
4) node_modules
5) throw new Error()
*/