var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');

var dataFile = 'data.js';
var htmlFile = 'index.html';
var jadeFile = 'index.jade';

// 将错误信息记录到htmlFile，以方便调试
function logError(err) {
  console.log(new Date() + ' - ERROR');
  fs.writeFile(htmlFile, err);
}

gulp.task('build', function () {
  // 尝试重新载入data.js
  try {
    delete require.cache[require.resolve('./' + dataFile)];
    var data = require('./' + dataFile);
  } catch (err) {
    logError(err);
    return;
  }

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

      console.log(new Date() + ' - SAVED');
    });
  });
});

gulp.task('watch', function () {
  gulp.watch([jadeFile, dataFile], ['build']);
});

gulp.task('default', ['build', 'watch']);
