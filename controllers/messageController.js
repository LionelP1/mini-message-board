const messageQueries = require("../db/queries");

exports.getMessageList = async (req, res) => {
  try {
    const messages = await messageQueries.getMessages();
    res.render("index", { messages: messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createNewMessage = async (req, res) => {
  const { messageText, messageUser } = req.body;
  try {
    await messageQueries.addMessage(messageText, messageUser);
    res.redirect("/");
  } catch (error) {
    console.error('Error creating new message:', error);
    res.status(500).send('Internal Server Error');
  }
};

