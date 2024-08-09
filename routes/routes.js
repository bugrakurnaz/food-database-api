const express = require('express');

const itemTypesController = require('../controllers/itemTypesController.js');
const itemsController = require('../controllers/itemsController.js');
const storedItemsController = require('../controllers/storedItemsController.js');
const router = express.Router();

router.get('/itemTypes', itemTypesController.getAllItemTypes);
router.get('/itemTypes/:id', itemTypesController.getItemTypeById);
router.post('/itemTypes', itemTypesController.createItemType);
router.put('/itemTypes/:id', itemTypesController.updateItemType);
router.delete('/itemTypes/:id', itemTypesController.deleteItemType);

router.get('/items', itemsController.getAllItems);
router.get('/items/:id', itemsController.getItemById);
router.post('/items', itemsController.createItem);
router.put('/items/:id', itemsController.updateItem);
router.delete('/items/:id', itemsController.deleteItem);

router.get('/storedItems', storedItemsController.getAllStoredItems);
router.get('/storedItems/:id', storedItemsController.getStoredItemById);
router.post('/storedItems', storedItemsController.createStoredItem);
router.put('/storedItems/:id', storedItemsController.updateStoredItem);
router.delete('/storedItems/:id', storedItemsController.deleteStoredItem);



module.exports = {router}
