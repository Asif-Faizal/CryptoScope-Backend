# CryptoScope API


## API Endpoints

### Add Crypto
*Endpoint:* POST /api/cryptos
*Description:* Adds a new cryptocurrency to the database.
*Request Body (JSON):*
```json
{
    "name": "Bitcoin",
    "price": 50000,
    "description": "Bitcoin is a decentralized digital currency.",
    "isRedOrGreen": true,
    "_24hrValue": 0.5,
    "image": "https://example.com/bitcoin.png"
}
```
*Response (Success):*
```json
{
    "_id": "605c72ef1532071f204f0d7b",
    "name": "Bitcoin",
    "price": 50000,
    "description": "Bitcoin is a decentralized digital currency.",
    "isRedOrGreen": true,
    "_24hrValue": 0.5,
    "image": "https://example.com/bitcoin.png",
    "__v": 0
}
```
*Response (Error):*
```json
{
    "message": "Failed to add crypto"
}
```

### Get Crypto List (With Pagination)
*Endpoint:* GET /api/cryptos
*Description:* Retrieves a paginated list of cryptocurrencies.
*Query Parameters:*
    page: The page number (default: 1).
    limit: The number of results per page (default: 10).
*Response (Success):*
```json
{
    "data": [
        {
            "_id": "605c72ef1532071f204f0d7b",
            "name": "Bitcoin",
            "price": 50000,
            "description": "Bitcoin is a decentralized digital currency.",
            "isRedOrGreen": true,
            "_24hrValue": 0.5,
            "image": "https://example.com/bitcoin.png"
        },
        "..."
    ],
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
}
```

### Add Crypto Details (Including Weekly Data)
*Endpoint:* POST /api/cryptos/details
*Description:* Adds detailed information for a specific cryptocurrency, including weekly price data.
*Request Body (JSON):*
```json
{
    "name": "Bitcoin",
    "price": 50000,
    "description": "Bitcoin is a decentralized digital currency.",
    "isRedOrGreen": true,
    "_24hrValue": 0.5,
    "image": "https://example.com/bitcoin.png",
    "weeklyData": [
        { "date": "2024-12-01", "price": 48000 },
        { "date": "2024-12-02", "price": 48500 },
        { "date": "2024-12-03", "price": 49000 },
        { "date": "2024-12-04", "price": 49500 },
        { "date": "2024-12-05", "price": 50000 },
        { "date": "2024-12-06", "price": 50500 },
        { "date": "2024-12-07", "price": 51000 }
    ]
}
```
*Response (Success):*
```json
{
    "_id": "605c72ef1532071f204f0d7b",
    "name": "Bitcoin",
    "price": 50000,
    "description": "Bitcoin is a decentralized digital currency.",
    "isRedOrGreen": true,
    "_24hrValue": 0.5,
    "image": "https://example.com/bitcoin.png",
    "weeklyData": [
        { "date": "2024-12-01", "price": 48000 },
        { "date": "2024-12-02", "price": 48500 },
        { "date": "2024-12-03", "price": 49000 },
        { "date": "2024-12-04", "price": 49500 },
        { "date": "2024-12-05", "price": 50000 },
        { "date": "2024-12-06", "price": 50500 },
        { "date": "2024-12-07", "price": 51000 }
    ]
}
```

### Get Crypto Details by ID
*Endpoint:* GET /api/cryptos/details/:id
*Description:* Retrieves the details of a specific cryptocurrency by its ID.
*Response (Success):*
```json
{
    "_id": "605c72ef1532071f204f0d7b",
    "name": "Bitcoin",
    "price": 50000,
    "description": "Bitcoin is a decentralized digital currency.",
    "isRedOrGreen": true,
    "_24hrValue": 0.5,
    "image": "https://example.com/bitcoin.png",
    "weeklyData": [
        { "date": "2024-12-01", "price": 48000 },
        { "date": "2024-12-02", "price": 48500 },
        { "date": "2024-12-03", "price": 49000 },
        { "date": "2024-12-04", "price": 49500 },
        { "date": "2024-12-05", "price": 50000 },
        { "date": "2024-12-06", "price": 50500 },
        { "date": "2024-12-07", "price": 51000 }
    ]
}
```
*Response (Error):*
```json
{
    "message": "Crypto not found"
}
```

### Error Handling
The API returns standardized error messages with appropriate HTTP status codes:

*201* Added: Added to database
*400* Bad Request: Invalid input or missing fields.
*404* Not Found: The requested resource (e.g., crypto or crypto details) was not found.
*500* Internal Server Error: Server error occurred while processing the request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.