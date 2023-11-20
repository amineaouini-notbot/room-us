
const connection = (io) => {
    io.on("connection" ,socket =>{
        console.log('a client connected')
        require('./message')(socket)
    })
    io.on('disconnect', socket => {
        console.log('a client has disconnected')
    })
    //io.on('send-message', data => console.log(11))
    io.listen(4000)
}

module.exports = connection