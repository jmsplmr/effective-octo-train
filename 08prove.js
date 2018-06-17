var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(onRequest).listen(8081);

function onRequest(request, response) {
  var path = url.parse(request.url).path;

  switch (path) {
    case '/home':
      home(response);
      break;
    case '/getData':
      getData(response);
      break;
    default:
      defaultResponse(response);
      break;
  }
}

function home(response) {
  var html = fs.readFileSync('test.html').toString();
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(html);
  console.log('/home');
}

function getData(response) {
  var json = '{"name":"James Palmer","class":"cs313"}';
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(json);
  console.log('/getData');
}

function defaultResponse(response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!\n');
}

console.log('Server running at http://localhost:8081/');