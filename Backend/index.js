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
if (
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
) {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}


const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://insight-hub-1ian.vercel.app"
  ],
  credentials: true
}));


let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) return;
  try {
    await connectionDB();
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw error;
  }
};

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    res.status(500).json({ error: "Database connection failed", details: error.message });
  }
});

//api endpoint
app.use('/user', userRoutes)
app.use('/blog', blogRoutes)


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}


export default app;