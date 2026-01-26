import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectionDB } from './config/connectionDB.js'
import userRoutes from './Routes/user.routes.js'
import blogRoutes from './Routes/blog.routes.js'
import upload from './Middlewares/multer.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cloudinary from 'cloudinary';

dotenv.config();

//cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app=express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.VITE_FRONT_BASE_URL,
    credentials: true
}));



//api endpoint
app.use('/images', express.static(path.join(__dirname, 'Middlewares', 'uploads')));
app.use('/user',userRoutes)
app.use('/blog',blogRoutes)




connectionDB();
export default app;