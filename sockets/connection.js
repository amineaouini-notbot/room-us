
const connection = (io) => {
    io.on("connection" ,socket =>{
        console.log('a client connected')
        require('./message')(socket) // setup socket messages events
    })
    io.on('disconnect', socket => {
        console.log('a client has disconnected')
    })
    
    io.listen(4000)
}

module.exports = connection