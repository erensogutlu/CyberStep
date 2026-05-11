const { Pool } = require('pg');
require('dotenv').config();

const havuz = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  sorgu: (metin, parametreler) => havuz.query(metin, parametreler),
  havuz
};
