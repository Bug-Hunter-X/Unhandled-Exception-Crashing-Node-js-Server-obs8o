const http = require('http');

const requestListener = function (req, res) {
  try {
    res.writeHead(200);
    //This line will not throw error because it is handled
    console.log(req.myNonExistentProperty?.toUpperCase()); //Optional chaining to handle potential undefined safely 
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);