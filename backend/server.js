const express = require('express');
const notes = require('./Data/notes')
const dotenv = require('dotenv');

const app = express();

app.get("/",(req,res)=>{
    res.send("API is runing")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT} `));
