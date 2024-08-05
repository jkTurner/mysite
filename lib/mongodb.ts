import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const ConnectMongo = async () => {
    if (connection.isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGO_URI is not defined in environment variables');
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        
        connection.isConnected = db.connections[0].readyState;

        if (connection.isConnected === 1) {
            console.log('Connected to MongoDB');
        } else {
            console.log('Failed to connect to MongoDB');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        throw new Error('Could not connect to MongoDB');
    }
};

export default ConnectMongo;
