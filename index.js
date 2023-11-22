require('dotenv').config()
const http = require('http')
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose')
const {Server} = require('socket.io')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1/room-us') // connect to mongoDB
.then(()=>console.log('DB connected')) 
.catch(err => {throw err}) // throw error if there's any


app.use(cors())
// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/messages', require('./routes/messages.js'))


const port = 5000;

const server = http.Server(app)
const io = process.env.NODE_ENV === "production" ?
  new Server(server) : // if env in production setup socket
  new Server({ // if in dev setup socket to react's front
    cors: {
      origin: "http://localhost:3000"
    }
  })

require('./sockets/connection.js')(io) // make socket connection

server.listen(port, () => { // run server
  console.log(`Server is running on port ${port}`);
});