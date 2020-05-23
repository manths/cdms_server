const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    enrollmentNo:{
        type:String
    },
    contact:{
        type:String
    },
    password:{
        type:String
    },
    batchId:{
        type:Number
    },
    departId:{
        type:Number
    }
})

module.exports = mongoose.model('studentSchema',studentSchema);