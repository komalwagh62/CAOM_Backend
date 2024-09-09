const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'mydb.cxeos2wmmsqf.us-east-2.rds.amazonaws.com',
  database: 'supplement',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
