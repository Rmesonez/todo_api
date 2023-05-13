const { DataTypes } = require('sequelize');
const db = require('../database/database');


const SubCategories = db.define('subcategories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    subcategory: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});


module.exports = SubCategories;