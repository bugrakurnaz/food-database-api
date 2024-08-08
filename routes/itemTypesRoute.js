const express = require('express');
const itemTypesController = require('../controllers/itemTypesController.js');
const router = express.Router();

router.get('/itemTypes', itemTypesController.getAllItemTypes);
router.get('/itemTypes/:id', itemTypesController.getItemTypeById);
router.post('/itemTypes', itemTypesController.createItemType);
router.put('/itemTypes/:id', itemTypesController.updateItemType);
router.delete('/itemTypes/:id', itemTypesController.deleteItemType);

module.exports = {router}
