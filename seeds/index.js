const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {

    }
]

const blogs = [
    {

    }
]

const Seed = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

Seed()