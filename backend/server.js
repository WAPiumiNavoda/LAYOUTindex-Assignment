const express = require('express');
const notes = require('./Data/notes')
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db')
const userRoutes = require ('./routes/userRouter');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("API is runing")
// })

// app.get('/api/category',(req,res)=>{
//     res.json(notes)
// })

app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT} `));
