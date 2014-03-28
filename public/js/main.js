!(function() {
  
  var socket = io.connect('http://localhost');
  
  socket.on('board connected', function(data) {
    
    console.log(data, 'woohoo');
    
  });
  
  $('#piezo-button').on('click', function(ev) {
    
    ev.preventDefault();
    
    socket.emit('button pressed', {my: 'lord'});
  });
}).call(this);