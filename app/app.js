
const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const li = document.createElement('li');
    li.innerHTML = text;
    document.querySelector('ul').appendChild(li);

});

document.querySelector('button').onclick = () => {

    let input = document.querySelector('input');
    socket.emit('message', input.value);
    input.value = '';
    
}

// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }