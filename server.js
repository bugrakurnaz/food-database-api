const express = require('express');
const { ItemType, StoredItem } = require('./models/models');
const routes = require('./routes/routes')
const cors = require('cors')
const app = express();
const port = 8079;


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', routes.router);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
