export function createMessageStore() {
  const messages = [];
  let nextId = 1;
  return {
    send(roomId, userId, text) {
      const id = nextId++;
      messages.push({ id, roomId, userId, text, sentAt: Date.now() });
      return id;
    },
    listForRoom(roomId) {
      return messages.filter((m) => m.roomId === roomId);
    },
    all() {
      return messages;
    },
  };
}