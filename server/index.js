
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log("User Connected :" + socket.id);

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', `${socket.id} said : ${message}` );   
    });
    
    socket.on("disconnect", () => {
        console.log("User disconnected :" + socket.id);
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
