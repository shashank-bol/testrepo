const Pool = require('pg').Pool 
const config = require('dotenv').config()
const pool = new Pool({
    user: config.RDS_USERNAME || 'postgres',
    host: config.RDS_HOSTNAME || 'testdb.cbmcqryckfcu.ap-south-1.rds.amazonaws.com',
    database: config.RDS_DB_NAME || 'shash_rds',
    password: config.RDS_PASSWORD|| 'FRB8lYKyFcar3Nvpiw3N',
    port: config.RDS_PORT || 5432,
    
  })

module.exports = pool;
//pool.on('connect',()=>console.log("Connected to dbv"))
