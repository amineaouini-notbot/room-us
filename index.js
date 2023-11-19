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


const port = 5000;

const server = http.Server(app)
const io = process.env.NODE_ENV === "production" ?
  new Server(server) :
  new Server({
    cors: {
      origin: "http://localhost:3000"
    }
  })

require('./sockets/connection.js')(io, port)

server.listen(port, () => { // run server
  console.log(`Server is running on port ${port}`);
});