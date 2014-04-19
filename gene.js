var fs = require('fs');
var jade = require('jade');
var data = require('./data.js');

jade.renderFile('index.jade', data, function (err, html) {
  if (err) throw err;

  fs.writeFile('index.html', html, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});