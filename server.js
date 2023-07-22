import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import path from 'path';

//Configure Env
dotenv.config();


//Database Configure
connectDB();


//Rest Object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

//Rest Api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
});


//Port
const PORT = Number(process.env.PORT) || 8001;


//Run Listen
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.dev_mode} mode on port ${PORT}`);
});
