const express = require('express');
const cors = require('cors');
const deliveryRoutes = require('./routes/deliveryRoutes');
const { swaggerUi, swaggerDocs } = require('./swagger/swagger');

const app = express();

app.use(express.json());
app.use(cors());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Delivery Routes
app.use('/api/delivery', deliveryRoutes);

module.exports = app;
