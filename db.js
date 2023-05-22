const Pool = require('pg').Pool 
const config = require('dotenv').config()
const pool = new Pool({
    user: config.RDS_USERNAME || 'postgres',
    host: config.RDS_HOSTNAME || 'localhost',
    database: config.RDS_DB_NAME || 'postgres',
    password: config.RDS_PASSWORD|| 'qwerty',
    port: config.RDS_PORT || 5432,
    
  })

module.exports = pool;
//pool.on('connect',()=>console.log("Connected to dbv"))