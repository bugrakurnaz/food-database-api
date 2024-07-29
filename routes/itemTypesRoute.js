const express = require('express');
const itemTypesController = require('../controllers/itemTypesController');

const router = express.Router();

router.get('/itemTypes', itemTypesController.getAllItemTypes);
router.get('/itemTypes/:id', itemTypesController.getItemTypeById);

module.exports = {router}