import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, //selection of the server
            useNewUrlParser: true, //for give the possibility to go back
    // useCreateIndex: true, // ensures that you are using the new function calls.
        })  

        console.log(`MongoDB connected : ${conn.connection.host}`.cyan.bold.underline)
    }catch(error){
        console.error(`error ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB