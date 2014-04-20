var fs = require('fs');
var jade = require('jade');
var chokidar = require('chokidar');
var data = require('./data.js');

var watcher = chokidar.watch(['index.jade', 'data.js'], {persistent: true});
console.log('Start watching...');

watcher.on('change', function (path) {
  // 重新导入data.js
  delete require.cache[require.resolve('./data.js')];
  data = require('./data.js');

  jade.renderFile('index.jade', data, function (err, html) {
    if (err) {
      console.log(new Date() + ' - ERROR');
      fs.writeFile('index.html', err);
    }

    fs.writeFile('index.html', html, function (err) {
      console.log(new Date() + ' - SAVED');

      if (err) {
        console.log(new Date() + ' - ERROR');
        fs.writeFile('index.html', err);
      }
    });
  });
});
