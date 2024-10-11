const messageModel = require("../models/messageModel");

// Get the list of messages
exports.getMessageList = (req, res) => {
  const messages = messageModel.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};