const messages = [
    {
      text: "Hi there!",
      user: "Sally",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
];

exports.getMessages = () => {messages};
  
exports.addMessage = (messageText, messageUser) => {
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
};
  