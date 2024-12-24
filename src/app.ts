import express from 'express';
import cryptoRoutes from './routes/cryptoRoutes';
import { connectDB } from './database/connection';

const app = express();

app.use(express.json()); // For parsing application/json

// Use cryptoRoutes for handling '/cryptos' requests
app.use('/api', cryptoRoutes);

connectDB().then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  }).catch((err: any) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
