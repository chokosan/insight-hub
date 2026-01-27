import mongoose from 'mongoose'


export const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        process.exit(1);
    }
}