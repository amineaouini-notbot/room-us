let Messages = require('../models/messageSchema')
const messages = (socket) => {
    socket.on('send-message', async (msg)=>{
        let newMsg = new Messages(msg)
        
        await newMsg.save()
        .then((savedMsg)=>{
            socket.emit('recieve-message', newMsg)
        })
        .catch(err =>{throw err})
    })
}

module.exports = messages;