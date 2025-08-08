import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected' , () => {
            console.log("Database Connected")
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/quickblog_ai`)
    }catch(error){
        console.log(error);
    }
}

export default connectDB;