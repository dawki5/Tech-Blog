const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class userComments extends Model {}

userComments.init({
    body: {
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    Sequelize
});

module.exports= userComments