// TODO 3: SETUP CONFIG DATABASE
// import mysql
const mysql = require("mysql");
// import .env
require("dotenv").config();
// destruct object
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;
// update config db
const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE,
});
// connect to database
db.connect((err) => {
    if (err) {
        console.log("Connecting failed" + err.stack);
        return;
    } else {
        console.log("Database connected");
        return;
    }
});
// export db
module.exports = db;