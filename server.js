//add packeges
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const router = require('./routs/routs');
const sms = require('./sms/sms')

const facultySchema = require('./model/facPassword')
const studentSchema = require('./model/studPassword')

app.use('/find', router)
app.use('/sms', sms)

app.use(cors())
app.use(express.json())
require('http');

//litsen on post 
app.listen(5000)

//home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

//rout faculty
app.get('/faculty', async (req, res) => {
    const facPass = await facultySchema.find();
    res.json(facPass)
})

app.post('/faculty', async (req, res) => {
    const facPass = new facultySchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        designation: req.body.designation,
        expQl: req.body.expQl,
    })
    console.log(facPass)
    try {
        const savedPass = await facPass.save();
        res.json(savedPass)
    } catch (e) {
        res.json({ message: e })
    }
})


//rout students
app.get('/student', async (req, res) => {
    const studPass = await studentSchema.find();
    res.json(studPass)
})

app.post('/student', async (req, res) => {
    const studPass = new studentSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        enrollmentNo: req.body.enrollmentNo,
        contact: req.body.contact,
        password: req.body.password,
        batchId: req.body.batchId,
        departId: req.body.departId,
    })
    console.log(studPass)
    try {
        const savedPass = await studPass.save();
        res.json(savedPass)
    } catch (e) {
        res.json({ message: e })
    }
})

//connection with mongoDB
mongoose.connect('mongodb://localhost/cdms', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
    .on('error', (error) => console.log(error))
    .once('open', () => console.log('connected'))
