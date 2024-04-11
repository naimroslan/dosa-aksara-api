const { Pool } = require('pg')
const pool = new Pool({
  host: '192.168.1.9',
  port: 5432,
  user: 'postgres',
  password: '#2dRwC&5',
  database: 'dosa-aksara'
})

module.exports = pool