export function createReadReceiptTracker() {
  const lastRead = new Map();
  return {
    markRead(roomId, userId, messageId) {
      lastRead.set(`${roomId}:${userId}`, messageId);
    },
    getLastRead(roomId, userId) {
      return lastRead.get(`${roomId}:${userId}`);
    },
  };
}