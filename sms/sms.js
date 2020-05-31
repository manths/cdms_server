const express = require('express');
const router = express.Router()
const cors = require('cors');

<<<<<<< HEAD
require('dotenv').config();

const accountSid = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
=======
const accountSid = ''
const authToken = ''
>>>>>>> e627658020f26fcc395eb538a6b1bcd948ab6268
const client = require('twilio')(accountSid, authToken)

router.use(cors())
router.use(express.json())

router.get('/:number/:message', async (req, res) => {
    try{
        const msg = await client.messages.create({
            body: req.params.message,
            from: '+12056712975',
            to: '+91' + req.params.number
        })
        res.json(msg)
    }catch(e){
        res.json({message:e})
    }
})

module.exports = router;
