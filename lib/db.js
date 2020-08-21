const {Pool}  = require('pg')

const pool = new Pool({
    user: 'vikinar',
    password: 'Vikinarf1f2f3f4',
    host: 'localhost',
    port: 5432,
    database: 'ermire_vikinar'
})

module.exports = pool
