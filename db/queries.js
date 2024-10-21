const pool = require('./pools');

async function getMessages() {
  const query = `
      SELECT 
          id, 
          text, 
          username, 
          TO_CHAR(added, 'Dy Mon DD YYYY HH24:MI') AS added 
      FROM 
          messages 
      ORDER BY 
          id DESC
  `;
  const { rows } = await pool.query(query);
  return rows;
}

async function addMessage(messageText, username) {
  await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [messageText, username]);
}

module.exports = {
  getMessages,
  addMessage,
};