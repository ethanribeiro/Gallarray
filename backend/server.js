///////////////////////
// DEPENDENCIES
///////////////////////
require('dotenv').config();

require('./config/database');

const express = require('express');
const exhibitRouter = require('./routes/exhibit');

const cors = require('cors');
const morgan = require('morgan');

///////////////////////
// APP CONFIG
///////////////////////
const { PORT } = process.env

const app = express()
// console.log(PORT);

///////////////////////
// MIDDLEWARE
///////////////////////

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

///////////////////////
// ROUTER MIDDLEWARE
///////////////////////
app.use('/exhibit', exhibitRouter);

app.get('/', (req, res)=>{
    res.send('hello world!');
});

///////////////////////
// SERVER
///////////////////////

app.listen(PORT, ()=>console.log(`Listen on port: ${PORT}`));