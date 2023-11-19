const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/room-us')
.then(()=>console.log('DB connected'))
.catch(err => {throw err})

// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 5000;
app.listen(port, () => { // run server
  console.log(`Server is running on port ${port}`);
});