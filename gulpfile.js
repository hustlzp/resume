var fs = require('fs');
var jade = require('jade');
var gulp = require('gulp');

var data_file = 'data.js';
var html_file = 'index.html';
var jade_file = 'index.jade';

gulp.task('build', function () {
  gulp.watch([jade_file, data_file], {}, function () {
    // 重新载入data.js
    delete require.cache[require.resolve('./' + data_file)];
    var data = require('./' + data_file);

    jade.renderFile(jade_file, data, function (err, html) {
      if (err) {
        console.log(new Date() + ' - ERROR');
        fs.writeFile(html_file, err);
        return;
      }

      fs.writeFile(html_file, html, function (err) {
        if (err) {
          console.log(new Date() + ' - ERROR');
          fs.writeFile(html_file, err);
          return;
        }

        console.log(new Date() + ' - SAVED');
      });
    });
  });
});

gulp.task('default', ['build']);
