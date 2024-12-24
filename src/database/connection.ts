import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Cluster59727:b3NNRG9QSkRY@cluster59727.gejn6.mongodb.net/crypto_scope', {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
          });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};
