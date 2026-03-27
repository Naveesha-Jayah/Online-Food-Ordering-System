# Order Service

Order Service microservice for the Food Ordering System using Node.js, Express, and MongoDB.

## Features

- Create orders with automatic total amount calculation
- Get all orders
- Get order by ID
- Update order status
- Delete order
- Swagger documentation at `/api-docs`
- Consistent JSON responses

## Project Structure

src/
- config/
- controllers/
- models/
- routes/
- services/
- middleware/
- swagger/
- app.js

Root:
- server.js
- .env

## Setup

1. Install dependencies:
   npm install
2. Configure environment:
   PORT=8083
   MONGO_URI=mongodb://127.0.0.1:27017/orderdb
3. Run:
   npm run dev

## API Base URL

`http://localhost:8083`

## Sample Test Data

Use this sample payload for creating an order:

```json
{
  "userId": "user-123",
  "restaurantId": "restaurant-99",
  "items": [
    { "name": "Chicken Burger", "quantity": 2, "price": 7.5 },
    { "name": "Cola", "quantity": 1, "price": 2 }
  ]
}
```

Expected total amount = 17

## Swagger

Open `http://localhost:8083/api-docs`
