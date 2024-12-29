const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMessages() {
  const messages = await prisma.message.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  return messages;
}

async function addMessage(messageText, username) {
  const newMessage = await prisma.message.create({
    data: {
      text: messageText,
      username: username,
    },
  });
  return newMessage;
}

module.exports = {
  getMessages,
  addMessage,
};