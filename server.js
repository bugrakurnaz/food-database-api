const express = require('express');
const { Item } = require('./models/models');
const itemTypesRoutes = require('./routes/itemTypesRoute')
const cors = require('cors')
const app = express();
const port = 8079;


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', itemTypesRoutes.router);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
