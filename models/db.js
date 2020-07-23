// const mysql = require("mysql");
var MySql = require('sync-mysql');
const dbConfig = require("../config/db.config.js");

// const connection = mysql.createConnection({
const connection = new MySql({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });

module.exports = connection;