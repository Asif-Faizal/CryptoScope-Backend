import CryptoDetails, { ICryptoDetails } from '../models/cryptoDetailsModel';

// Add a new crypto with details
export const addCryptoDetails = async (cryptoData: ICryptoDetails) => {
    const crypto = new CryptoDetails(cryptoData);
    return await crypto.save();
};

// Get crypto details by ID
export const getCryptoDetailsById = async (id: string): Promise<ICryptoDetails | null> => {
    return await CryptoDetails.findById(id);
};