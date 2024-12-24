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

export const getAllCryptoDetails = async (): Promise<Partial<ICryptoDetails>[]> => {
    return await CryptoDetails.find({}, 'name price description isRedOrGreen _24hrValue image');
};

export const getPaginatedCryptoDetails = async (page: number, limit: number): Promise<{ data: Partial<ICryptoDetails>[]; total: number; }> => {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        CryptoDetails.find({}, 'name price description isRedOrGreen _24hrValue image')
            .skip(skip)
            .limit(limit),
        CryptoDetails.countDocuments()
    ]);
    return { data, total };
};