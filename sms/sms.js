const express = require('express');
const router = express.Router()
const cors = require('cors');

require('dotenv').config();

const accountSid = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

router.use(cors())
router.use(express.json())

router.get('/:number/:message', async (req, res) => {
    try{
        const msg = await client.messages.create({
            body: req.params.message,
            from: '+12082037809',
            to: '+91' + req.params.number
        })
        res.json(msg)
    }catch(e){
        res.json({message:e})
    }
})

module.exports = router;
