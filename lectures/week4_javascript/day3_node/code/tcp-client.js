var net = require('net');
var client = new net.Socket();
client.connect(5001, '127.0.0.1', function(){
  console.log('Connected to server');
  client.write('Hi baby');
});
client.on('data', function(data){
  if(data.indexOf('love') >= 0){
    client.write('I love everyone. You are all so great');
  }
});
client.on('close', function(){
  console.log('Server closed connection');
});
