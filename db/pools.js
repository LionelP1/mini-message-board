require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  // Uncomment the following if you need to test with individual parameters later
  // host: process.env.DB_HOST,                // Database host
  // user: process.env.DB_USER,                // Database username
  // password: process.env.DB_PASSWORD,        // Database password
  // database: process.env.DB_NAME,            // Database name
  // port: process.env.DB_PORT || 5432,        // Database port

  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;