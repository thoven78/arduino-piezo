'use strict';

var five = require('johnny-five'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    sockets = require('socket.io').listen(server),
    board = new five.Board(),
    piezo,
    rootPath = __dirname + '/public';

app.use(express.static(__dirname + '/public'));

board.on('ready', function() {

  piezo = new five.Piezo(3);
});

sockets.on('connection', function(socket) {
  
  socket.emit('board connected', {port: 13});
  
  socket.on('button pressed', function(data) {
    console.log(data);
    piezo.song('cdfda ag cdfdg gf ', '111111442111111442');
  });
  
});

app.get('/', function(req, res) {
  res.sendfile(rootPath + '/index.html');
});

app.get('*', function(req, res) {
  res.sendfile(rootPath + '404.html');
});

server.listen(3000, function() {
  console.log('Server is listening on port', 3000);
});
