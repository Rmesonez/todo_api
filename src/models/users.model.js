const { DataTypes } = require('sequelize');
const db = require('../database/database');
const Tasks = require('./tasks.model');


const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
},{
    timestamps: false
});

Users.hasMany(Tasks, { foreignKey: 'user_id', sourceKey: 'id'});

Tasks.belongsTo(Users, { foreignKey: 'user_id', sourceKey: 'id'});

module.exports = Users;