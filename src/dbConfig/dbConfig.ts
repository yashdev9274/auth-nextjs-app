import mongoose from 'mongoose';

export async function connect() {

    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('MongoDB has connected succesfully');
            
        })

        connection.on('error', (err)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })


    } catch (error) {
        console.log('Error connecting to database: ', error);

    }
}