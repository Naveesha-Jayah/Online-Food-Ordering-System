# Payment Microservice

A complete, production-ready Payment Microservice built with Node.js, Express, and MongoDB (Mongoose).

## Features

- RESTful API architecture
- MongoDB integration with Mongoose
- Global error handling
- Environment variable configuration
- Swagger API documentation
- CORS enabled
- Input validation

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB running locally or a MongoDB URI

## Installation

1. Navigate to the project folder.
2. Install dependencies:

```bash
npm install
```

3. Ensure you have MongoDB running locally on `mongodb://127.0.0.1:27017/paymentdb` or update the `.env` file accordingly.

## Environment Variables

Create a `.env` file in the root directory (if not already present) with the following values:

```env
PORT=8084
MONGO_URI=mongodb://127.0.0.1:27017/paymentdb
```

## Running the Server

### Development mode
Runs the application with nodemon to automatically restart the server on file changes.
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The server will start on `http://localhost:8084`.

## API Endpoints

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/payments` | Create a new payment |
| GET | `/api/payments` | Get all payments |
| GET | `/api/payments/:id` | Get single payment by ID |
| PUT | `/api/payments/:id` | Update payment status only |

## Swagger Documentation

Swagger UI is available at:
[http://localhost:8084/api-docs](http://localhost:8084/api-docs)

You can explore and test all API endpoints interactively via the Swagger documentation.
