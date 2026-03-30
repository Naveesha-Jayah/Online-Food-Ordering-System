const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./middleware/errorHandler');
const swaggerDocs = require('./swagger/swagger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Docs setup
swaggerDocs(app);

// Mount routers
app.use('/api/payments', paymentRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
