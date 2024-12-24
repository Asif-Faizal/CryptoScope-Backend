import mongoose, { Schema, Document } from 'mongoose';

// Define the interface
export interface ICryptoDetails extends Document {
    name: string;
    price: number;
    description: string;
    isRedOrGreen: boolean;
    _24hrValue: number;
    image: string;
    weeklyData: { date: string; price: number }[];
}

// Schema definition
const CryptoDetailsSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isRedOrGreen: { type: Boolean, required: true },
    _24hrValue: { type: Number, required: true },
    image: { type: String, default: '' },
    weeklyData: [
        {
            date: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
});

// Export the model
const CryptoDetails =
    mongoose.models.CryptoDetails ||
    mongoose.model<ICryptoDetails>('CryptoDetails', CryptoDetailsSchema);

export default CryptoDetails;
