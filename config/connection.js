const Sequelize = require('sequelize');
require('dotenv').config();

let SQ;

if (process.env.STATUS) {
    SQ = new Sequelize(process.env.Dev_Port);
} else {
    SQ = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'db.host',
            dialect: 'mysql',
            port: 3001
        }
    );
}

module.exports = SQ;