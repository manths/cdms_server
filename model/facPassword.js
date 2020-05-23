const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:String
    },
    password:{
        type:String
    },
    designation:{
        type:String
    },
    expQl:{
        type:String
    }
})

module.exports = mongoose.model('facultySchema',facultySchema);