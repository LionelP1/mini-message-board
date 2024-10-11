const messageModel = require("../models/messageModel");

exports.getMessageList = (req, res) => {
  const messages = messageModel.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

exports.createNewMessage = (req, res) => {
  const { messageText, messageUser } = req.body;
  messageModel.addMessage(messageText, messageUser);
  res.redirect("/");
};