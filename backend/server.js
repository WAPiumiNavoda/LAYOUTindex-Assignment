const express = require('express');
const notes = require('./Data/notes')
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db')

const app = express();
dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("API is runing")
})

app.get('/api/category',(req,res)=>{
    res.json(notes)
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT} `));
