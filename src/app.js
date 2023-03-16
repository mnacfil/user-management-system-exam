require('dotenv').config();

const express = require('express');
const process = require('process')

const userRoute = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRoute);

// testing route
app.get('/', (req, res) => {
    res.json({message: "Hello world"})
})

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening of port : ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()