const messageModel = require("../models/messageModel");

// Get the list of messages
exports.getMessageList = (req, res) => {
  const messages = messageModel.getMessages(); // Get messages from the model
  res.render("index", { title: "Mini Messageboard", messages: messages });
};