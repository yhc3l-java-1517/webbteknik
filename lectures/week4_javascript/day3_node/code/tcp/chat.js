var net = require('net');

var client = new net.Socket();
client.connect(5001, '127.0.0.1', function() {
               console.log('Connected');
               client.write('Hello, server! Love, Telia.');
               });

client.on('data', function(data) {
          console.log('Received: ' + data);
          if(data.indexOf('telia') >= 0){
          client.write('I heard telia was amazing');
          }
          //client.destroy(); // kill client after server's response
          });

client.on('close', function() {
          console.log('Connection closed');
          });