# Delivery Service

This is the Delivery Service microservice for the Online Food Ordering System.
It provides REST APIs to manage deliveries.

## Features
- Create Delivery
- Get Deliveries
- Get Delivery by ID
- Update Delivery
- Delete Delivery
- Update Delivery Status
- Assign Delivery Person
- Get Deliveries by Status
- Get Delivery by Order ID
- Swagger API Documentation

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Swagger-ui-express & Swagger-jsdoc

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Setup MongoDB (Runs locally on `mongodb://127.0.0.1:27017/deliverydb` by default in `.env`)

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/delivery` | Create delivery |
| GET | `/api/delivery` | Get all deliveries |
| GET | `/api/delivery/:id` | Get delivery by ID |
| PUT | `/api/delivery/:id` | Update delivery |
| DELETE | `/api/delivery/:id` | Delete delivery |
| PUT | `/api/delivery/:id/status` | Update delivery status |
| PUT | `/api/delivery/:id/person` | Assign delivery person |
| GET | `/api/delivery/status/:status` | Get deliveries by status |
| GET | `/api/delivery/order/:orderId` | Get delivery by order ID |

Swagger is available at `http://localhost:8085/api-docs`
