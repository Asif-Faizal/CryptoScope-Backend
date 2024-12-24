import mongoose, { Schema, Document } from 'mongoose';

// Define the interface
export interface ICrypto extends Document {
    name: string;
    price: number;
    description: string;
    isRedOrGreen: boolean;
    _24hrValue: number;
    image: string;
}

// Schema definition for the crypto model
const CryptoSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isRedOrGreen: { type: Boolean, required: true },
    _24hrValue: { type: Number, required: true },
    image: { type: String, default: '' },
});

// Named export for both the model and the interface
export const CryptoModel = mongoose.models.Crypto || mongoose.model<ICrypto>('Crypto', CryptoSchema);