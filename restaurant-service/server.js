require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 8082;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Restaurant Service running on port ${PORT}`);
    // Blue color: \x1b[34m, Reset: \x1b[0m
    console.log(`Swagger UI available at \x1b[34mhttp://localhost:${PORT}/api-docs\x1b[0m`);
  });
});
