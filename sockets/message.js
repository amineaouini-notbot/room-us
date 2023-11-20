const messages = (socket) => {
    socket.on('send-message', (msg)=>{
        console.log(msg)
        socket.emit('send-message', msg)
    })
}

module.exports = messages;