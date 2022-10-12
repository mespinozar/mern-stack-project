import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000
const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://admin05:wVcZitB09nsf0ndT@cluster0.vu5u1uj.mongodb.net/?retryWrites=true&w=majority")
 console.log("Mongo DB connection");

app.get('/',(req, res) => {
    res.send('Hello Work');
});

app.listen(PORT,() =>{
    console.log('Server is running at http://localhost:4000');
});