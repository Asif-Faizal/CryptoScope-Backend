import { Request, Response } from 'express';
import { addCrypto, getCryptoList } from '../services/cryptoService';
import { ICrypto } from '../models/cryptoModel';

// Create a new crypto
export const createCrypto = async (req: Request, res: Response): Promise<void> => {
    const cryptoData: ICrypto = req.body;
    
    try {
        const newCrypto = await addCrypto(cryptoData);
        res.status(201).json({
            success: true,
            data: newCrypto,
        });
    } catch (error: unknown) {
        console.error('Error adding crypto:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to add crypto',
        });
    }
};

// Get a paginated list of cryptos
export const getCryptos = async (req: Request, res: Response): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // Ensure positive integers for pagination
    if (page < 1 || limit < 1) {
        res.status(400).json({
            success: false,
            message: 'Page and limit must be positive numbers',
        });
        return;
    }

    try {
        const result = await getCryptoList(page, limit);
        res.status(200).json({
            success: true,
            ...result,
        });
    } catch (error: unknown) {
        console.error('Error fetching crypto list:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch crypto data',
        });
    }
};
