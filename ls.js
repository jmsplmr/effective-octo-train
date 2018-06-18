var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var target = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) return console.log(err);
  files.forEach(file => {
    if (path.extname(file) === target) {
      console.log(file);
    }
  });
});