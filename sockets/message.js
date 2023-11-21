let Messages = require('../models/messageSchema')
const messages = (socket) => {
    socket.on('send-message', async (msg)=>{
        let newMsg = new Messages(msg)
        //console.log(newMsg)
        await newMsg.save()
        .then((savedMsg)=>{
            socket.emit('send-message', savedMsg)
        })
        .catch(err =>{throw err})
    })
}

module.exports = messages;