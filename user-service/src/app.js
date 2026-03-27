const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const userRoutes = require('./routes/userRoutes');

const app = express();

/**
 * Express Middleware Setup
 */
app.use(cors());
app.use(express.json());

// Main User Routes
app.use('/api/users', userRoutes);

// Swagger Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Simple Root Route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'User Service is running',
        docs: '/api-docs'
    });
});

/**
 * Global Error Handler Middleware
 */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});

module.exports = app;
