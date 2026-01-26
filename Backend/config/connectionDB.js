import mongoose from 'mongoose'


export const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log('error to connect to db',error.message)
    }
}