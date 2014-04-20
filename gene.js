var fs = require('fs');
var chokidar = require('chokidar');
var jade = require('jade');
var data = require('./data.js');

console.log('Start watching file...');

var watcher = chokidar.watch(['index.jade', 'data.js'], {persistent: true});

watcher.on('change', function (path) {
  delete require.cache[require.resolve('./data.js')];
  data = require('./data.js');
  jade.renderFile('index.jade', data, function (err, html) {
    if (err) {
      console.log(new Date() + ' ERROR');
      fs.writeFile('index.html', err);
    }

    fs.writeFile('index.html', html, function (err) {
      console.log(new Date() + ' SAVED');
      if (err) {
        console.log(new Date() + ' ERROR');
        fs.writeFile('index.html', err);
      }
    });
  });
});
