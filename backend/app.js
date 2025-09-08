import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
// ... other imports
import authRoutes from './routes/authRoutes.js'; // Import the routes

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
// ... after app.use(cors());
app.use('/api/auth', authRoutes); // Mount the routes
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
app.get('/', (req, res) => {
res.send('API is running...');
});

app.listen(3202, console.log(`Server running in ${process.env.NODE_ENV} mode on port 3201`));