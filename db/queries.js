const pool = require('./pools');

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY added DESC');
  return rows;
}

async function addMessage(messageText, username) {
  await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [messageText, username]);
}

module.exports = {
  getMessages,
  addMessage,
};