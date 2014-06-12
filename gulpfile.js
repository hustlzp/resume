var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');
var yaml = require('js-yaml');
var moment = require('moment');
var Promise = require("bluebird");

var dataFile = 'data.yml';
var jadeFile = 'index.jade';
var htmlFile = 'index.html';

// 将相关函数promisify
Promise.promisifyAll(fs);
var renderFile = Promise.promisify(jade.renderFile);

// 将data.yml和index.jade编译为index.html
gulp.task('build', function () {
  fs.readFileAsync(dataFile, "utf8").then(function (content) {
    return yaml.safeLoad(content);
  }).then(function (data) {
      // 输出未压缩的HTML
      data.pretty = true;
      data.updateTime = moment().format("YYYY-MM-DD");
      data.currentYear = moment().format("YYYY");
      return renderFile(jadeFile, data);
    }).then(function (html) {
      return fs.writeFileAsync(htmlFile, html);
    }).then(function () {
      console.log(moment().format("YYYY-MM-DD HH:mm:ss") + ' - SAVED');
    }).catch(function (err) {
      console.log(moment().format("YYYY-MM-DD HH:mm:ss") + ' - ERROR');
      fs.writeFile(htmlFile, err);
    });
});

// 源文件变动时，触发编译
gulp.task('watch', function () {
  gulp.watch([jadeFile, dataFile], ['build']);
});

// gulp运行时触发一次编译，然后开启监控进程
gulp.task('default', ['build', 'watch']);
