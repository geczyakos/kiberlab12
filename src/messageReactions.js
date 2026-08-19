export function addReaction(message, userId, emoji) {
  message.reactions = message.reactions || {};
  message.reactions[emoji] = message.reactions[emoji] || new Set();
  message.reactions[emoji].add(userId);
  return message;
}