const express = require('express')
const router = express.Router()
const Messages = require('../models/messageSchema')

router.get('/retrieve/all', (req, res)=>{
    Messages.find({})
    .then(messages => res.status(200).send({messages}))
    .catch(err => res.status(500).send({res: 'error accured!!', error: err}))
})

module.exports = router;