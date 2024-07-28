const express = require('express');
const { Item } = require('./models');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
// Get all items
app.get('/api/items', async (req, res) => {
    const items = await Item.findAll();
    res.json(items);
});

// Get item by id
app.get('/api/items/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await Item.findByPk(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Create new item
app.post('/api/items', async (req, res) => {
    try {
        const newItem = await Item.create({ name: req.body.name });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update item by id
app.put('/api/items/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await Item.findByPk(id);
    if (item) {
        item.name = req.body.name;
        await item.save();
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete item by id
app.delete('/api/items/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await Item.findByPk(id);
    if (item) {
        await item.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
