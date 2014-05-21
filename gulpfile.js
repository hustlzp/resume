var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');
var yaml = require('js-yaml');

var dataFile = 'data.yaml';
var jadeFile = 'index.jade';
var htmlFile = 'index.html';

gulp.task('build', function () {
  var locals;

  try {
    locals = yaml.safeLoad(fs.readFileSync(dataFile, 'utf8'));
  } catch (e) {
    logError(e);
    return;
  }

  // 输出友好格式的HTML
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

gulp.task('watch', function () {
  gulp.watch([jadeFile, dataFile], ['build']);
});

gulp.task('default', ['build', 'watch']);

/**
 * 将错误信息记录到htmlFile，以方便调试
 */
function logError(err) {
  console.log(new Date() + ' - ERROR');
  fs.writeFile(htmlFile, err);
}
