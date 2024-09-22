const mysql = require('mysql2/promise')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'dw_classicmodels',
    password:'lavon'
})

module.exports = { db }