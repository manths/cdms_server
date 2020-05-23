const express = require('express');
const router = express.Router()
const cors = require('cors');

const facultySchema = require('../model/facPassword')
const studentSchema = require('../model/studPassword')

router.use(cors())
router.use(express.json())

router.get('/faculty/:facId', async (req, res) => {
    const facPass = await facultySchema.findById(req.params.facId);
    console.log(facPass)
    res.json(facPass)
})

router.get('/student/:studId', async (req, res) => {
    const studPass = await studentSchema.findById(req.params.studId);
    console.log(studPass)
    res.json(studPass)
})

router.patch('/faculty/:facId', async (req, res) => {
    const facPass = await facultySchema.updateOne(
        { _id: req.params.facId },
        { $set: { password: req.body.password } });
    console.log(facPass)
    res.json(facPass)
})

router.patch('/student/:studId', async (req, res) => {
    const studPass = await studentSchema.updateOne(
        { _id: req.params.studId },
        { $set: { password: req.body.password } }
    );
    console.log(studPass)
    res.json(studPass)
})

router.delete('/faculty/:facId', async (req, res) => {
    const facPass = await facultySchema.remove({ _id: req.params.facId });
    console.log(facPass)
    res.json(facPass)
})

router.delete('/student/:studId', async (req, res) => {
    const studPass = await studentSchema.remove({ _id: req.params.studId });
    console.log(studPass)
    res.json(studPass)
})

module.exports = router;