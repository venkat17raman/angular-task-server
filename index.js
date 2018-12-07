
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());
const PORT = 3000;
const jwt = require('jsonwebtoken');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const userRoutes = require('./routes/users')
const server = require('./database');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(signupRoutes)
app.use(loginRoutes)
app.use('', userRoutes)

app.listen(PORT, () => {
    console.log(`Server Started At port ${PORT}`)
})
