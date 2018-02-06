/*Node.js 内置对象 fs 模块 文件系统模块，负责读写文件*/
var fs = require("fs");

let txtUrl = "C:\\Users\\Administrator\\Desktop\\input.txt";

/* 同步读取数据*/
// var txtData = fs.readFileSync(txtUrl);
// console.log(txtData.toString());

/*异步读取数据*/
fs.readFile(txtUrl, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("执行完毕！！")