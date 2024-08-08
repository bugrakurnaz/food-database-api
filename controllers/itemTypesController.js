const { ItemType } = require('../models/models');

exports.getAllItemTypes = async (req, res) => {
    const itemTypes = await ItemType.findAll();
    return res.json(itemTypes);
};

exports.getItemTypeById = async (req, res) => {
    const id = req.params.id;
    const item = await ItemType.findByPk(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'ItemType not found' });
    }
};

exports.createItemType = async (req, res) => {
    try {
        const newItemType = await ItemType.create({ name: req.body.name, unit: req.body.unit });
        res.status(201).json(newItemType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateItemType = async (req, res) => {
    const id = req.params.id;
    const itemType = await ItemType.findByPk(id);
    if (itemType) {
        itemType.name = req.body.name;
        itemType.unit = req.body.unit;
        await itemType.save();
        res.json(itemType);
    } else {
        res.status(404).json({ message: 'ItemType not found' });
    }
};

exports.deleteItemType = async (req, res) => {
    const id = req.params.id; 
    const itemType = await ItemType.findByPk(id);
    if (itemType) { 
        await itemType.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'ItemType not found' });
    }
};
