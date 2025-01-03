import { Request, Response } from 'express';
import { addCryptoDetails, getCryptoDetailsById, getAllCryptoDetails, getPaginatedCryptoDetails } from '../services/cryptoDetailsService';

// Add a new cryptocurrency
export const createCryptoDetails = async (req: Request, res: Response) => {
    try {
        const cryptoData = req.body;
        const newCrypto = await addCryptoDetails(cryptoData);
        res.status(201).json({
            success: true,
            data: newCrypto
        });
    } catch (error) {
        console.error('Error adding crypto:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to add crypto'
        });
    }
};

// Get a cryptocurrency by ID
export const getCryptoDetails = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const crypto = await getCryptoDetailsById(id);
        if (!crypto) {
            res.status(404).json({
                success: false,
                message: 'Crypto not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: crypto,
        });
    } catch (error) {
        console.error('Error fetching crypto details:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch crypto details',
        });
    }
};

export const fetchAllCryptoDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const cryptos = await getAllCryptoDetails();
        res.status(200).json({
            success: true,
            data: cryptos,
        });
    } catch (error) {
        console.error('Error fetching all crypto details:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch crypto details',
        });
    }
};

export const fetchPaginatedCryptoDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { data, total } = await getPaginatedCryptoDetails(page, limit);

        res.status(200).json({
            success: true,
            data,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            },
        });
    } catch (error) {
        console.error('Error fetching paginated crypto details:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch crypto details',
        });
    }
};
