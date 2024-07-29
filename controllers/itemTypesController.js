const {ItemType} = require('../models/models');

exports.getAllItemTypes = async (req, res) => {
     const itemTypes = await ItemType.findAll();
     return res.json(itemTypes);
}

exports.getItemTypeById = async (req, res) => {
    const id = req.params.id;
    const item = await ItemType.findByPk(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'ItemType not found' });
    }
}