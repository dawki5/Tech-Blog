const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class websiteBlogs extends Model {}

websiteBlogs.init({
    title: {
         type: DataTypes.STRING,
         allowNull:false
    },
    content: {
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    Sequelize
});

module.exports= websiteBlogs