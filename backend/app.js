import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
app.get('/', (req, res) => {
res.send('API is running...');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));