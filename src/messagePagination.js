export function paginateMessages(messages, cursor = 0, limit = 50) {
  return messages.slice(cursor, cursor + limit);
}