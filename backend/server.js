const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const mongoDB = require('./config/db');
mongoDB();

const PORT = 9898;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});