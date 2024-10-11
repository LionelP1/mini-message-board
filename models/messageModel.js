const messages = [
  {
    text: "Hi there!",
    user: "Sally",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

exports.getMessages = () => messages;
  
exports.addMessage = (messageText, messageUser) => {
  messages.unshift({
    text: messageText,
    user: messageUser,
    added: formatDate(new Date()),
  });
};

function formatDate(date) {
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${datePart} ${timePart}`;
}