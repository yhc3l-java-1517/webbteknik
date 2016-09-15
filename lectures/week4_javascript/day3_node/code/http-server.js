var http = require('http');
var counter = 0;
http.createServer(function(request, response){
  counter++;
  var headers = request.headers;
  var url = request.url;

  console.log('Number of connections ' + counter);
  console.log(JSON.stringify(headers));
  console.log(url);
  if(request.method === 'POST'){
    request.pipe(response);
  } else {
    response.write('something else');
    response.end();
  }

}).listen(8001);
