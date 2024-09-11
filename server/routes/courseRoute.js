const express = require('express');


const routes = express.Router();

const { courseAdd , courseView , courseDelete , courseUpdate } = require('../controllers/CourseController');

routes.post('/courseAdd',courseAdd)
routes.get('/courseView',courseView)
routes.delete('/courseDelete',courseDelete);
routes.put('/courseUpdate',courseUpdate)



module.exports = routes;