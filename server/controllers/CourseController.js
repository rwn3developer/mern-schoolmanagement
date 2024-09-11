const CourseModel = require('../models/CourseModel');

const courseAdd = async(req,res) => {
    try{
        const {course_short_name,course_full_name} = req.body;
        const couse = await  CourseModel.create({
            course_short_name,course_full_name
        });
        return res.status(200).send({
            success : true,
            message : "Course Added Successfully",
            couse
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            error: err
        })
    }
}
const courseView = async(req,res) => {
    try{
        const course = await CourseModel.find({});
        return res.status(200).send({
            success : true,
            message : "course successfully fetch",
            course
        });
    }catch(err){
        return res.status(500).send({
            success: false,
            error: err,
        })
    }
}
const courseDelete = async(req,res) => {
    try{
        const course = await CourseModel.findByIdAndDelete(req.query.id);
        return res.status(200).send({
            success : true,
            message : "course successfully delete",
            course
        });
    }catch(err){
        return res.status(500).send({
            success: false,
            error: err,
        })
    }
}
const courseUpdate = async(req,res) => {
    try{
        const {course_short_name,course_full_name} = req.body;
        const course = await CourseModel.findByIdAndUpdate(req.body.id,{
            course_short_name : course_short_name,
            course_full_name : course_full_name
        });
        return res.status(200).send({
            success : true,
            message : "course successfully update",
        });
    }catch(err){
        return res.status(500).send({
            success: false,
            error: err,
        })
    }
}
module.exports = {
    courseAdd,courseView,courseDelete,courseUpdate
}