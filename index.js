"use strict";
const fs = require("fs").promises;
fs.readFile("./test.txt", "utf8")
  .then((data) => fs.writeFile("./newFile.txt", `${data}\nNEW CONTENT`))
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.error(e);
  });

/*
  1) Прочесть файл
  2) Создать новый файл, который скопирует содержимое первого файла + "NEW CONTENT" в конце с новой строки
  */
