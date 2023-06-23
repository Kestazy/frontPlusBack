require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();

app.use(express.json());

const createNewUser = require('./controlers/usersController')

app.post('/api/users', createNewUser);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})