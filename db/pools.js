require('dotenv').config();
const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const connectionOptions = isProduction
  ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }  // Production (Render)
  : { 
      host: process.env.DB_HOST, 
      user: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME, 
      port: process.env.DB_PORT || 5432,
      ssl: false
    };

const pool = new Pool(connectionOptions);

module.exports = pool;
