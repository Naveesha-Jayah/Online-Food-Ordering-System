require('dotenv').config({ override: true });

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 8083;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Order Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start Order Service:', error.message);
    process.exit(1);
  }
};

startServer();
