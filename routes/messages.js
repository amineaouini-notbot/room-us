const express = require('express')
const router = express.Router()
const Messages = require('../models/messageSchema')

router.get('/retrieve/all', (req, res)=>{
    Messages.find({}, (err, messages)=>{
        if(err){ res.status(500).send({res: 'error accured!!', error: err})}
        res.status(200).send({messages})
    })
})

module.exports = router;