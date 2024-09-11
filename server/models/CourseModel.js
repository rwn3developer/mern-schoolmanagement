const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    course_short_name : {
        type: String,
        required: true
    },
    course_full_name : {
        type: String,
        required: true
    }
})
const course = mongoose.model('course',courseSchema);
module.exports = course;