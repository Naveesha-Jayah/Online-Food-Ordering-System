const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const restaurantRoutes = require('./routes/restaurantRoutes');
const swaggerSetup = require('./swagger/swaggerConfig');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', restaurantRoutes);

// Swagger
swaggerSetup(app);

// Error Middleware
app.use(errorHandler);

module.exports = app;
