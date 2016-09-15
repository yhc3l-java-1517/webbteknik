var net = require('net');
var clients = [];

function broadcast(data, currentClient){
  clients.forEach(function(client){
    if(client !== currentClient){
      client.write(data + '\n');
    }
  });
}

net.createServer(function(socket){
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  clients.push(socket);
  socket.write('hej och välkommen till min chat\n');

  socket.on('data', function(data){
    broadcast(socket.name + '>' + data, socket);
  });

  socket.on('end', function(){
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + ' has left the chat');
  });

}).listen(5001);
