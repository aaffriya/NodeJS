// This file help to connect to the database and perfrom actions to the Database

const mongoose = require('mongoose') // import mongoose

mongoose.connect('mongodb://localhost:27017/employee') // make connection here
    .then(() => console.log('Connect Successful')) // if no error in connection
    .catch(() => console.log('Connection Faild')) // if error in connection

require('./employeeModel')

