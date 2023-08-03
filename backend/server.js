const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const formRouter=require('./form');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri);

const connection = mongoose.connection;
try {
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
} catch (e) {
    console.log("Failed connection");
}

app.use('/form',formRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})