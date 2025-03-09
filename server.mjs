import express from 'express';
import 'dotenv/config';
import connectDB from './config/database.mjs';
import mongoose from 'mongoose';
import sendEmail from './routes/emailRoute.mjs';

// Connect to the MongoDB database
connectDB();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Email Security');
});

app.use('/emailer', sendEmail);

mongoose.connection.once('open', () => {
    console.log('MongoDB connected...');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`);
    });
});