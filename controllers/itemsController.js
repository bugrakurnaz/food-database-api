const { Item } = require('../models/models');

exports.getAllItems = async (req, res) => {
    const items = await Item.findAll();
    return res.json(items);
};

exports.getItemById = async (req, res) => {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (item) {
        return res.json(item);
    } else {
        return res.status(404).json({ message: 'Item not found' });
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = await Item.create({ 
            name: req.body.name, 
            typeId: req.body.typeId 
        });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateItem = async (req, res) => {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (item) {
        item.name = req.body.name;
        item.typeId = req.body.typeId;
        await item.save();
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

exports.deleteItem = async (req, res) => {
    const id = req.params.id; 
    const item = await Item.findByPk(id);
    if (item) { 
        await item.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
