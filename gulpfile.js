var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');
var yaml = require('js-yaml');
var moment = require('moment');

var dataFile = 'data.yml';
var jadeFile = 'index.jade';
var htmlFile = 'index.html';

// 将data.yml和index.jade编译为index.html
gulp.task('build', function () {
  var data;

  try {
    data = yaml.safeLoad(fs.readFileSync(dataFile, 'utf8'));
  } catch (e) {
    logError(e);
    return;
  }

  // 输出未压缩的HTML
  data.pretty = true;
  data.updateTime = moment().format("YYYY-MM-DD");
  data.currentYear = moment().format("YYYY");

  jade.renderFile(jadeFile, data, function (err, html) {
    if (err) {
      logError(err);
      return;
    }

    fs.writeFile(htmlFile, html, function (err) {
      if (err) {
        logError(err);
        return;
      }

      console.log(moment().format("YYYY-MM-DD HH:mm:ss") + ' - SAVED');
    });
  });
});

// 源文件变动时，触发编译
gulp.task('watch', function () {
  gulp.watch([jadeFile, dataFile], ['build']);
});

// gulp运行时触发一次编译，然后开启监控进程
gulp.task('default', ['build', 'watch']);

/**
 * 将错误信息记录到htmlFile，以方便调试
 */
function logError(err) {
  console.log(moment().format("YYYY-MM-DD HH:mm:ss") + ' - ERROR');
  fs.writeFile(htmlFile, err);
}
