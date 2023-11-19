const connection = (io) => {
    io.on("connection" ,socket =>{
        console.log('a client connected')
    })
    io.on('disconnect', socket => {
        console.log('a client has disconnected')
    })
}

module.exports = connection