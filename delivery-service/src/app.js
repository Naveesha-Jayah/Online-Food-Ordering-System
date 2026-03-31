const express = require('express');
const cors = require('cors');
const deliveryRoutes = require('./routes/deliveryRoutes');
const { swaggerUi, swaggerDocs } = require('./swagger/swagger');

const app = express();

app.use(express.json());
app.use(cors());

// Swagger Documentation (Must be before main routes to prevent ID conflict)
app.use('/api/delivery/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/api/delivery/swagger.json', (req, res) => {
  res.json(swaggerDocs);
});

// Delivery Routes
app.use('/api/delivery', deliveryRoutes);

module.exports = app;
