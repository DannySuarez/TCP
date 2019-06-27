const { createServer } = require('net');

const server = createServer(sock => {
  console.log('client connected');
  sock.write('hello client');

  sock.on('data', data => {
    console.log('from client', data.toString());
  });
});

server.listen(7890);
