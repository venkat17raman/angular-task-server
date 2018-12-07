'use strict'
const mongoose = require('mongoose');

 const db = mongoose.connect('mongodb://localhost/angulardb', { useNewUrlParser: true })
    .then(() => console.log('connected to database'))
    .catch((error) => console.log(error.message));