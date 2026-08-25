export function createUnreadCounter() {
  const counts = new Map();
  return {
    increment(roomId, userId) {
      const key = `${roomId}:${userId}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    },
    reset(roomId, userId) {
      counts.set(`${roomId}:${userId}`, 0);
    },
    getCount(roomId, userId) {
      return counts.get(`${roomId}:${userId}`) || 0;
    },
  };
}