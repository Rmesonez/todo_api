const { DataTypes } = require('sequelize');
const db = require('../database/database');
const Tasks = require('./tasks.model');


const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});

//relationship
Categories.hasMany(Tasks, { foreignKey: 'category_id', sourceKey: 'id' });

Tasks.belongsTo(Categories, { foreignKey: 'category_id', sourceKey: 'id' });

module.exports = Categories;