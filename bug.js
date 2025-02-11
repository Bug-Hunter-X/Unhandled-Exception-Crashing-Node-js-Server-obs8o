const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon error:  Unexpected server crash due to unhandled exception within the request listener.

//Example of unhandled exception:  Attempting to access a property of a null or undefined object.

//Illustrative code (will cause server crash):

const requestListener = function (req, res) {
  res.writeHead(200);
  // This will throw an error because req.myNonExistentProperty is undefined
  console.log(req.myNonExistentProperty.toUpperCase()); 
  res.end('Hello, World!');
};