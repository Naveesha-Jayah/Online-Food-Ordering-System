const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Restaurant Service API',
      version: '1.0.0',
      description: 'API Documentation for Restaurant Service',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'API Gateway'
      },
      {
        url: 'http://localhost:8082',
        description: 'Restaurant Service (Direct)'
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api/restaurants/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.get('/api/restaurants/swagger.json', (req, res) => {
    res.json(specs);
  });
};