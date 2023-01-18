const userLogin = require("./user");
const Blogs = require("./blog");

userLogin.hasMany(Blogs);
Blogs.belongsTo(userLogin)


module.exports = {
    userLogin,
    Blogs
}