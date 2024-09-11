const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/course', require('./courseRoute'));


module.exports = routes;