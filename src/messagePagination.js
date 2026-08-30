export function paginateMessages(messages, cursor = 0, limit = 50) {
  const safeCursor = Math.max(0, cursor);
  return messages.slice(safeCursor, safeCursor + limit);
}