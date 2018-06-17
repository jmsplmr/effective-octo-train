var fs = require('fs');

fs.readFile(process.argv[2], callback);

function callback (err, data) {
  var str = data.toString();
  var split = str.split('\n');

  console.log(split.length - 1);
}