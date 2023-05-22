const Pool = require('pg').Pool 
const config = require('dotenv').config()
const pool = new Pool({
    user: config.RDS_USERNAME || 'shash',
    host: config.RDS_HOSTNAME || 'localhost',
    database: config.RDS_DB_NAME || 'shash_rds',
    password: config.RDS_PASSWORD|| 'shash1234',
    port: config.RDS_PORT || 5432,
    
  })

module.exports = pool;
//pool.on('connect',()=>console.log("Connected to dbv"))
