const { io } = require('../server'); // Para hacer referencia al archivo en el que vamos a usar las funciones de io en este caso

// Para detectar que un cliente se ha conectado al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Para enviar un mensaje al cliente
    // enviarMensaje es el nombre que le asignamos al "evento"
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicació'
    });

    // Para detectar cuando un usuario se ha desconectado del servidor
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Para escuchar al cliente
    // Para recibor el objeto o información que recibimos del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // Con broadcast hacemos que el mensaje se envíe a todos los usuarios

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!'
        //     });
        // }
    });
});