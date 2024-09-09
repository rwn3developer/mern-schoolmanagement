const express = require('express')

const port = 8000;

const app = express();

const db = require('./config/db');

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);

})