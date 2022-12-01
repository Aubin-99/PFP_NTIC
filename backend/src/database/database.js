const mysql = require("mysql");
const databaseConfig = require("./databaseConfig.js");

const database = mysql.createConnection({
    host : databaseConfig.HOST,
    user: databaseConfig.USER,
    database: databaseConfig.DATABASE
});

database.connect(error =>{
    if (error) throw error;
    console.log("Successfully connected to the database");
});

module.exports = database;