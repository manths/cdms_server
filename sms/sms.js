const express = require('express');
const router = express.Router()
const cors = require('cors');

const accountSid = 'AC93be291c86ed437a550544b40f482687'
const authToken = '37Ark2oxWAL-vKHo5NUmDWqjijWHlxhB3-uRvsqg'
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
