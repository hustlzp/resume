var fs = require('fs');
var jade = require('jade');
var data = require('./data.js');
var gulp = require('gulp');

var path = ['index.jade', 'data.js'];

gulp.task('build', function () {
  gulp.watch(path, {}, function () {
    // 重新导入data.js
    delete require.cache[require.resolve('./data.js')];
    data = require('./data.js');

    jade.renderFile('index.jade', data, function (err, html) {
      if (err) {
        console.log(new Date() + ' - ERROR');
        fs.writeFile('index.html', err);
      } else {
        fs.writeFile('index.html', html, function (err) {
          if (err) {
            console.log(new Date() + ' - ERROR');
            fs.writeFile('index.html', err);
          } else {
            console.log(new Date() + ' - SAVED');
          }
        });
      }
    });
  });
});

gulp.task('default', ['build']);
