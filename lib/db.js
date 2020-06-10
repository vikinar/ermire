const {Pool}  = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'Vikinar93',
    host: 'localhost',
    port: 1999,
    database: 'ermire'
})

module.exports = pool
