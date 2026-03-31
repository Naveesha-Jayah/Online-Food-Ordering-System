const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delivery Service API',
      version: '1.0.0',
      description: 'API Documentation for Delivery Microservice',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'API Gateway'
      },
      {
        url: 'http://localhost:8085',
        description: 'Delivery Service (Direct)'
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerDocs };
