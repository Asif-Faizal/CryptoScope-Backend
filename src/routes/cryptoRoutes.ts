import express from 'express';
import { createCryptoDetails, getCryptoDetails, fetchAllCryptoDetails,  fetchPaginatedCryptoDetails} from '../controllers/cryptoDetailsController';

const router = express.Router();

// Route to fetch paginated list of cryptocurrencies
router.get('/cryptos', fetchAllCryptoDetails);

// Route to fetch paginated list of cryptocurrencies
router.get('/cryptosPage', fetchPaginatedCryptoDetails);

// Route to fetch Crypto details by ID
router.get('/cryptos/:id', getCryptoDetails);

// Route to create crypto with details
router.post('/cryptosDetails', createCryptoDetails);

export default router;
