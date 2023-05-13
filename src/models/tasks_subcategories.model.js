const { DataTypes } = require('sequelize');
const db = require('../database/database');
const Task = require('./tasks.model');
const SubCategory = require('./subcategories.model');


const TasksSubCategories = db.define('tasks_subcategories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
},{
    timestamps: false
});

//relashionships
Task.belongsToMany(SubCategory, { through: TasksSubCategories });

SubCategory.belongsToMany(Task, { through: TasksSubCategories });


module.exports = TasksSubCategories;