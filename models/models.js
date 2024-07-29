const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const ItemType = sequelize.define('ItemType', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: ItemType,
            key: 'id'
        }
    }
});

const StoredItem = sequelize.define('StoredItem', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    itemType: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Item,
            key: 'id'
        }
    }
});



(async () => {
    await sequelize.sync();
})();

module.exports = { ItemType, Item, StoredItem };