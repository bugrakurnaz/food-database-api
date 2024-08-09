const {ItemType, StoredItem} = require('../models/models')

exports.getAllStoredItems = async(req, res) => {
    const storedItems = await StoredItem.findAll();
    return res.json(storedItems);
};

exports.getStoredItemById = async(req, res) => {
    const id = req.params.id;
    const item = await StoredItem.findByPk(id);
    if (item) {
        return res.json(item);
    } else {
        return res.status(404).json({message: 'StoredItem not found'});
    }
};

exports.createStoredItem = async (req, res) => {
    try {
        const storedItem = await ItemType.create({
            amount: req.body.amount,
            expirationDate: req.body.expirationDate,
            itemType: req.body.itemType
        });
        res.status(201).json(storedItem)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.updateStoredItem = async (req, res) => {
    try {
        const id = req.params.id;
        const storedItem = await ItemType.findByPk(id);
        if (storedItem) {
            storedItem.amount = req.body.amount;
            storedItem.expirationDate = req.body.expirationDate;
            storedItem.itemType = req.body.itemType;

            await storedItem.save();
            res.json(storedItem);
        } else {
            res.status(404).json({message: 'StoredItem not found'});
        }
    } catch (error) {
        res.status(404).json({message: 'StoredItem not found'});
    }
};

exports.deleteStoredItem = async (req, res) => {
    const id = req.params.id;
    const storedItem = await ItemType.findByPk(id);
    if (storedItem) {
        await storedItem.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).json({message: 'StoredItem not found'});     
    }
}