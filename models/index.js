const User = require("./User");
const Blogs = require("./Blog");
const userComments = require("./Comment");

User.hasMany(Blogs);
Blogs.belongsTo(User);

Blogs.hasMany(userComments);
userComments.belongsTo(Blogs);

module.exports = {
    User,
    Blogs,
    userComments,
};