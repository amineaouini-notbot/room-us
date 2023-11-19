const http = require('http')
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose')
const {Server} = require('socket.io')
mongoose.connect('mongodb://127.0.0.1/room-us')
.then(()=>console.log('DB connected'))
.catch(err => {throw err})

// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const server = http.Server(app)
const io = new Server(server)

require('./sockets/connection.js')(io)

const port = 5000;
server.listen(port, () => { // run server
  console.log(`Server is running on port ${port}`);
});