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

// Swagger Documentation Route (Access through Gateway: http://localhost:8080/api/users/api-docs)
app.use('/api/users/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api/users/swagger.json', (req, res) => {
    res.json(swaggerSpec);
});

// Main User Routes
app.use('/api/users', userRoutes);

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
