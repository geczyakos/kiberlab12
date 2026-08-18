export function softDeleteMessage(messages, messageId) {
  const message = messages.find((m) => m.id === messageId);
  if (!message) return null;
  message.deletedAt = Date.now();
  message.text = '[deleted]';
  return message;
}