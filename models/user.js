const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    username: {

         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{

        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},
{
    hooks:{
        beforeCreate: async userinfo=>{
            userinfo.password = await bcrypt.hash(userinfo.password,5)
            return userinfo
        }
    },
    sequelize,
});

module.exports= User