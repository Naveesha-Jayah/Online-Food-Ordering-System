require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 8085;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Delivery Service running on port ${PORT}`);
});
