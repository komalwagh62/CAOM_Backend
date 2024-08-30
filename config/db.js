const { Pool } = require('pg');

const pool = new Pool({
  user: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',  // create new RDS PostgreSql Database.
  host: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  database: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  password: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  port: 5432,
});

module.exports = pool;
