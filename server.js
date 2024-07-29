const express = require('express');
const { Item } = require('./models/models');
const itemTypesRoutes = require('./routes/itemTypesRoute')
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', itemTypesRoutes.router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
