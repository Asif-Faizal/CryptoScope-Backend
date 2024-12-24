import { CryptoModel, ICrypto } from '../models/cryptoModel';
import { PaginatedResponse } from '../models/interfaces';

// Add a new crypto
export const addCrypto = async (cryptoData: ICrypto): Promise<ICrypto> => {
    try {
        const newCrypto = new CryptoModel(cryptoData);
        return await newCrypto.save();
    } catch (error) {
        console.error('Error adding crypto:', error);
        throw new Error('Failed to add crypto');
    }
};

// Get crypto list with pagination
export const getCryptoList = async (
    page: number = 1,
    limit: number = 10
): Promise<PaginatedResponse<ICrypto>> => {
    const skip = (page - 1) * limit;

    try {
        const [cryptos, total] = await Promise.all([
            CryptoModel.find()
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .exec(),
            CryptoModel.countDocuments()
        ]);

        return {
            data: cryptos,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        };
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        throw new Error('Error fetching crypto data');
    }
};
