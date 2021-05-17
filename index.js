"use strict";

const MyMath = require("./MyMath");
const {Component, test} = require("./Component");

const componentObj = require("./Component");

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

