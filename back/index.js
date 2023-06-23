require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();

app.use(express.json());

const createNewUser = require('./controlers/usersController')

const {
    setTransaction,
    getTransactions
} = require('./controlers/transtactionsController')

app.post('/api/users', createNewUser);
app.post('/api/transaction', setTransaction);
app.get('/api/transactions', getTransactions);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})