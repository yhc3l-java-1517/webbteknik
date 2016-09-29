var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8080);
console.log('Todo webservice started on port 8080');
