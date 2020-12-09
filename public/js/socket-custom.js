var socket = io(); //Hace referencia a io en el server.js

// (Escuchar) Para detectar que como cliente me he conectado al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// (Escuchar) Para detectar que he perdido conexión con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// (Enviar) Para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daneil',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// (Escuchar) para escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});