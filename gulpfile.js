var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');
var yaml = require('js-yaml');

var dataFile = 'data.yaml';
var jadeFile = 'index.jade';
var htmlFile = 'index.html';

// 将data.yaml和index.jade编译为index.html
gulp.task('build', function () {
  var locals;

  try {
    locals = yaml.safeLoad(fs.readFileSync(dataFile, 'utf8'));
  } catch (e) {
    logError(e);
    return;
  }

  // 输出未压缩的HTML
  locals.pretty = true;

  // 页面最后更新时间
  var date = new Date();
  locals.update = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  jade.renderFile(jadeFile, locals, function (err, html) {
    if (err) {
      logError(err);
      return;
    }

    fs.writeFile(htmlFile, html, function (err) {
      if (err) {
        logError(err);
        return;
      }

      console.log(new Date() + ' - SAVED');
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
  console.log(new Date() + ' - ERROR');
  fs.writeFile(htmlFile, err);
}
