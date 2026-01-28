import mongoose from 'mongoose';

export const connectionDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            
            serverSelectionTimeoutMS: 5000, 
            bufferCommands: false,          
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error; 
    }
};