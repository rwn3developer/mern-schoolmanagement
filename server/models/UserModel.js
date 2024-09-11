const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    course : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    },
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    guardian  : {
        type: String,
        required: true
    },
    gender  : {
        type: String,
        required: true
    },
    category  : {
        type: String,
        required: true
    },
    nationality  : {
        type: String,
        required: true
    },
    mobile  : {
        type: String,
        required: true
    },
    country  : {
        type: String,
        required: true
    },
    city  : {
        type: String,
        required: true
    },
    email  : {
        type: String,
        required: true
    },
    state  : {
        type: String,
        required: true
    },
    address  : {
        type: String,
        required: true
    },
})
const user = mongoose.model('user',userSchema);
module.exports = user;