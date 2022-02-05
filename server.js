const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products');
const app = express();

app.use(cors());

app.use('/api/products', productsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
