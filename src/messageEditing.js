export function editMessage(messages, messageId, newText) {
  const message = messages.find((m) => m.id === messageId);
  if (!message) return null;
  message.text = newText;
  message.editedAt = Date.now();
  return message;
}