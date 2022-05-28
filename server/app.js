const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const router = require('./router');

const app = express();

//settings
app.set('port', process.argv[2] || 8000);

//middlewares
app.use(cors({ exposedHeaders: 'authorization' }));
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', router);

module.exports = app;