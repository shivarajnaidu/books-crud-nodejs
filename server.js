'use strict';
const config = require('config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = config.get('PORT');
const app = express();

require('./app/db');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(PORT, () => {
    console.log(`Server Listening At Port ${PORT}`);
});