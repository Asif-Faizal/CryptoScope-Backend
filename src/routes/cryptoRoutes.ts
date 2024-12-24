import express from 'express';
import { createCrypto, getCryptos } from '../controllers/cryptoController';
import { createCryptoDetails, getCryptoDetails } from '../controllers/cryptoDetailsController';

const router = express.Router();

// Route to add a new cryptocurrency
router.post('/cryptos', createCrypto);

// Route to fetch paginated list of cryptocurrencies
router.get('/cryptos', getCryptos);

// Route to fetch Crypto details by ID
router.get('/cryptos/:id', getCryptoDetails);

// Route to create crypto with details
router.post('/cryptosDetails', createCryptoDetails);

export default router;
