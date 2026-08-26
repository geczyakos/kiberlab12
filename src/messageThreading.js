export function createReply(messages, parentMessageId, roomId, userId, text) {
  const id = messages.length + 1;
  const reply = { id, roomId, userId, text, parentMessageId, sentAt: Date.now() };
  messages.push(reply);
  return reply;
}